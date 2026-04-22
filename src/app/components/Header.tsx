import React, { useState, useEffect } from "react";
import { BookOpen, Menu, X, Landmark, Users, MapPin, Scale, Flag, GraduationCap, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { id: "section1", label: "Khái Niệm", icon: <BookOpen className="w-4 h-4" /> },
    { id: "section2", label: "Lý Luận", icon: <Landmark className="w-4 h-4" /> },
    { id: "section3", label: "Dân Tộc & Quan Hệ", icon: <Users className="w-4 h-4" /> },
    { id: "section4", label: "Tình Huống Giả Định", icon: <Scale className="w-4 h-4" /> },
    { id: "footer-summary", label: "Tổng Kết", icon: <Flag className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Highlight active section dynamically based on scroll position
      const scrollPosition = window.scrollY + 200;
      let currentActive = "";

      for (let i = 0; i < menuItems.length; i++) {
        const section = document.getElementById(menuItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = menuItems[i].id;
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Interactive Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-['Montserrat',sans-serif] ${isScrolled
        ? "bg-[#002244]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
        : "bg-[#003366] border-b border-[#D4AF37]/30 py-4"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo & Title */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#b38f20] p-2 rounded-xl border border-white/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-[#003366]" />
              </div>
              <div className="hidden sm:block">
                <h3 className="text-white font-black text-sm tracking-wide uppercase">Nhóm 6</h3>
                <p className="text-[#D4AF37] text-xs font-bold bg-[#D4AF37]/10 inline-block px-2 py-0.5 rounded-full mt-0.5">Chính Trị Học</p>
              </div>
            </div>

            {/* Desktop Menu - Interactive Tabs */}
            <div className="hidden lg:flex items-center p-1.5 bg-[#001122]/50 rounded-2xl border border-white/10 backdrop-blur-md shadow-inner">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 z-10 group ${isActive ? "text-[#003366]" : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#f1d570] rounded-xl -z-10 shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-[#D4AF37]/50"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <div className={`${isActive ? "" : "opacity-70 group-hover:opacity-100"} transition-opacity`}>
                      {item.icon}
                    </div>
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={() => navigate('/ai-usage')}
                className="relative flex items-center gap-2 px-5 py-2.5 ml-2 rounded-xl text-sm font-bold transition-all duration-300 z-10 group bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30"
              >
                <Bot className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                AI Usage
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden bg-white/10 hover:bg-white/20 text-[#D4AF37] p-2.5 rounded-xl transition-all duration-300 border border-white/10 backdrop-blur-sm"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Animated) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-white/10 bg-[#002244]/95 backdrop-blur-xl overflow-hidden absolute w-full top-full left-0 shadow-2xl"
            >
              <div className="p-4 space-y-2">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 text-sm font-bold ${isActive
                        ? "bg-gradient-to-r from-[#D4AF37]/20 to-transparent text-[#D4AF37] border-l-4 border-[#D4AF37]"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? "bg-[#D4AF37]/20" : "bg-white/5"}`}>
                        {item.icon}
                      </div>
                      {item.label}
                    </button>
                  );
                })}

                <button
                  onClick={() => {
                    navigate('/ai-usage');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left flex items-center gap-4 px-5 py-4 mt-2 rounded-xl transition-all duration-300 text-sm font-bold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/20"
                >
                  <div className="p-2 rounded-lg bg-[#D4AF37]/20">
                    <Bot className="w-4 h-4" />
                  </div>
                  AI Usage
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Header Hero Banner */}
      <header className="w-full bg-[#003366] text-white pt-40 pb-20 px-6 relative overflow-hidden font-['Montserrat',sans-serif] border-b-8 border-[#D4AF37]">
        {/* Dynamic Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#004b99] via-[#003366] to-[#001f3f]"></div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGgtdi0tIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4=')]"></div>

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 p-4 rounded-3xl mb-8 border border-white/20 shadow-2xl backdrop-blur-sm"
          >
            <BookOpen className="w-12 h-12 text-[#D4AF37]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#D4AF37] font-black tracking-widest uppercase text-sm md:text-base mb-4 bg-[#D4AF37]/10 px-6 py-2 rounded-full border border-[#D4AF37]/30 shadow-inner"
          >
            Tài liệu học tập - Chủ nghĩa Xã hội Khoa học
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-black leading-tight mb-6 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-sm"
          >
            Chương 6: Vấn Đề Dân Tộc<br />
            <span className="text-2xl md:text-3xl font-bold text-[#D4AF37] mt-4 block normal-case tracking-normal">
              Trong thời kỳ quá độ lên Chủ nghĩa Xã hội
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-1 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-8"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl text-lg md:text-xl text-white/80 font-medium leading-relaxed bg-black/20 p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            Nghiên cứu khái niệm, lý luận Mác - Lênin và định hướng chính sách của Đảng nhằm củng cố khối đại đoàn kết toàn dân tộc tại Việt Nam.
          </motion.p>
        </div>

        {/* Decorative Lighting Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      </header>
    </>
  );
}