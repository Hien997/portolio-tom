'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    period: '2023 — Hiện tại',
    role: 'Senior Front-End Developer',
    company: '[Tên công ty]',
    description: 'Dẫn dắt kiến trúc front-end cho hệ thống quản lý nội bộ, thiết kế lại tầng data-fetching và chuẩn bộ component dùng chung cho nhiều team.',
    metrics: [
      'Giảm 40% thời gian tải trang',
      'Render mượt 1M+ dòng dữ liệu',
      'Dẫn dắt 4 kỹ sư front-end',
    ],
  },
  {
    period: '2021 — 2023',
    role: 'Front-End Developer',
    company: '[Tên công ty]',
    description: 'Phát triển và bảo trì các module dashboard, xây dựng thư viện component nội bộ trên nền React + TypeScript, tích hợp CI/CD cho front-end.',
    metrics: [
      'Bundle size giảm 35%',
      'Coverage test 80%+',
    ],
  },
  {
    period: '2019 — 2021',
    role: 'Front-End Developer',
    company: '[Tên công ty]',
    description: 'Xây dựng các sản phẩm web từ đầu cho khách hàng vừa và nhỏ, làm việc trực tiếp với thiết kế và backend để hoàn thiện sản phẩm end-to-end.',
    metrics: [
      '10+ dự án đã bàn giao',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Kinh nghiệm</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
      </motion.div>

      <div className="mt-12 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
          >
            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-sm text-primary">{exp.period}</span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold">{exp.role}</span>
                <span className="text-muted-foreground">at</span>
                <span className="text-muted-foreground">{exp.company}</span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.metrics.map((metric, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-md font-mono">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}