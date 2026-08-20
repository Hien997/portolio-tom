'use client'

import { motion } from 'framer-motion'

const techGroups = [
  {
    title: 'Core',
    tech: ['React', 'TypeScript', 'Next.js', 'Vite'],
  },
  {
    title: 'Data & Forms',
    tech: ['TanStack Query', 'TanStack Table', 'TanStack Virtual', 'Zustand', 'React Hook Form', 'Zod'],
  },
  {
    title: 'UI',
    tech: ['Tailwind CSS', 'shadcn/ui'],
  },
  {
    title: 'Quality / Performance',
    tech: ['Vitest', 'Playwright', 'Web Vitals', 'Module Federation', 'Monorepo (Turborepo)'],
  },
]

export function Stack() {
  return (
    <section id="stack" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tech Stack</h2>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <div className="p-4 border-b border-border bg-muted/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">package.json</span>
            </div>
          </div>
          <pre className="p-4 font-mono text-sm overflow-x-auto">
            <code>
              <span className="text-purple-500">{'{'}</span>
              {'\n'}  <span className="text-blue-500">"core"</span>: <span className="text-purple-500">[</span><span className="text-amber-500">"react"</span>, <span className="text-amber-500">"typescript"</span>, <span className="text-amber-500">"next.js"</span>, <span className="text-amber-500">"vite"</span><span className="text-purple-500">]</span>,
              {'\n'}  <span className="text-blue-500">"data"</span>: <span className="text-purple-500">[</span><span className="text-amber-500">"@tanstack/query"</span>, <span className="text-amber-500">"@tanstack/table"</span>, <span className="text-amber-500">"@tanstack/virtual"</span><span className="text-purple-500">]</span>,
              {'\n'}  <span className="text-blue-500">"state"</span>: <span className="text-purple-500">[</span><span className="text-amber-500">"zustand"</span>, <span className="text-amber-500">"react-hook-form"</span>, <span className="text-amber-500">"zod"</span><span className="text-purple-500">]</span>,
              {'\n'}  <span className="text-blue-500">"ui"</span>: <span className="text-purple-500">[</span><span className="text-amber-500">"tailwindcss"</span>, <span className="text-amber-500">"shadcn/ui"</span><span className="text-purple-500">]</span>,
              {'\n'}  <span className="text-blue-500">"quality"</span>: <span className="text-purple-500">[</span><span className="text-amber-500">"vitest"</span>, <span className="text-amber-500">"playwright"</span>, <span className="text-amber-500">"eslint"</span><span className="text-purple-500">]</span>
              {'\n'}<span className="text-purple-500">{'}'}</span>
            </code>
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          {techGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-sm text-primary mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-md font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}