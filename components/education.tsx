'use client'

import { motion } from 'framer-motion'

const educationItems = [
  {
    name: 'Cử nhân Công nghệ thông tin',
    org: '[Tên trường]',
    year: '[Năm tốt nghiệp]',
  },
  {
    name: '[Tên chứng chỉ, ví dụ: Frontend Architecture]',
    org: '[Đơn vị cấp]',
    year: '[Năm]',
  },
  {
    name: '[Tên chứng chỉ khác]',
    org: '[Đơn vị cấp]',
    year: '[Năm]',
  },
]

export function Education() {
  return (
    <section id="education" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education / Certificates</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
      </motion.div>

      <div className="mt-12 border border-border rounded-xl overflow-hidden">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center justify-between gap-4 p-6 ${
              index !== educationItems.length - 1 ? 'border-b border-border' : ''
            } hover:bg-card/50 transition-colors`}
          >
            <div>
              <div className="font-semibold">{item.name}</div>
              <div className="text-muted-foreground text-sm mt-1">{item.org}</div>
            </div>
            <div className="font-mono text-sm text-muted-foreground whitespace-nowrap">
              {item.year}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}