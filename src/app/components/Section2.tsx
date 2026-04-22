import React, { useState } from "react";
import { ArrowUpRight, Combine, Scale, Target, Users, GitBranch, MousePointerClick, Info, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Section2() {
  const [activeCuongLinh, setActiveCuongLinh] = useState<number | null>(1);

  const xuHuong = [
    {
      type: "Tách Ra Độc Lập",
      icon: <ArrowUpRight className="w-10 h-10 text-white" />,
      desc: "Sự thức tỉnh về ý thức dân tộc, đấu tranh giành độc lập, tự quyết và thành lập các quốc gia dân tộc độc lập.",
      detail: "Xu hướng này thường thể hiện rõ nét trong giai đoạn đầu của Chủ nghĩa tư bản hoặc ở các dân tộc bị áp bức (như phong trào giải phóng dân tộc thế kỷ 20). Các cộng đồng khao khát thoát khỏi ách đô hộ, tự quyết định vận mệnh, xây dựng nhà nước có chủ quyền độc lập để bảo vệ bản sắc và quyền lợi chính đáng của mình."
    },
    {
      type: "Liên Hiệp Lại",
      icon: <Combine className="w-10 h-10 text-white" />,
      desc: "Xu hướng xóa bỏ hàng rào ngăn cách, giao lưu kinh tế, văn hóa và hình thành các liên minh, liên hiệp quốc tế.",
      detail: "Xuất hiện mạnh mẽ trong thời đại toàn cầu hóa. Do sự phát triển của lực lượng sản xuất và phân công lao động quốc tế, các quốc gia ngày càng phụ thuộc lẫn nhau, buộc phải phá vỡ rào cản biên giới để hình thành các tổ chức liên kết khu vực và toàn cầu (như ASEAN, EU, WTO) nhằm hợp tác cùng phát triển."
    }
  ];

  const cuongLinh = [
    {
      id: 1,
      title: "Các Dân Tộc Hoàn Toàn Bình Đẳng",
      icon: <Scale className="w-8 h-8 text-[#003366]" />,
      desc: "Không phân biệt lớn nhỏ, trình độ. Mọi dân tộc đều có nghĩa vụ và quyền lợi ngang nhau trong quốc gia đa dân tộc.",
      detail: "Đây là quyền thiêng liêng nhất. Dù dân tộc lớn hay nhỏ, trình độ phát triển cao hay thấp đều phải được đối xử bình đẳng về mọi mặt (chính trị, kinh tế, văn hóa, xã hội). Bình đẳng không chỉ trên phương diện pháp lý mà quan trọng hơn là phải được thực hiện trên thực tế (xóa bỏ dần chênh lệch về kinh tế - xã hội)."
    },
    {
      id: 2,
      title: "Quyền Tự Quyết Của Các Dân Tộc",
      icon: <Target className="w-8 h-8 text-[#D4AF37]" />,
      desc: "Quyền tự quyết định vận mệnh, chế độ chính trị, con đường phát triển của mình không bị can thiệp.",
      detail: "Là quyền làm chủ vận mệnh của dân tộc mình, tự do lựa chọn chế độ chính trị và con đường phát triển kinh tế - xã hội mà không chịu sự can thiệp từ bên ngoài. Quyền này bao gồm cả việc tự do phân lập thành quốc gia độc lập hoặc tự nguyện liên hiệp lại với dân tộc khác trên cơ sở hoàn toàn bình đẳng."
    },
    {
      id: 3,
      title: "Liên Hiệp Giai Cấp Công Nhân",
      icon: <Users className="w-8 h-8 text-[#d4183d]" />,
      desc: "Đoàn kết công nhân tất cả các dân tộc lại. Đây là tư tưởng cơ bản, tạo sức mạnh đấu tranh giải phóng dân tộc.",
      detail: "Đây là cơ sở vững chắc nhất để giải quyết triệt để vấn đề dân tộc. Mục tiêu là tập hợp sức mạnh của giai cấp công nhân toàn thế giới để chống lại ách áp bức tư bản chủ nghĩa, bởi lẽ giai cấp công nhân chỉ có thể giải phóng chính mình khi đồng thời giải phóng được tất cả các dân tộc bị áp bức."
    }
  ];

  return (
    <section id="section2" className="w-full bg-white py-24 px-6 relative overflow-hidden scroll-mt-16 font-['Montserrat',sans-serif]">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#003366 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <GitBranch className="absolute -left-20 top-40 w-[500px] h-[500px] text-[#003366] opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-3 bg-[#f4f7fb] rounded-2xl shadow-sm border border-gray-200 mb-6">
            <Combine className="w-8 h-8 text-[#003366]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#003366] mb-4 uppercase tracking-tight">
            2. Lý luận Mác - Lênin về dân tộc
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            Hệ tư tưởng cốt lõi làm nền tảng giải quyết vấn đề dân tộc, bao gồm quy luật khách quan và Cương lĩnh hành động.
          </p>
        </motion.div>

        {/* 2 Xu Hướng Khách Quan - Interactive Flip/Hover Cards */}
        <div className="mb-28">
          <div className="text-center mb-10 flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#003366] bg-[#003366]/5 py-3 px-8 rounded-full border border-[#003366]/10 uppercase tracking-widest inline-flex items-center gap-3">
              Hai Xu Hướng Khách Quan
            </h3>
            <span className="text-sm text-gray-500 mt-4 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <MousePointerClick className="w-4 h-4" /> Di chuột hoặc chạm vào thẻ để xem phân tích
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 relative">
            {/* VS Badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#D4AF37] text-white font-black text-xl items-center justify-center rounded-full shadow-2xl border-4 border-white z-20">
              VS
            </div>

            {xuHuong.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 group cursor-pointer min-h-[350px] md:min-h-[400px] [perspective:1000px]"
              >
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front Side */}
                  <div className={`absolute w-full h-full [backface-visibility:hidden] rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-xl border-t-8 ${
                    idx === 0 
                      ? "bg-gradient-to-b from-[#003366] to-[#001f3f] text-white border-[#D4AF37]" 
                      : "bg-gradient-to-b from-white to-gray-50 border-[#003366]"
                  }`}>
                    <div className={`p-5 rounded-2xl mb-8 shadow-inner ${
                      idx === 0 ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-[#003366] border border-[#003366]/20"
                    }`}>
                      {React.cloneElement(item.icon, { className: `w-12 h-12 ${idx === 0 ? 'text-[#D4AF37]' : 'text-white'}` })}
                    </div>
                    <h4 className={`text-2xl md:text-3xl font-black mb-6 uppercase tracking-wider ${
                      idx === 0 ? "text-white" : "text-[#003366]"
                    }`}>
                      {item.type}
                    </h4>
                    <p className={`font-medium text-lg leading-relaxed ${
                      idx === 0 ? "text-white/80" : "text-gray-600"
                    }`}>
                      {item.desc}
                    </p>
                    <div className={`mt-auto pt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest animate-pulse ${
                      idx === 0 ? "text-[#D4AF37]" : "text-[#003366]"
                    }`}>
                      <Info className="w-5 h-5" /> Xem chi tiết
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl p-10 shadow-2xl flex flex-col items-center justify-center text-center border-b-8 ${
                    idx === 0 
                      ? "bg-white border-[#003366]" 
                      : "bg-[#003366] text-white border-[#D4AF37]"
                  }`}>
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                      {React.cloneElement(item.icon, { className: `w-full h-full ${idx === 0 ? 'text-[#003366]' : 'text-white'}` })}
                    </div>
                    <h4 className={`text-2xl font-black mb-6 uppercase border-b-2 pb-4 inline-block ${
                      idx === 0 ? "text-[#003366] border-[#D4AF37]" : "text-[#D4AF37] border-white/20"
                    }`}>
                      Phân Tích Bối Cảnh
                    </h4>
                    <p className={`text-lg leading-relaxed font-medium text-justify ${
                      idx === 0 ? "text-gray-700" : "text-white/90"
                    }`}>
                      {item.detail}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3 Cương Lĩnh Dân Tộc - Interactive Pillars */}
        <div className="relative mt-20 bg-[#f8fbff] rounded-[3rem] p-8 md:p-14 shadow-inner border border-blue-50/50">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center relative mb-12 z-20"
          >
            <div className="inline-flex items-center justify-center p-4 bg-[#D4AF37]/10 rounded-2xl mb-4 border border-[#D4AF37]/30">
              <Scale className="w-8 h-8 text-[#b38f20]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-widest text-[#003366] uppercase">
              Cương Lĩnh Dân Tộc Của V.I. Lênin
            </h3>
            <p className="mt-4 text-gray-500 font-medium flex items-center justify-center gap-2 bg-white inline-flex px-6 py-2 rounded-full shadow-sm border border-gray-200">
              <MousePointerClick className="w-4 h-4" /> Click để mở rộng từng nguyên tắc
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {cuongLinh.map((item, idx) => {
              const isActive = activeCuongLinh === item.id;

              return (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-2xl shadow-md border transition-all duration-500 overflow-hidden ${
                    isActive ? "border-[#003366] ring-4 ring-[#003366]/5" : "border-gray-200 hover:border-[#D4AF37]/50"
                  }`}
                >
                  {/* Header (Always visible) */}
                  <button 
                    onClick={() => setActiveCuongLinh(isActive ? null : item.id)}
                    className="w-full flex items-center gap-6 p-6 focus:outline-none"
                  >
                    <div className={`p-4 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? "bg-[#003366] text-white shadow-lg" : "bg-gray-50 text-gray-400 group-hover:bg-[#003366]/10"
                    }`}>
                      {React.cloneElement(item.icon, { className: `w-8 h-8 ${isActive ? "text-[#D4AF37]" : ""}` })}
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className={`text-xl md:text-2xl font-bold uppercase tracking-wide mb-2 transition-colors ${
                        isActive ? "text-[#003366]" : "text-gray-700"
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-gray-500 font-medium text-sm md:text-base pr-4 line-clamp-2 md:line-clamp-none">
                        {item.desc}
                      </p>
                    </div>
                    <div className={`p-2 rounded-full transition-colors ${isActive ? "bg-[#D4AF37]/20 text-[#b38f20]" : "bg-gray-100 text-gray-400"}`}>
                      <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${isActive ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  {/* Detail Panel (Expandable) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-2 bg-gradient-to-br from-blue-50/50 to-white border-t border-gray-100">
                          <div className="pl-0 md:pl-24">
                            <div className="bg-white p-6 rounded-2xl border-l-4 border-[#D4AF37] shadow-sm relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                {React.cloneElement(item.icon, { className: "w-32 h-32 text-[#D4AF37]" })}
                              </div>
                              <h5 className="font-bold text-[#b38f20] uppercase tracking-widest text-sm mb-3">Phân tích chuyên sâu</h5>
                              <p className="text-gray-700 text-lg leading-relaxed text-justify font-medium relative z-10">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
