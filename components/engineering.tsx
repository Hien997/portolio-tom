'use client'

import { motion } from 'framer-motion'

const engineeringCards = [
  {
    metric: '1M+',
    label: 'Large-scale UI',
    desc: 'Render bảng dữ liệu hàng triệu dòng mà vẫn giữ thao tác cuộn và lọc mượt.',
  },
  {
    metric: '<16ms',
    label: 'Virtualization',
    desc: 'Chỉ render các phần tử trong viewport, dùng TanStack Virtual cho danh sách và bảng cực lớn.',
  },
  {
    metric: '0 jank',
    label: 'Web Worker',
    desc: 'Đưa các phép tính nặng (lọc, sắp xếp, tổng hợp) ra khỏi main thread để UI không bị đứng.',
  },
  {
    metric: 'N-tier',
    label: 'Frontend Architecture',
    desc: 'Tách rõ tầng dữ liệu, trạng thái và hiển thị; thiết kế hệ thống component dùng chung cho nhiều team.',
  },
  {
    metric: 'Cache-first',
    label: 'API / Data fetching',
    desc: 'Chuẩn hóa tier fetch với TanStack Query: cache, retry, phân trang cursor, và đồng bộ trạng thái server-client.',
  },
  {
    metric: 'Core Web Vitals',
    label: 'Performance optimization',
    desc: 'Tối ưu LCP/CLS/INP, code-splitting, lazy loading, và giám sát hiệu năng thực tế trên production.',
  },
]

export function Engineering() {
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Engineering</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Không chỉ viết UI đẹp — mà còn chịu tải, chịu quy mô, và dễ bảo trì theo thời gian.
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
            <div className="font-semibold mb-2">{card.label}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}