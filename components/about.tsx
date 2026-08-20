"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Năm kinh nghiệm" },
  { value: "50+", label: "Dự án hoàn thành" },
  { value: "1M+", label: "Bản ghi xử lý" },
  { value: "99.9%", label: "Uptime" },
];

export function About() {
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
            About
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
            Xin chào, tôi là{" "}
            <span className="text-foreground font-medium">
              Nguyễn Quang Hiển
            </span>
            , một Senior Front-End Developer với hơn 6 năm kinh nghiệm trong
            việc xây dựng các ứng dụng web quy mô lớn, tối ưu hiệu suất và trải
            nghiệm người dùng.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Tôi chuyên về React, TypeScript và các kỹ thuật tối ưu hiệu suất.
            Tôi luôn tìm cách để code không chỉ chạy nhanh mà còn dễ bảo trì, mở
            rộng và test được. Mỗi dự án với tôi là một thách thức về mặt kỹ
            thuật, và tôi luôn tìm ra giải pháp tối ưu nhất.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Từ việc xây dựng UI cho 1 triệu+ records đến tối ưu bundle size và
            implement virtualization, tôi đã làm việc trên nhiều dự án khác nhau
            từ startup đến doanh nghiệp lớn. Tôi tin rằng một front-end
            developer thực sự good là người biết hiểu both business và technical
            depth.
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
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
