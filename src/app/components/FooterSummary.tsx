import React from "react";
import { motion } from "motion/react";
import { BookOpen, Scale, Landmark, Users, CheckCircle2, ShieldCheck, Flag } from "lucide-react";

export function FooterSummary() {
  const summaries = [
    {
      step: "01",
      title: "Khái Niệm & Đặc Trưng",
      icon: <BookOpen className="w-8 h-8" />,
      desc: "Làm rõ bản chất Dân tộc theo nghĩa rộng (Quốc gia) và nghĩa hẹp (Tộc người). Khẳng định vai trò của lãnh thổ, kinh tế, ngôn ngữ, và bản sắc văn hóa."
    },
    {
      step: "02",
      title: "Lý Luận Mác - Lênin",
      icon: <Landmark className="w-8 h-8" />,
      desc: "Nhận diện 2 xu hướng khách quan (Tách ra độc lập & Liên hiệp lại) và nắm vững 3 nguyên tắc Cương lĩnh dân tộc của V.I. Lênin làm kim chỉ nam."
    },
    {
      step: "03",
      title: "Thực Tiễn Việt Nam",
      icon: <Users className="w-8 h-8" />,
      desc: "Đánh giá 6 đặc điểm cốt lõi của 54 dân tộc anh em. Thấu hiểu hệ thống chính sách toàn diện của Đảng nhằm củng cố khối đại đoàn kết."
    },
    {
      step: "04",
      title: "Phân Xử Khoa Học",
      icon: <Scale className="w-8 h-8" />,
      desc: "Biện chứng giữa bình đẳng pháp lý và thực tế. Nhận diện thách thức về chênh lệch kinh tế và cảnh giác trước âm mưu 'Diễn biến hòa bình'."
    }
  ];

  return (
    <footer id="footer-summary" className="w-full bg-[#0B1E40] text-white pt-24 pb-12 px-6 border-t-[12px] border-[#D4AF37] relative overflow-hidden font-['Montserrat',sans-serif]">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-md border border-white/20">
            <Flag className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-white mb-6 uppercase tracking-wider">
            Tổng Kết Nhóm 6
          </h2>
          <div className="h-1.5 w-32 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-white/80 font-medium max-w-3xl mx-auto text-lg leading-relaxed">
            Nhìn lại toàn bộ hành trình nghiên cứu "Vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội" qua 4 trụ cột kiến thức trọng tâm.
          </p>
        </motion.div>

        {/* 4 Pillars Grid (Interactive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {summaries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 relative overflow-hidden group hover:bg-[#D4AF37]/10 transition-all duration-500 cursor-default hover:-translate-y-2 shadow-2xl"
            >
              {/* Step Number Background */}
              <div className="absolute -top-4 -right-4 text-7xl font-black text-white/5 group-hover:text-[#D4AF37]/10 transition-colors duration-500">
                {item.step}
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37] to-[#b38f20] w-16 h-16 rounded-2xl flex items-center justify-center text-[#0B1E40] shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed text-[15px] font-medium text-justify group-hover:text-white/90 transition-colors">
                {item.desc}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D4AF37] group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </motion.div>
          ))}
        </div>

        {/* Grand Conclusion Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D4AF37] to-[#b38f20] rounded-3xl p-1 shadow-2xl"
        >
          <div className="bg-[#0B1E40] rounded-[22px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
            <div className="bg-[#D4AF37]/20 p-6 rounded-full shrink-0 border-2 border-[#D4AF37]/50">
              <ShieldCheck className="w-16 h-16 text-[#D4AF37]" />
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-wide">
                Kết Luận Toàn Diện
              </h4>
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-medium text-justify">
                Vấn đề dân tộc không chỉ là lý luận hàn lâm mà là vấn đề sinh tử của quốc gia. Bằng việc vận dụng sáng tạo Cương lĩnh Mác - Lênin vào thực tiễn 54 dân tộc, Đảng ta đã và đang xây dựng một khối đại đoàn kết vững chắc. Xóa bỏ hoàn toàn khoảng cách chênh lệch lịch sử là chặng đường dài, đòi hỏi sự kiên định, nguồn lực lớn và tinh thần cảnh giác cao độ.
              </p>
              <div className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#0B1E40] px-6 py-3 rounded-xl font-bold uppercase tracking-wider shadow-lg">
                <CheckCircle2 className="w-6 h-6" />
                Hoàn thành xuất sắc nhiệm vụ
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-medium">
          <p>© 2026 Bài thuyết trình Chính trị học.</p>
          <p className="flex items-center gap-2">
            Thực hiện bởi <span className="text-[#D4AF37] font-bold">Nhóm 6</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
