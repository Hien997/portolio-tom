"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "vi" | "en";

interface LanguageContext {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContext | undefined>(undefined);

// Import translations
import { vi } from "@/lib/i18n/vi";
import { en } from "@/lib/i18n/en";

const translations: Record<Language, Record<string, string>> = { vi, en };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("vi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && (saved === "vi" || saved === "en")) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", lang);
      // Update HTML lang attribute
      document.documentElement.lang = lang === "en" ? "en" : "vi";
    }
  }, [lang, mounted]);

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
