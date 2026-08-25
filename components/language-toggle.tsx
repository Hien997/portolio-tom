'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from './language-provider'

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-16 h-8 rounded-md bg-muted animate-pulse" />
  }

  const toggleLang = () => {
    setLang(lang === 'vi' ? 'en' : 'vi')
  }

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-0.5 px-2 py-1.5 text-xs font-mono rounded-md bg-muted hover:bg-accent/10 transition-colors border border-border"
      aria-label="Toggle language"
      title="Switch language"
    >
      <span
        className={`px-1.5 py-0.5 rounded transition-colors ${
          lang === 'vi'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground'
        }`}
      >
        VN
      </span>
      <span className="text-border">|</span>
      <span
        className={`px-1.5 py-0.5 rounded transition-colors ${
          lang === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground'
        }`}
      >
        EN
      </span>
    </button>
  )
}