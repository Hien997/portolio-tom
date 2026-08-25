"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";

const stats = [
  { value: "6+", labelKey: "about.stats.yearsLabel" },
  { value: "1M+", labelKey: "about.stats.recordsLabel" },
  { value: "10+", labelKey: "about.stats.projectsLabel" },
  { value: "60fps", labelKey: "about.stats.fpsLabel" },
];

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("about.title")}
          </h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("about.intro.1")}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t("about.text.1")}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t("about.text.2")}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t("about.text.3")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{t(stat.labelKey)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
