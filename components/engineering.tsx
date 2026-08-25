'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './language-provider'

const engineeringCards = [
  {
    metric: '1M+',
    labelKey: 'engineering.largeScaleUI',
    descKey: 'engineering.largeScaleUIDesc',
  },
  {
    metric: '<16ms',
    labelKey: 'engineering.virtualization',
    descKey: 'engineering.virtualizationDesc',
  },
  {
    metric: '0 jank',
    labelKey: 'engineering.webWorker',
    descKey: 'engineering.webWorkerDesc',
  },
  {
    metric: 'N-tier',
    labelKey: 'engineering.architecture',
    descKey: 'engineering.architectureDesc',
  },
  {
    metric: 'Cache-first',
    labelKey: 'engineering.dataFetching',
    descKey: 'engineering.dataFetchingDesc',
  },
  {
    metric: 'Core Web Vitals',
    labelKey: 'engineering.performance',
    descKey: 'engineering.performanceDesc',
  },
]

export function Engineering() {
  const { t } = useLanguage()
  return (
    <section id="engineering" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("engineering.title")}</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          {t("engineering.subtitle")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {engineeringCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-card border border-border rounded-xl p-6 hover:bg-card/80 hover:border-primary/50 transition-all duration-300"
          >
            <div className="text-2xl font-bold text-primary mb-2 font-display">
              {card.metric}
            </div>
            <div className="font-semibold mb-2">{t(card.labelKey)}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(card.descKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}