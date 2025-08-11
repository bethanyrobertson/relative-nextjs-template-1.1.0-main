'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Lenis from 'lenis'
import { Renderer, Program, Mesh, Triangle, Vec2, Texture } from 'ogl'

// GLSL shaders
const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

uniform vec2 uResolution;
uniform vec2 uTextureResolution;

varying vec2 vUv;

vec2 resizeUvCover(vec2 uv, vec2 size, vec2 resolution) {
    vec2 ratio = vec2(
        min((resolution.x / resolution.y) / (size.x / size.y), 1.0),
        min((resolution.y / resolution.x) / (size.y / size.x), 1.0)
    );

    return vec2(
        uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        uv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
}

void main() {
  vUv = resizeUvCover(uv, uTextureResolution, uResolution);
  gl_Position = vec4(position, 0, 1);
}
`

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform vec2 uMouseIntro;

uniform float uIntro;
uniform float uRadius;
uniform float uStrength;
uniform float uBulge;

varying vec2 vUv;

vec2 bulge(vec2 uv, vec2 center) {
  uv -= center; // center to mouse

  float dist = length(uv) / uRadius; // amount of distortion based on mouse pos
  float distPow = pow(dist, 4.); // exponential as you are far from the mouse
  float strengthAmount = uStrength / (1.0 + distPow); // strength

  uv *= (1. - uBulge) + uBulge * strengthAmount; // use uBulge to smoothly reset/add effect

  uv += center; // reset pos

  return uv;
}

void main() {
  // Add bulge effect based on mouse
  vec2 mixMouse = mix(uMouseIntro, uMouse, uIntro);
  vec2 bulgeUV = bulge(vUv, mixMouse);

  vec4 tex = texture2D(uTexture, bulgeUV);

  gl_FragColor.rgb = tex.rgb;
  gl_FragColor.a = 1.0;
}
`

const isTouch = () => {
  if ('standalone' in navigator) return true
  const hasCoarse = window.matchMedia('(pointer: coarse)').matches
  if (hasCoarse) return true
  const hasPointer = window.matchMedia('(pointer: fine)').matches
  if (hasPointer) return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

// Loader Manager for textures (singleton)
class LoaderManager {
  constructor() { this.assets = {} }
  get(name) { return this.assets[name] }
  load = (data, gl) =>
    new Promise((resolve, reject) => {
      const promises = []
      for (let i = 0; i < data.length; i++) {
        const { name, texture } = data[i]
        if (texture && !this.assets[name]) {
          promises.push(this.loadTexture(texture, name, gl))
        }
      }
      Promise.all(promises).then(() => resolve()).catch(reject)
    })
  loadTexture(url, name, gl) {
    if (!this.assets[name]) this.assets[name] = {}
    return new Promise((resolve, reject) => {
      const image = new window.Image()
      const texture = new Texture(gl)
      image.onload = () => {
        texture.image = image
        this.assets[name] = texture
        resolve(image)
      }
      image.onerror = () => {
        console.error(`Failed to load texture: ${url}`)
        reject(new Error(`Failed to load texture: ${url}`))
      }
      image.src = url
    })
  }
}
const loaderManager = new LoaderManager()

class Card {
  #el
  #renderer
  #mesh
  #program
  #mouse = new Vec2(0, 0)
  #mouseTarget = new Vec2(0, 0)
  #elRect
  #canMove = true
  #src
  #index
  #isTouch
  #guiObj
  #visible = false
  constructor({ el, src, index, bulge, strength, radius }) {
    this.#el = el
    this.#src = src
    this.#index = index
    this.#guiObj = { bulge, strength, radius }
    this.setScene()
    this.#isTouch = isTouch()
  }
  get type() { return 'card' }
  get program() { return this.#program }
  async setScene() {
    this.#renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas: this.#el,
      width: this.#el.offsetWidth,
      height: this.#el.offsetHeight,
    })
    const { gl } = this.#renderer
    await loaderManager.load(
      [{ name: `image_${this.#index}`, texture: this.#src }],
      gl
    )
    gl.clearColor(1, 1, 1, 1)
    this.resize()
    const geometry = new Triangle(gl)
    const texture = loaderManager.get(`image_${this.#index}`)
    this.#program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: texture },
        uTextureResolution: { value: new Vec2(texture.image.width, texture.image.height) },
        uResolution: { value: new Vec2(gl.canvas.offsetWidth, gl.canvas.offsetHeight) },
        uMouse: { value: this.#mouse },
        uMouseIntro: { value: new Vec2(0.5, 0) },
        uIntro: { value: 0 },
        uBulge: { value: this.#guiObj.bulge },
        uRadius: { value: this.#guiObj.radius },
        uStrength: { value: this.#guiObj.strength },
      },
    })
    this.#mesh = new Mesh(gl, { geometry, program: this.#program })
    this.events()
    this.#visible = true
  }
  events() {
    this.#el.addEventListener('mouseenter', this.handleMouseEnter, false)
    this.#el.addEventListener('mouseleave', this.handleMouseLeave, false)
  }
  render = (t) => {
    if (!this.#program) return
    this.#mouseTarget.x = gsap.utils.interpolate(this.#mouseTarget.x, this.#mouse.x, 0.1)
    this.#mouseTarget.y = gsap.utils.interpolate(this.#mouseTarget.y, this.#mouse.y, 0.1)
    this.#program.uniforms.uMouse.value = this.#mouseTarget
    this.#renderer.render({ scene: this.#mesh })
  }
  mouseMove = (e) => {
    if (!this.#canMove || !this.#program || !this.#visible) return
    this.#elRect = this.#el.getBoundingClientRect()
    let eventX = this.#isTouch ? e.touches[0].pageX : e.clientX
    let eventY = this.#isTouch ? e.touches[0].pageY : e.clientY
    const x = (eventX - this.#elRect.left) / this.#el.offsetWidth
    const y = 1 - (eventY - this.#elRect.top) / this.#el.offsetHeight
    this.#mouse.x = gsap.utils.clamp(0, 1, x)
    this.#mouse.y = gsap.utils.clamp(0, 1, y)
  }
  handleMouseEnter = () => {
    if (!this.#canMove) return
    gsap.to(this.#program.uniforms.uBulge, { value: this.#guiObj.bulge, duration: 1, ease: 'expo.out' })
  }
  handleMouseLeave = () => {
    if (!this.#canMove) return
    gsap.to(this.#program.uniforms.uBulge, { value: 0, duration: 1, ease: 'expo.out' })
  }
  resize = () => {
    const w = this.#el.parentNode.offsetWidth
    const h = this.#el.parentNode.offsetHeight
    this.#renderer.setSize(w, h)
    this.#elRect = this.#el.getBoundingClientRect()
    if (this.#program) {
      this.#program.uniforms.uResolution.value = new Vec2(w, h)
    }
    this.#isTouch = isTouch()
  }
  dispose() {}
}

export default function WebGLBulgeEffect() {
  const containerRef = useRef(null)
  const lenisRef = useRef(null)
  const componentsRef = useRef([])

  // Set your effect values here
  const BULGE = 1.0
  const STRENGTH = 1.5
  const RADIUS = 0.8

  const ASSETS = [
    '/casestudyindex/public/img/image-2.jpg',
    '/casestudyindex/public/img/image-2.jpg',
    '/casestudyindex/public/img/image-3.jpg',
    '/casestudyindex/public/img/image-4.jpg',
    '/casestudyindex/public/img/image-5.jpg',
    '/casestudyindex/public/img/image-6.jpg'
  ]

  // Optional: function to update all cards' uniforms programmatically
  const setBulgeEffect = (bulge, strength, radius) => {
    componentsRef.current.forEach(card => {
      if (card.program && card.program.uniforms) {
        card.program.uniforms.uBulge.value = bulge
        card.program.uniforms.uStrength.value = strength
        card.program.uniforms.uRadius.value = radius
      }
    })
  }

  useEffect(() => {
    if (!containerRef.current) return
    lenisRef.current = new Lenis({ infinite: false, lerp: 0.08 })
    const cards = containerRef.current.querySelectorAll('.card')
    cards.forEach((el, index) => {
      const canvas = el.querySelector('canvas')
      if (canvas) {
        const card = new Card({
          el: canvas,
          src: ASSETS[index],
          index,
          bulge: BULGE,
          strength: STRENGTH,
          radius: RADIUS
        })
        componentsRef.current.push(card)
      }
    })
    const handleRAF = (time) => {
      lenisRef.current.raf(time * 1000)
      for (let i = 0; i < componentsRef.current.length; i++) {
        const comp = componentsRef.current[i]
        if (typeof comp.render === 'function') {
          comp.render(time)
        }
      }
    }
    const handleResize = () => {
      for (let i = 0; i < componentsRef.current.length; i++) {
        const comp = componentsRef.current[i]
        if (typeof comp.resize === 'function') {
          comp.resize()
        }
      }
    }
    const handleMouseMove = (e) => {
      for (let i = 0; i < componentsRef.current.length; i++) {
        const comp = componentsRef.current[i]
        if (typeof comp.mouseMove === 'function') {
          comp.mouseMove(e)
        }
      }
    }
    gsap.ticker.add(handleRAF)
    window.addEventListener('resize', handleResize, false)
    if (isTouch()) {
      window.addEventListener('touchmove', handleMouseMove, false)
    } else {
      window.addEventListener('mousemove', handleMouseMove, false)
    }
    return () => {
      gsap.ticker.remove(handleRAF)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleMouseMove)
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
      componentsRef.current.forEach(comp => {
        if (typeof comp.dispose === 'function') {
          comp.dispose()
        }
      })
    }
  }, [])

  return (
    <div className="webgl-bulge-effect" ref={containerRef}>
      <div className="content">
        <div className="wrapper">
          <div className="scroll is-visible">Case Studies</div>
          {ASSETS.map((_, index) => (
            <div key={index} className="card">
              <div className="card__content">
                <canvas className="card__canvas"></canvas>
              </div>
              <div className="text">
                <div className="text__content">
                  <div className="text__words">Discover</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .webgl-bulge-effect {
          width: 100%;
          min-height: 100vh;
          background:  --background;
          color: #fff;
          font-family: 'Arial', sans-serif;
        }
        .content {
          position: relative;
          width: 100%;
        }
        .wrapper {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .scroll {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.2rem;
          opacity: 1;
          transition: opacity 0.3s ease;
          z-index: 100;
        }
        .scroll.is-visible {
          opacity: 1;
        }
        .card {
          position: relative;
          width: 100%;
          height: 60vh;
          overflow: hidden;
          border-radius: 1rem;
          background: #1a1a1a;
        }
        .card__content {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .card__canvas {
          width: 100%;
          height: 100%;
          display: block;
        }
        .text {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          z-index: 10;
        }
        .text__content {
          font-size: 3rem;
          font-weight: bold;
          color: #fff;
        }
        .text__words {
          display: inline-block;
        }
        @media (max-width: 768px) {
          .wrapper {
            padding: 1rem;
          }
          .card {
            height: 40vh;
            margin: 1rem 0;
          }
          .text__content {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}