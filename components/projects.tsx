'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Store Management System',
    tag: 'Large-scale UI',
    problem: 'Hệ thống quản lý kho cần xử lý hàng triệu bản ghi cùng lúc, với bộ lọc, sắp xếp và cuộn mượt mà. Đòi hỏi hiệu năng render cao và trải nghiệm người dùng mượt mà.',
    solution: 'Xây dựng với React + TypeScript, sử dụng TanStack Virtual cho bảng dữ liệu lớn, TanStack Query cho cache và fetching, và Zustand cho state management tập trung.',
    tech: ['React', 'TypeScript', 'TanStack Virtual', 'TanStack Query', 'Zustand'],
    architecture: 'Kiến trúc phân tách rõ ràng: data layer (TanStack Query), state layer (Zustand), UI layer (React components). Áp dụng virtualization để chỉ render các phần tử trong viewport.',
    demo: '#',
    github: 'https://github.com/',
  },
  {
    id: 2,
    title: 'Wedding Website',
    tag: 'Performance / SEO',
    problem: 'Cần một trang web thi cưới tải nhanh trên mạng di động, đẹp trên mọi kích thước màn hình, và dễ để cô dâu chú rể tự cập nhật nội dung.',
    solution: 'Xây dựng bằng Next.js với static generation, tối ưu ảnh tự động, và một hệ thống nội dung đơn giản dạng file để chỉnh sửa không cần biết code.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    architecture: 'Static site với ISR cho phần RSVP, tối ưu Core Web Vitals để đạt điểm Lighthouse cao trên cả di động.',
    demo: '#',
    github: 'https://github.com/',
  },
  {
    id: 3,
    title: 'Đền Thờ Dương 1C',
    tag: 'Content-driven site',
    problem: 'Website giới thiệu di tích cần thể hiện được chiều sâu nội dung, hình ảnh và lịch sử, nhưng vẫn phải tải nhanh và thân thiện với công cụ tìm kiếm.',
    solution: 'Thiết kế hệ thống trang nội dung statically, tối ưu SEO on-page (structured data, sitemap, meta), và tối ưu hình ảnh theo định dạng hiện đại để giảm dung lượng tải.',
    tech: ['Next.js', 'Tailwind CSS', 'Structured Data'],
    architecture: 'Static generation toàn bộ trang nội dung, CDN cho ảnh, và cấu trúc route rõ ràng phục vụ index tốt trên công cụ tìm kiếm.',
    demo: '#',
    github: 'https://github.com/',
  },
]

export function Projects() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggleProject = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Dự án nổi bật</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
      </motion.div>

      <div className="mt-12 space-y-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className={`bg-card border rounded-xl overflow-hidden transition-all duration-300 ${
              openId === project.id ? 'border-primary/50' : 'border-border'
            }`}
          >
            <button
              onClick={() => toggleProject(project.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-primary text-sm">
                  {String(project.id).padStart(2, '0')}
                </span>
                <span className="font-semibold text-lg">{project.title}</span>
                <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                  {project.tag}
                </span>
              </div>
              <ChevronRight
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  openId === project.id ? 'rotate-90' : ''
                }`}
              />
            </button>

            {openId === project.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-border"
              >
                <div className="p-6 grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">Problem</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">Tech stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">Architecture</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">{project.architecture}</p>
                    </div>
                    <div className="flex gap-4 pt-2">
                      <a href={project.demo} className="text-sm text-primary hover:underline font-mono flex items-center gap-1">
                        Demo ↗
                      </a>
                      <a href={project.github} className="text-sm text-muted-foreground hover:text-foreground hover:underline font-mono flex items-center gap-1">
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}