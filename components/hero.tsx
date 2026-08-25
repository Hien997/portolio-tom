"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="section-padding max-w-7xl mx-auto pt-32 md:pt-40 pb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary font-mono text-sm md:text-base tracking-wider uppercase"
          >
            {t("hero.greeting")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            {t("hero.title")} <span className="text-gradient">{t("hero.role")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              {t("hero.cta.projects")}
              <ArrowDown size={18} />
            </Link>
            <Link
              href="#cv"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              {t("hero.cta.cv")}
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/hiennguyen"
                target="_blank"
                rel="noopener"
                className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/nguyen-quang-hien-5410701b9"
                target="_blank"
                rel="noopener"
                className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:quanghiennguyen97@gmail.com"
                className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
            <div className="absolute inset-4 bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
              <div className="p-4 border-b border-border bg-muted/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">
                    portfolio.tsx
                  </span>
                </div>
              </div>
              <div className="p-4 font-mono text-sm space-y-2">
                <div>
                  <span className="text-purple-500">const</span>{" "}
                  <span className="text-blue-500">portfolio</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-green-500">'name'</span>:{" "}
                  <span className="text-amber-500">'Nguyen Quang Hien'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-green-500">'role'</span>:{" "}
                  <span className="text-amber-500">'Senior FE Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-green-500">'stack'</span>: [
                  <span className="text-amber-500">React</span>,{" "}
                  <span className="text-amber-500">TypeScript</span>,{" "}
                  <span className="text-amber-500">Next.js</span>],
                </div>
                <div className="pl-4">
                  <span className="text-green-500">'experience'</span>:{" "}
                  <span className="text-blue-500">6</span>{" "}
                  <span className="text-muted-foreground">years</span>,
                </div>
                <div className="pl-4">
                  <span className="text-green-500">'focus'</span>: [
                  <span className="text-amber-500">Performance</span>,{" "}
                  <span className="text-amber-500">Scalable UI</span>]
                </div>
                <div>{"}"}</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">
                  Available for hire
                </span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-xl">
              <div className="text-xs text-muted-foreground font-mono">
                <span className="text-primary font-bold">6+</span> years
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                <span className="text-primary font-bold">1M+</span> records
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
