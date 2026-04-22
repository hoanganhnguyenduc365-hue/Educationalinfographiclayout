import React from "react";
import { Link } from "react-router";
import { ArrowLeft, Bot, Sparkles, Code, BookOpen, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function AIUsage() {
  return (
    <div className="min-h-screen bg-[#001122] text-white font-['Montserrat',sans-serif] overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#003366]/40 via-[#002244] to-[#001122]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGgtdi0tIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=')] opacity-30"></div>

      {/* Decorative Lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        {/* Header / Nav */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-16"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-[#D4AF37] transition-colors group bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-wider">Trở về trang chủ</span>
          </Link>
          
          <div className="flex items-center gap-3 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/30">
            <Bot className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase">AI Integration</span>
          </div>
        </motion.div>

        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-2xl mb-8 border border-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <Sparkles className="w-10 h-10 text-[#D4AF37]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-white mb-6 uppercase tracking-wider py-2">
            Ứng Dụng AI
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Trong quá trình thực hiện bài làm, nhóm đã phối hợp sử dụng các công cụ trí tuệ nhân tạo (AI) với vai trò cụ thể như sau:
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <BookOpen />,
              title: "NotebookLM",
              desc: "Sử dụng để hệ thống hóa, trích xuất các luận điểm chính từ giáo trình Chủ nghĩa xã hội khoa học và tài liệu bài giảng Chương 6."
            },
            {
              icon: <Sparkles />,
              title: "Gemini",
              desc: "Hỗ trợ tóm tắt các nội dung dài, cấu trúc lại các ý tưởng chính và thiết kế bảng so sánh để tăng tính trực quan."
            },
            {
              icon: <Code />,
              title: "FigmaAI",
              desc: "Tạo ra khung sườn của web, từ đó nhóm thêm các nội dung của giáo trình và nội dung của tình huống giả định."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-[#D4AF37]/5 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-[#D4AF37]/20 w-16 h-16 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#D4AF37]/30 shadow-lg">
                {React.cloneElement(item.icon as React.ReactElement, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed font-medium text-[15px] flex-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Official Sources Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 mb-10 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#D4AF37]/20 p-3 rounded-xl border border-[#D4AF37]/30">
              <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
              Nguồn Kiểm Chứng Thông Tin
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Hiến pháp nước Cộng hòa Xã hội Chủ nghĩa Việt Nam (2013)",
                desc: "Chương I, Điều 5 khẳng định quyền bình đẳng, đoàn kết giữa các dân tộc."
              },
              {
                title: "Văn kiện Đại hội Đại biểu toàn quốc lần thứ XIII",
                desc: "Về định hướng phát triển vùng đồng bào dân tộc thiểu số và miền núi."
              },
              {
                title: "Giáo trình Chủ nghĩa xã hội khoa học (Bộ Giáo dục và Đào tạo)",
                desc: "Nội dung Chương 6 về Vấn đề dân tộc trong thời kỳ quá độ."
              }
            ].map((source, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-[#001122]/50 border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                <div className="mt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{source.title}</h4>
                  <p className="text-white/70 font-medium">{source.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Academic Integrity Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-[#D4AF37] to-[#b38f20] rounded-3xl p-1 shadow-2xl"
        >
          <div className="bg-[#0B1E40] rounded-[22px] p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <div className="bg-[#D4AF37]/20 p-5 rounded-full shrink-0 border-2 border-[#D4AF37]/50">
              <ShieldCheck className="w-12 h-12 text-[#D4AF37]" />
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-wide">
                Cam Kết Liêm Chính Học Thuật
              </h4>
              <p className="text-white/80 text-lg leading-relaxed font-medium">
                Tất cả nội dung được trình bày hoàn toàn nằm trong <span className="text-[#D4AF37] font-bold">"Giáo trình Chủ Nghĩa Xã Hội Khoa Học"</span>. Các công cụ AI chỉ được sử dụng với vai trò hỗ trợ định dạng, tóm tắt và xây dựng giao diện.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
