"use client"

import { Rocket, Lightbulb, ArrowBigRight, Route, Zap, Sparkles, Search } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

const sections = [
  { id: "tldr", label: "tl;dr", icon: Zap },
  { id: "outcome", label: "Outcome", icon: Sparkles },
  { id: "opportunity", label: "Opportunity", icon: Search },
  { id: "process", label: "Process", icon: Route },
  { id: "solution", label: "Solution", icon: Lightbulb },
  { id: "insights", label: "Insights", icon: Rocket },
  { id: "nextsteps", label: "Next Steps", icon: ArrowBigRight },
]

export default function FloatNavDex() {
  const [activeSection, setActiveSection] = useState("tldr")
  const { theme } = useTheme()
  const navContainerRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const customColors = {
    lightBg: "#032121",
    lightBorder: "#032121",
    lightText: "#dac4e1",
    lightHoverBg: "#032121",
    lightHoverText: "#111827",
    lightActiveBg: "#dac4e1",
    lightActiveText: "#032121",
    darkBg: "#E7DAEA",
    darkBorder: "#dac4e1",
    darkText: "#4C6365",
    darkHoverBg: "#E7DAEA",
    darkHoverText: "#032121",
    darkActiveBg: "#ffffff",
    darkActiveText: "#000000"
  }

  // Handle page scrolling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 50 // Reduced offset for better detection

      // Check if we're at the very top (tl;dr section)
      if (scrollPosition < 100) {
        console.log("Setting active section to tldr (top of page)")
        setActiveSection("tldr")
        return
      }

      // Check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    // Call once on mount to set initial active section
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-scroll nav bar to keep active section in view
  useEffect(() => {
    const activeButton = buttonRefs.current[activeSection]
    const navContainer = navContainerRef.current

    if (activeButton && navContainer) {
      // Get the button's position relative to the container
      const buttonRect = activeButton.getBoundingClientRect()
      const containerRect = navContainer.getBoundingClientRect()
      
      // Calculate if the button is outside the visible area
      const buttonLeft = buttonRect.left - containerRect.left + navContainer.scrollLeft
      const buttonRight = buttonLeft + buttonRect.width
      const containerWidth = navContainer.clientWidth
      
      // If button is to the right of visible area
      if (buttonRight > navContainer.scrollLeft + containerWidth) {
        navContainer.scrollTo({
          left: buttonRight - containerWidth + 20, // 20px padding
          behavior: 'smooth'
        })
      }
      // If button is to the left of visible area
      else if (buttonLeft < navContainer.scrollLeft) {
        navContainer.scrollTo({
          left: buttonLeft - 20, // 20px padding
          behavior: 'smooth'
        })
      }
    }
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="container">
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-screen-sm">
        <div 
          ref={navContainerRef}
          className="rounded-full px-2 md:px-6 py-2 md:py-3 shadow-lg overflow-x-auto transition-colors duration-300 scrollbar-hide"
          style={{
            backgroundColor: theme === 'dark' ? customColors.darkBg : customColors.lightBg,
            border: `1px solid ${theme === 'dark' ? customColors.darkBorder : customColors.lightBorder}`,
            color: theme === 'dark' ? customColors.darkText : customColors.lightText,
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
          }}
        >
          <div className="flex items-center space-x-1 md:space-x-2 min-w-max">
            {sections.map((section) => {
              const Icon = section.icon
              const isActive = activeSection === section.id

              return (
                <button
                  key={section.id}
                  ref={(el) => {
                    if (el) {
                      buttonRefs.current[section.id] = el
                      // Debug: Log when tl;dr button ref is assigned
                      if (section.id === "tldr") {
                        console.log("tl;dr button ref assigned:", el)
                      }
                    }
                  }}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "shadow-none"
                      : ""
                  }`}
                  style={{
                    backgroundColor: isActive 
                      ? (theme === 'dark' ? customColors.darkActiveBg : customColors.lightActiveBg)
                      : 'transparent',
                    color: isActive 
                      ? (theme === 'dark' ? customColors.darkActiveText : customColors.lightActiveText)
                      : (theme === 'dark' ? customColors.darkText : customColors.lightText),
                    ...(isActive ? {} : {
                      '--tw-hover-bg-opacity': '0.8',
                      backgroundColor: theme === 'dark' ? customColors.darkHoverBg : customColors.lightHoverBg
                    })
                  }}
                >
                  <Icon size={16} className="md:w-[18px] md:h-[18px] flex-shrink-0" />
                  <span className="text-xs md:text-sm font-mono">{section.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}