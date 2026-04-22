import React, { useState } from "react";
import { Map, Briefcase, MessageCircle, BookOpen, Landmark, Brain, MousePointerClick, Globe2, Users, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Section1() {
  const [activeTab, setActiveTab] = useState<'rong' | 'hep'>('rong');
  const [activeIndex, setActiveIndex] = useState(0);

  const nghiaRong = [
    { 
      title: "Lãnh thổ chung", 
      icon: <Map className="w-6 h-6" />, 
      desc: "Ổn định, không bị chia cắt.",
      detail: "Lãnh thổ là không gian sinh tồn của dân tộc, bao gồm vùng đất, vùng trời, vùng biển thuộc chủ quyền quốc gia. Đây là cơ sở vật chất không thể thiếu để duy trì sự gắn kết và phát triển ổn định của một cộng đồng người qua nhiều thế hệ."
    },
    { 
      title: "Kinh tế chung", 
      icon: <Briefcase className="w-6 h-6" />, 
      desc: "Mối liên hệ kinh tế chặt chẽ.",
      detail: "Đây là đặc trưng quan trọng nhất tạo nên sự liên kết vững chắc giữa các thành viên. Một nền kinh tế thống nhất phá vỡ ranh giới cục bộ, tạo ra thị trường chung toàn quốc và kết nối chặt chẽ các vùng miền với nhau."
    },
    { 
      title: "Ngôn ngữ chung", 
      icon: <MessageCircle className="w-6 h-6" />, 
      desc: "Phương tiện giao tiếp chính.",
      detail: "Quốc gia thường có một ngôn ngữ chung (quốc ngữ) làm công cụ giao tiếp thống nhất trong quản lý nhà nước, giáo dục, thông tin đại chúng... dù bên trong quốc gia đó có thể tồn tại nhiều ngôn ngữ tộc người khác nhau."
    },
    { 
      title: "Văn hóa chung", 
      icon: <BookOpen className="w-6 h-6" />, 
      desc: "Bản sắc văn hóa dân tộc.",
      detail: "Bao gồm hệ thống giá trị vật chất và tinh thần được sáng tạo, gìn giữ và lưu truyền. Nó tạo nên bản sắc quốc gia, thể hiện qua phong tục, tập quán, tâm lý chung, giúp nhận diện và phân biệt dân tộc này với dân tộc khác trên thế giới."
    },
    { 
      title: "Nhà nước chung", 
      icon: <Landmark className="w-6 h-6" />, 
      desc: "Quản lý hành chính nhà nước.",
      detail: "Nhà nước là thiết chế chính trị cao nhất đại diện cho quyền lực và ý chí của dân tộc. Nó thực hiện chức năng quản lý dân cư, bảo vệ độc lập, chủ quyền lãnh thổ thông qua hệ thống pháp luật và bộ máy hành chính thống nhất."
    },
  ];

  const nghiaHep = [
    { 
      title: "Ngôn ngữ chung", 
      icon: <MessageCircle className="w-6 h-6" />, 
      desc: "Phương tiện giao tiếp tộc người.",
      detail: "Các thành viên trong cùng một tộc người sử dụng chung một ngôn ngữ (tiếng mẹ đẻ) để giao tiếp sinh hoạt nội bộ, truyền đạt tri thức và gìn giữ văn hóa truyền thống đặc thù của tộc người đó."
    },
    { 
      title: "Văn hóa chung", 
      icon: <BookOpen className="w-6 h-6" />, 
      desc: "Phong tục, tập quán, tín ngưỡng.",
      detail: "Là những nét văn hóa đặc thù về truyền thống lịch sử, lễ hội, trang phục, kiến trúc, nghệ thuật dân gian... làm nổi bật bản sắc riêng, giúp phân biệt tộc người này với tộc người khác trong cùng một quốc gia."
    },
    { 
      title: "Ý thức tự giác", 
      icon: <Brain className="w-6 h-6" />, 
      desc: "Tự nhận diện tộc người, tên gọi chung.",
      detail: "Đây là tiêu chí quan trọng nhất để phân định các tộc người. Các thành viên tự nhận thức mình thuộc về một cộng đồng cụ thể, có chung một tên gọi, nguồn gốc lịch sử, thể hiện sự tự hào và ý thức bảo vệ cộng đồng."
    },
  ];

  const currentData = activeTab === 'rong' ? nghiaRong : nghiaHep;

  // Handle tab switch
  const handleTabSwitch = (tab: 'rong' | 'hep') => {
    setActiveTab(tab);
    setActiveIndex(0); // Reset index when switching tabs
  };

  return (
    <section id="section1" className="w-full bg-[#f8fbff] py-24 px-6 scroll-mt-16 font-['Montserrat',sans-serif] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#003366]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-md border border-[#D4AF37]/30 mb-6">
            <Globe2 className="w-8 h-8 text-[#003366]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-4 uppercase tracking-tight">
            1. Khái niệm & Đặc trưng dân tộc
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg">
            Hai cách tiếp cận cơ bản về khái niệm Dân tộc trong khoa học chính trị.
          </p>
        </motion.div>

        {/* Interactive Dashboard Layout */}
        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left Column: Navigation & List */}
          <div className="w-full lg:w-5/12 bg-gray-50 flex flex-col border-r border-gray-200">
            {/* Tab Toggles */}
            <div className="flex p-4 gap-2 bg-white border-b border-gray-200">
              <button 
                onClick={() => handleTabSwitch('rong')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'rong' 
                  ? "bg-[#003366] text-white shadow-md" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <Globe2 className="w-5 h-5" /> Nghĩa Rộng
              </button>
              <button 
                onClick={() => handleTabSwitch('hep')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'hep' 
                  ? "bg-[#D4AF37] text-white shadow-md" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <Users className="w-5 h-5" /> Nghĩa Hẹp
              </button>
            </div>

            {/* Hint */}
            <div className="px-6 py-4 bg-blue-50/50 border-b border-gray-200 flex items-center justify-between">
              <span className="text-sm font-medium text-[#003366]/70 flex items-center gap-2">
                <MousePointerClick className="w-4 h-4" /> Chọn đặc trưng để xem chi tiết
              </span>
              <span className="text-xs font-bold bg-[#003366]/10 text-[#003366] px-3 py-1 rounded-full">
                {currentData.length} yếu tố
              </span>
            </div>

            {/* Interactive List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {currentData.map((item, idx) => {
                const isActive = activeIndex === idx;
                const isRong = activeTab === 'rong';
                const activeColor = isRong ? 'border-[#003366] bg-[#003366]/5' : 'border-[#D4AF37] bg-[#D4AF37]/10';
                const inactiveColor = 'border-transparent bg-white hover:bg-gray-100';

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 group focus:outline-none ${isActive ? activeColor : inactiveColor}`}
                  >
                    <div className={`p-3 rounded-xl transition-colors ${
                      isActive 
                      ? (isRong ? 'bg-[#003366] text-white' : 'bg-[#D4AF37] text-white')
                      : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-lg mb-1 ${isActive ? (isRong ? 'text-[#003366]' : 'text-[#b38f20]') : 'text-gray-700'}`}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 line-clamp-1">{item.desc}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'}`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Display Area */}
          <div className="w-full lg:w-7/12 bg-white relative p-8 md:p-12 flex items-center justify-center min-h-[400px] overflow-hidden">
            {/* Watermark Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none scale-[3]">
              {currentData[activeIndex].icon}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${activeIndex}`}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full max-w-lg"
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm mb-6 ${
                  activeTab === 'rong' ? 'bg-[#003366]/10 text-[#003366]' : 'bg-[#D4AF37]/20 text-[#b38f20]'
                }`}>
                  {activeTab === 'rong' ? 'Quốc Gia' : 'Tộc Người'} 
                  <span className="opacity-50">•</span> 
                  Đặc trưng {activeIndex + 1}/{currentData.length}
                </div>

                <h3 className={`text-3xl md:text-4xl font-black mb-6 flex items-center gap-4 ${
                  activeTab === 'rong' ? 'text-[#003366]' : 'text-[#b38f20]'
                }`}>
                  <span className="p-3 bg-gray-50 rounded-2xl shadow-inner border border-gray-100">
                    {currentData[activeIndex].icon}
                  </span>
                  {currentData[activeIndex].title}
                </h3>

                <div className="h-px w-full bg-gray-100 mb-6"></div>

                <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-l-current shadow-sm" style={{ color: activeTab === 'rong' ? '#003366' : '#D4AF37' }}>
                  <p className="text-gray-800 text-lg leading-relaxed font-medium text-justify">
                    {currentData[activeIndex].detail}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
