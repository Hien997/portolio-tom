"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";

const experiences = [
  {
    periodKey: "experience.senior.period",
    roleKey: "experience.senior.title",
    companyKey: "experience.senior.company",
    descKey: "experience.senior.desc",
    metricsKeys: [
      "experience.senior.metrics.1",
      "experience.senior.metrics.2",
      "experience.senior.metrics.3",
    ],
  },
  {
    periodKey: "experience.mid.period",
    roleKey: "experience.mid.title",
    companyKey: "experience.mid.company",
    descKey: "experience.mid.desc",
    metricsKeys: ["experience.mid.metrics.1", "experience.mid.metrics.2"],
  },
  {
    periodKey: "experience.junior.period",
    roleKey: "experience.junior.title",
    companyKey: "experience.junior.company",
    descKey: "experience.junior.desc",
    metricsKeys: ["experience.junior.metrics.1"],
  },
];

export function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("experience.title")}
          </h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
      </motion.div>

      <div className="mt-12 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
          >
            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-sm text-primary">
                  {t(exp.periodKey)}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold">{t(exp.roleKey)}</span>
                <span className="text-muted-foreground">at</span>
                <span className="text-muted-foreground">
                  {t(exp.companyKey)}
                </span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t(exp.descKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.metricsKeys.map((metricKey, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-md font-mono"
                  >
                    {t(metricKey)}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
