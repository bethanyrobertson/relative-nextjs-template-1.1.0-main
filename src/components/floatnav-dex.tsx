"use client"

import { Zap, Rocket, Shield, Heart, Star, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

const sections = [
  { id: "outcomes", label: "Outcomes", icon: Zap },
  { id: "background", label: "Background", icon: Rocket },
  { id: "process", label: "Process", icon: Shield },
  { id: "solution", label: "Solution", icon: Heart },
  { id: "nextsteps", label: "Next Steps", icon: MessageCircle },
]

export default function FloatNavDex() {
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="container">
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-screen-sm">
        <div className="bg-white dark:bg-gray-900 rounded-full px-2 md:px-6 py-2 md:py-3 shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto transition-colors duration-300">
          <div className="flex items-center space-x-1 md:space-x-2 min-w-max">
            {sections.map((section) => {
              const Icon = section.icon
              const isActive = activeSection === section.id

              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-md"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon size={16} className="md:w-[18px] md:h-[18px] flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium">{section.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}