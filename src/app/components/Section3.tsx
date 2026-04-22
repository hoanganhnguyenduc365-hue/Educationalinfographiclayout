import React, { useState } from "react";
import { PieChart, MapPin, Shield, BarChart, Heart, Sparkles, Landmark, Briefcase, BookOpen, Users, MousePointerClick, CheckCircle2, ChevronRight, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Section3() {
  const dacDiem = [
    {
      title: "Chênh lệch dân số",
      icon: <PieChart />,
      desc: "Tỷ lệ chênh lệch lớn giữa dân tộc đa số và thiểu số.",
      detail: "Dân tộc Kinh chiếm đa số (hơn 85% dân số), trong khi 53 dân tộc thiểu số chỉ chiếm khoảng 14%. Sự chênh lệch này đòi hỏi các chính sách đặc thù bảo vệ quyền lợi các dân tộc ít người, tránh nguy cơ bị lấn át về kinh tế và văn hóa."
    },
    {
      title: "Cư trú đan xen",
      icon: <MapPin />,
      desc: "Không có ranh giới hành chính riêng rẽ.",
      detail: "Các dân tộc sống xen kẽ, không có lãnh thổ biệt lập. Đặc điểm này tăng cường sự giao lưu, hiểu biết lẫn nhau nhưng cũng đòi hỏi hệ thống chính sách đồng bộ, thống nhất trên cùng một địa bàn."
    },
    {
      title: "Vị trí chiến lược",
      icon: <Shield />,
      desc: "Phân bố chủ yếu ở địa bàn trọng yếu về an ninh.",
      detail: "Phần lớn đồng bào dân tộc thiểu số sinh sống ở vùng sâu, vùng xa, biên giới, hải đảo. Đây là những địa bàn xung yếu, do đó phát triển kinh tế vùng này gắn liền mật thiết với nhiệm vụ bảo vệ an ninh Tổ quốc."
    },
    {
      title: "Phát triển không đều",
      icon: <BarChart />,
      desc: "Trình độ phát triển kinh tế - xã hội chênh lệch.",
      detail: "Do điều kiện tự nhiên khắc nghiệt và lịch sử để lại, trình độ phát triển giữa các dân tộc có sự phân hóa lớn. Thu hẹp khoảng cách phát triển là ưu tiên hàng đầu của Đảng và Nhà nước."
    },
    {
      title: "Truyền thống đoàn kết",
      icon: <Heart />,
      desc: "Gắn bó lâu đời trong lịch sử dựng nước và giữ nước.",
      detail: "Trải qua hàng ngàn năm đấu tranh chống ngoại xâm, các dân tộc anh em đã hình thành khối đại đoàn kết vững chắc. Sự gắn kết này là tài sản vô giá và sức mạnh nội sinh bảo đảm sự tồn tại của quốc gia."
    },
    {
      title: "Bản sắc đa dạng",
      icon: <Sparkles />,
      desc: "Mỗi dân tộc có sắc thái văn hóa riêng phong phú.",
      detail: "54 dân tộc là 54 sắc màu văn hóa với ngôn ngữ, phong tục, nghệ thuật riêng biệt, góp phần làm nên nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc nhưng vẫn thống nhất trong đa dạng."
    },
  ];

  const chinhSach = [
    {
      id: "chinhtri",
      title: "Chính Trị",
      icon: <Landmark />,
      short: "Bình đẳng, quản lý nhà nước",
      details: [
        "Thực hiện nguyên tắc các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.",
        "Nâng cao nhận thức của đồng bào về đường lối, chủ trương của Đảng, củng cố niềm tin vào chế độ.",
        "Tăng cường tỷ lệ cán bộ người dân tộc thiểu số tham gia vào các cơ quan bộ máy nhà nước từ Trung ương đến địa phương."
      ]
    },
    {
      id: "kinhte",
      title: "Kinh Tế",
      icon: <Briefcase />,
      short: "Phát triển vùng sâu, thu hẹp khoảng cách",
      details: [
        "Phát triển kinh tế - xã hội miền núi, vùng sâu, vùng xa, vùng đồng bào dân tộc thiểu số.",
        "Khai thác tiềm năng, thế mạnh của từng vùng, từng dân tộc để phát triển kinh tế hàng hóa.",
        "Đầu tư mạnh mẽ vào hạ tầng cơ sở (điện, đường, trường, trạm), thực hiện xóa đói giảm nghèo bền vững."
      ]
    },
    {
      id: "vanhoa",
      title: "Văn Hóa",
      icon: <BookOpen />,
      short: "Bảo tồn bản sắc, bài trừ hủ tục",
      details: [
        "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
        "Bảo tồn, tôn tạo và phát huy những giá trị văn hóa truyền thống tốt đẹp (ngôn ngữ, chữ viết, trang phục, lễ hội) của các dân tộc thiểu số.",
        "Kiên quyết đấu tranh, bài trừ các hủ tục lạc hậu, mê tín dị đoan ảnh hưởng tiêu cực đến đời sống."
      ]
    },
    {
      id: "xahoi",
      title: "Xã Hội",
      icon: <Heart />,
      short: "Y tế, giáo dục, an sinh xã hội",
      details: [
        "Thực hiện tốt các chính sách an sinh xã hội, giải quyết vấn đề lao động, việc làm cho đồng bào.",
        "Đầu tư phát triển hệ thống giáo dục, y tế, nâng cao dân trí và thể trạng người dân khu vực thiểu số.",
        "Có chính sách đặc thù chăm sóc sức khỏe cộng đồng ở các vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn."
      ]
    },
    {
      id: "anninh",
      title: "An Ninh Quốc Phòng",
      icon: <Shield />,
      short: "Bảo vệ biên cương, chống diễn biến",
      details: [
        "Tăng cường sức mạnh bảo vệ Tổ quốc trên cơ sở bảo đảm ổn định chính trị từ cơ sở vùng dân tộc thiểu số.",
        "Gắn kết chặt chẽ giữa phát triển kinh tế với củng cố an ninh quốc phòng tại các địa bàn trọng điểm, biên giới, hải đảo.",
        "Chủ động ngăn chặn, đập tan mọi âm mưu lợi dụng vấn đề dân tộc, tôn giáo của thế lực thù địch nhằm chia rẽ đại đoàn kết."
      ]
    }
  ];

  const [activePolicy, setActivePolicy] = useState(0);
  const angle = 360 / chinhSach.length;
  const wheelRotation = -activePolicy * angle;

  return (
    <section id="section3" className="w-full bg-[#002244] py-24 px-6 relative overflow-hidden scroll-mt-16 font-['Montserrat',sans-serif]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#003366] via-[#002244] to-[#001122]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGgtdi0tIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=')] opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 border border-white/10 backdrop-blur-sm">
            <Users className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f1d570] to-[#D4AF37] mb-6 uppercase tracking-wide py-2">
            3. Dân tộc và quan hệ dân tộc ở Việt Nam
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6"></div>
          <p className="mt-4 text-white/80 font-medium max-w-3xl mx-auto text-lg leading-relaxed">
            Nghiên cứu các đặc điểm cốt lõi của cộng đồng các dân tộc và định hướng chính sách toàn diện của Đảng & Nhà nước.
          </p>
        </motion.div>

        {/* Subsection A: 6 Đặc điểm (Glassmorphism Slide-up Grid) */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white bg-white/5 py-3 px-10 rounded-full inline-block backdrop-blur-md border border-white/10 shadow-xl uppercase tracking-widest">
              Đặc Điểm Dân Tộc Việt Nam
            </h3>
            <p className="text-[#D4AF37] text-sm mt-4 flex items-center justify-center gap-2 font-bold bg-[#D4AF37]/10 inline-flex px-6 py-2 rounded-full">
              <MousePointerClick className="w-4 h-4" /> Di chuột vào thẻ để xem phân tích chi tiết
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dacDiem.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 group cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-500 min-h-[300px]"
              >
                {/* Default View */}
                <div className="flex flex-col items-center text-center p-10 h-full transition-all duration-700 ease-out group-hover:scale-95 group-hover:opacity-0">
                  <div className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent w-24 h-24 rounded-full flex items-center justify-center text-[#D4AF37] mb-8 border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    {React.cloneElement(item.icon as React.ReactElement, { className: 'w-12 h-12' })}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">{item.title}</h4>
                  <p className="text-white/60 text-base font-medium px-2">{item.desc}</p>

                  <div className="mt-auto pt-8">
                    <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-5 py-2.5 rounded-full">
                      Xem chi tiết
                    </span>
                  </div>
                </div>

                {/* Hover Reveal Panel */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#b38f20] p-10 flex flex-col justify-center text-[#003366] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
                    {React.cloneElement(item.icon as React.ReactElement, { className: 'w-32 h-32 text-[#003366]' })}
                  </div>
                  <h4 className="text-2xl font-black mb-6 uppercase tracking-wide relative z-10">{item.title}</h4>
                  <div className="w-16 h-1.5 bg-[#003366]/30 mb-6 rounded-full relative z-10"></div>
                  <p className="font-bold text-[16px] leading-relaxed text-justify relative z-10 text-[#003366]/90">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white bg-white/5 py-3 px-10 rounded-full inline-block backdrop-blur-md border border-white/10 shadow-xl uppercase tracking-widest">
              Quan Điểm
            </h3>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative group"
          >
            {/* Animated glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-[#f1d570] to-[#D4AF37] rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-[#001122]/80 backdrop-blur-xl p-10 md:p-14 rounded-[2rem] border border-[#D4AF37]/30 shadow-2xl overflow-hidden text-center">
              {/* Decorative Quotes */}
              <div className="absolute top-4 left-6 text-7xl md:text-9xl font-serif text-[#D4AF37]/20 pointer-events-none select-none">"</div>
              <div className="absolute -bottom-8 right-6 text-7xl md:text-9xl font-serif text-[#D4AF37]/20 pointer-events-none select-none">"</div>
              
              <div className="relative z-10">
                <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 leading-[1.6] tracking-wide mx-auto max-w-3xl drop-shadow-sm">
                  <span className="text-[#D4AF37]">Vấn đề dân tộc</span> và <span className="text-[#D4AF37]">đoàn kết dân tộc</span> là vấn đề chiến lược cơ bản, lâu dài và cấp bách. Các dân tộc bình đẳng, đoàn kết, tương trợ, cùng phát triển.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subsection B: Chính sách (Interactive Rotating Wheel) */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-white bg-white/5 py-3 px-10 rounded-full inline-block backdrop-blur-md border border-white/10 shadow-xl uppercase tracking-widest">
              Chính Sách Dân Tộc Của Đảng Và Nhà Nước
            </h3>
            <p className="text-[#D4AF37] text-sm mt-4 flex items-center justify-center gap-2 font-bold bg-[#D4AF37]/10 inline-flex px-6 py-2 rounded-full">
              <MousePointerClick className="w-4 h-4" /> Xoay vòng quay để khám phá chính sách
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center bg-black/20 rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl">

            {/* Left: Interactive Rotating Wheel */}
            <div className="w-full lg:w-5/12 flex justify-center py-10 lg:py-0">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">

                {/* Static Center Node */}
                <div className="absolute inset-0 m-auto w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b38f20] z-20 flex flex-col items-center justify-center border-[6px] border-[#003366] shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                  <Navigation className="w-8 h-8 md:w-10 md:h-10 text-[#003366] mb-1.5" />
                  <span className="font-black text-[11px] md:text-sm text-center uppercase text-[#003366] leading-tight tracking-widest">
                    Chính Sách<br />Của Đảng
                  </span>
                </div>

                {/* Rotating Container */}
                <motion.div
                  animate={{ rotate: wheelRotation }}
                  transition={{ type: "spring", stiffness: 40, damping: 15, mass: 1 }}
                  className="absolute inset-0 rounded-full border-2 border-white/20 border-dashed"
                >
                  {chinhSach.map((item, idx) => {
                    const itemAngle = idx * angle;
                    return (
                      <div
                        key={item.id}
                        className="absolute top-0 left-1/2 w-0 origin-bottom"
                        style={{ height: '50%', transform: `rotate(${itemAngle}deg)` }}
                      >
                        {/* Connecting Line */}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-t from-transparent via-[#D4AF37]/30 to-[#D4AF37]/80" />

                        {/* Satellite Button */}
                        <motion.button
                          onClick={() => setActivePolicy(idx)}
                          animate={{ rotate: -wheelRotation - itemAngle }}
                          transition={{ type: "spring", stiffness: 40, damping: 15, mass: 1 }}
                          className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center border-4 transition-all duration-300 z-30 shadow-2xl focus:outline-none ${activePolicy === idx
                            ? 'bg-[#D4AF37] border-white text-[#003366] scale-125 shadow-[0_0_40px_rgba(212,175,55,0.8)]'
                            : 'bg-[#001122] border-[#D4AF37]/50 text-white hover:bg-[#003366] hover:border-[#D4AF37] hover:scale-110'
                            }`}
                        >
                          {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 md:w-10 md:h-10 mb-1" })}
                          <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider leading-tight text-center px-1">
                            {item.title}
                          </span>
                        </motion.button>
                      </div>
                    )
                  })}
                </motion.div>
              </div>
            </div>

            {/* Right: Dynamic Detail Panel */}
            <div className="w-full lg:w-7/12 h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePolicy}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl h-full flex flex-col relative overflow-hidden shadow-2xl group"
                >
                  {/* Decorative background icon */}
                  <div className="absolute -top-10 -right-10 p-8 opacity-5 scale-150 group-hover:scale-[2] transition-transform duration-[2000ms] pointer-events-none">
                    {React.cloneElement(chinhSach[activePolicy].icon as React.ReactElement, { className: 'w-96 h-96' })}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 text-[#D4AF37] px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest w-max mb-6 border border-[#D4AF37]/20">
                      <Landmark className="w-4 h-4" /> Phương hướng {activePolicy + 1}
                    </div>

                    <h4 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-wide">
                      {chinhSach[activePolicy].title}
                    </h4>
                    <p className="text-[#D4AF37] font-medium text-lg md:text-xl mb-8 pb-6 border-b border-white/10">
                      {chinhSach[activePolicy].short}
                    </p>

                    <ul className="space-y-6 flex-1 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#D4AF37]/50 scrollbar-track-transparent">
                      {chinhSach[activePolicy].details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-start gap-5 group/item"
                        >
                          <div className="bg-[#D4AF37]/20 p-2 rounded-full mt-0.5 shrink-0 group-hover/item:bg-[#D4AF37] transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] group-hover/item:text-[#003366] transition-colors" />
                          </div>
                          <span className="text-white/80 leading-relaxed text-[16px] md:text-[17px] font-medium group-hover/item:text-white transition-colors">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
