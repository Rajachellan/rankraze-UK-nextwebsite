'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className="theme-switch">
      <label htmlFor="theme-toggle" className="sr-only">
      Toggle dark mode
   </label>

      <input
        type="checkbox"
        className="checkbox"
        id="theme-toggle"
        aria-label="Toggle dark mode"
        checked={isDark}
        onChange={handleToggle}
      />
      <label htmlFor="theme-toggle" className="label w-16 h-8">
        <svg className="moon w-4 h-4" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg className="sun w-4 h-4" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M22 12L23 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2V1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 23V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 20L19 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 4L19 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 20L5 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 4L5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 12L2 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="ball w-6 h-6 top-1 left-1"></div>
      </label>
    </div>
  )
}

// linear-gradient(180deg, #FFFFFF00 80%, var(--e-global-color-text) 100%)