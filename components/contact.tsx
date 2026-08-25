"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <div className="border-t border-border pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-primary font-mono text-sm">
              {t("hero.cta.contact")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {t("contact.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              <Mail size={18} />
              {t("contact.email")}
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Github size={18} />
              {t("contact.github")}
            </Link>
            <Link
              href="https://www.linkedin.com/in/nguyen-quang-hien-5410701b9/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Linkedin size={18} />
              {t("contact.cta.linkedin")}
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              {t("contact.cta.cv")}
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
          <span>{t("contact.footer.copyright")}</span>
          <span>{t("contact.footer.built")}</span>
          <Link
            href="#"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            {t("contact.footer.backToTop")} <ArrowUp size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
