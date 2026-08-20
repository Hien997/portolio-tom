'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <div className="border-t border-border pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-primary font-mono text-sm">liên hệ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Đang tìm một Senior Front-End Developer?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sẵn sàng trao đổi về vị trí full-time, hoặc dự án cần một người xử lý phần hiệu năng và kiến trúc UI khó.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              <Mail size={18} />
              Email ↗
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Github size={18} />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              CV online
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground font-mono"
        >
          <span>© 2026 Hiển Nguyễn</span>
          <span>built with React / Next.js</span>
          <Link
            href="#"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}