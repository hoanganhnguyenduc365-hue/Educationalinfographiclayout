import React, { useState } from "react";
import { User, Scale, BookOpen, AlertTriangle, ChevronDown, CheckCircle, ShieldAlert, Map, Heart, MessageSquare, Gavel, Quote, FileText, CheckCircle2, XCircle, ChevronRight, Check, BarChart, AlertCircle, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Section4() {
  const [openTheory, setOpenTheory] = useState<number | null>(1);

  const toggleTheory = (index: number) => {
    setOpenTheory(openTheory === index ? null : index);
  };

  return (
    <section id="section4" className="w-full bg-[#f8fbff] py-24 px-6 relative font-['Montserrat',sans-serif] scroll-mt-16">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-[#0B1E40] rounded-full mb-4 shadow-lg border border-[#D4AF37]/30">
            <Scale className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase mb-3">
            Tình Huống Giả Định
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#0B1E40] mb-6 uppercase tracking-tight">
            Đánh giá Chính sách Dân tộc tại Việt Nam
          </h3>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto text-lg">
            Giải quyết mâu thuẫn thực tiễn dưới góc nhìn khoa học khách quan.
          </p>
        </motion.div>

        {/* 0. DEBATE UI: Split Screen (Context) */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Side A */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-t-4 border-[#0B1E40] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B1E40]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110 duration-500"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0B1E40]/10 p-4 rounded-full">
                  <User className="w-8 h-8 text-[#0B1E40]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1E40] uppercase tracking-wide">Ý kiến của A</h3>
                  <p className="text-gray-500 font-medium text-sm">Góc nhìn thành tựu vĩ mô</p>
                </div>
              </div>
              <div className="relative pt-6">
                <Quote className="absolute top-0 left-0 w-8 h-8 text-[#0B1E40]/20 -translate-x-2 -translate-y-2" />
                <p className="text-[#0B1E40]/90 leading-relaxed font-semibold text-[17px] relative z-10 italic">
                  "Việt Nam có 54 dân tộc cùng chung sống hòa thuận, không xung đột — đó là bằng chứng rõ nhất cho thấy chính sách dân tộc của Đảng đã thành công hoàn toàn."
                </p>
              </div>
            </motion.div>

            {/* VS Badge */}
            <div className="hidden md:flex flex-col justify-center items-center -mx-10 z-20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-[#D4AF37] text-white rounded-full flex items-center justify-center font-black text-xl shadow-2xl border-4 border-white"
              >
                VS
              </motion.div>
            </div>

            {/* Side B */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-t-4 border-[#d4183d] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4183d]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110 duration-500"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#d4183d]/10 p-4 rounded-full">
                  <User className="w-8 h-8 text-[#d4183d]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#d4183d] uppercase tracking-wide">Ý kiến của B</h3>
                  <p className="text-gray-500 font-medium text-sm">Góc nhìn thực trạng vi mô</p>
                </div>
              </div>
              <div className="relative pt-6">
                <Quote className="absolute top-0 left-0 w-8 h-8 text-[#d4183d]/20 -translate-x-2 -translate-y-2" />
                <p className="text-gray-800 leading-relaxed font-semibold text-[17px] relative z-10 italic">
                  "Không xung đột chưa có nghĩa là bình đẳng — chênh lệch kinh tế, văn hóa, giáo dục giữa các dân tộc vẫn còn rất lớn, không thể gọi là thành công hoàn toàn."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 1. Phân xử: Ai đúng, ai sai? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0B1E40] rounded-3xl p-1 shadow-2xl mb-20"
        >
          <div className="bg-gradient-to-b from-[#0B1E40] to-[#071329] rounded-[22px] p-8 md:p-12 relative overflow-hidden h-full border border-white/10">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-10">
                <Gavel className="w-10 h-10 text-[#D4AF37]" />
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider text-center">
                  1. Phân Xử: Ai Đúng, Ai Sai?
                </h3>
              </div>

              <div className="flex justify-center mb-10">
                <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-[#D4AF37]/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] max-w-3xl text-center">
                  <span className="text-white text-[16px] md:text-lg leading-relaxed inline-block">
                    Trong tình huống này, <strong className="text-[#D4AF37]">cả A và B đều đúng một phần</strong>, nhưng quan điểm của B phản ánh sâu sắc hơn bản chất của vấn đề dân tộc theo lý luận Mác - Lênin.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white/90">
                {/* Lập luận A */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-24 h-24 text-[#D4AF37]" />
                  </div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="bg-[#D4AF37]/20 p-3 rounded-full mt-1">
                      <User className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase tracking-wide">Về phía A</h4>
                      <div className="space-y-4 text-[15px] leading-relaxed text-justify">
                        <p>
                          <strong className="text-white">Đúng</strong> khi nhận định rằng việc 54 dân tộc sống hòa thuận, không xung đột là một thành tựu to lớn và là minh chứng cho sự đúng đắn của chính sách đại đoàn kết dân tộc của Đảng.
                        </p>
                        <p>
                          <strong className="text-red-400">Tuy nhiên, A sai</strong> khi cho rằng chính sách đã "thành công hoàn toàn", vì sự bình đẳng mới chỉ đạt được căn bản về mặt pháp lý, chưa đạt được sự bình đẳng tuyệt đối trên thực tế.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lập luận B */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-24 h-24 text-[#D4AF37]" />
                  </div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="bg-[#D4AF37]/20 p-3 rounded-full mt-1">
                      <User className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase tracking-wide">Về phía B</h4>
                      <div className="space-y-4 text-[15px] leading-relaxed text-justify">
                        <p>
                          <strong className="text-white">Đúng</strong> khi chỉ ra rằng không xung đột chưa đồng nghĩa với bình đẳng thực sự.
                        </p>
                        <p>
                          B bám sát thực tế về sự chênh lệch trình độ phát triển giữa các dân tộc, đây chính là <strong className="text-white">rào cản lớn nhất</strong> để thực hiện quyền bình đẳng dân tộc một cách trọn vẹn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. CĂN CỨ LÝ LUẬN */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="bg-[#D4AF37] p-2.5 rounded-xl shadow-md">
              <BookOpen className="text-[#0B1E40] w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#0B1E40] text-2xl uppercase tracking-wide">2. Căn Cứ Lý Luận</h4>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <p className="text-gray-700 text-[17px] mb-8 font-medium bg-[#f8fbff] p-5 rounded-xl border-l-4 border-[#0B1E40] leading-relaxed">
              Theo Cương lĩnh dân tộc của V.I.Lênin và quan điểm của chủ nghĩa Mác - Lênin, <strong className="text-[#0B1E40]">"bình đẳng dân tộc"</strong> có ý nghĩa như sau:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bản chất */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-[#0B1E40]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0B1E40] transition-colors">
                  <Scale className="w-6 h-6 text-[#0B1E40] group-hover:text-white transition-colors" />
                </div>
                <h5 className="font-bold text-[#0B1E40] text-lg mb-4">Bản chất của bình đẳng dân tộc</h5>
                <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
                  Đây là quyền thiêng liêng của các dân tộc, không phân biệt dân tộc lớn hay nhỏ, trình độ cao hay thấp. Các dân tộc đều có nghĩa vụ và quyền lợi ngang nhau trên tất cả các lĩnh vực của đời sống xã hội.
                </p>
              </div>

              {/* Pháp lý và thực tế */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  <FileText className="w-6 h-6 text-[#D4AF37] group-hover:text-white transition-colors" />
                </div>
                <h5 className="font-bold text-[#0B1E40] text-lg mb-4">Bình đẳng pháp lý và thực tế</h5>
                <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
                  Quan trọng nhất là quyền bình đẳng này phải được thực hiện trên cơ sở pháp lý, nhưng <strong className="text-[#0B1E40]">quan trọng hơn</strong> là phải được thực hiện trên thực tế.
                </p>
              </div>

              {/* Tiêu chí đánh giá */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h5 className="font-bold text-[#0B1E40] text-lg mb-4">Tiêu chí đánh giá</h5>
                <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
                  Không xung đột chỉ là biểu hiện của sự ổn định chính trị. Để có bình đẳng thực sự, cần phải <strong className="text-blue-700">"từng bước giảm, tiến tới xóa bỏ khoảng cách phát triển giữa các dân tộc về kinh tế, văn hóa, xã hội"</strong>. Nếu vẫn còn sự chênh lệch lớn về đời sống, thì quyền bình đẳng dân tộc vẫn chưa được thực hiện đầy đủ.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. NHẬN ĐỊNH CỦA NHÓM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-[2rem] -z-10 translate-x-3 translate-y-3"></div>

          <div className="bg-[#fff7ed] rounded-[2rem] shadow-xl border-[3px] border-[#ea580c] p-8 md:p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <ShieldAlert className="w-80 h-80 text-[#ea580c]" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 border-b-2 border-[#ea580c]/20 pb-8">
                <div className="bg-[#ea580c] p-5 rounded-2xl shadow-lg shrink-0 animate-pulse-slow">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-[#9a3412] text-2xl md:text-3xl uppercase tracking-wide mb-2">
                    3. Nhận Định Của Nhóm
                  </h4>
                  <p className="text-[#ea580c] font-bold text-lg">
                    Thách thức lớn nhất trong việc thực hiện bình đẳng dân tộc hiện nay
                  </p>
                </div>
              </div>

              <div className="mb-10 bg-white p-6 rounded-xl border border-[#fdba74] shadow-sm flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#ea580c] shrink-0 mt-1" />
                <div className="text-gray-800 text-[17px] leading-relaxed font-semibold w-full">
                  <p>Dựa vào đặc điểm của các dân tộc Việt Nam, thách thức lớn nhất là:</p>
                  <p className="text-[#ea580c] text-xl md:text-2xl uppercase mt-3 font-black">
                    Sự chênh lệch về trình độ phát triển kinh tế - xã hội giữa các dân tộc thiểu số và dân tộc đa số còn rất lớn.
                  </p>
                </div>
              </div>

              <div className="mb-6 inline-block bg-[#ea580c]/10 text-[#9a3412] px-6 py-2 rounded-full font-black text-lg uppercase tracking-wider">
                Vì sao?
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Reason 1 */}
                <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 shadow-md group relative h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <BarChart className="w-16 h-16 text-blue-700" />
                  </div>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <span className="text-blue-700 font-black text-xl">1</span>
                  </div>
                  <h6 className="font-black text-[#0B1E40] text-[17px] mb-4 uppercase">Điểm xuất phát thấp</h6>
                  <p className="text-gray-700 leading-relaxed text-[15px] font-medium text-justify">
                    Nhiều dân tộc thiểu số ở vùng sâu, vùng xa có trình độ dân trí và chuyên môn kỹ thuật còn thấp, phương thức sản xuất chậm chuyển đổi.
                  </p>
                </div>

                {/* Reason 2 */}
                <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-red-500 transition-all duration-300 shadow-md group relative h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Map className="w-16 h-16 text-red-700" />
                  </div>
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <span className="text-red-700 font-black text-xl">2</span>
                  </div>
                  <h6 className="font-black text-[#0B1E40] text-[17px] mb-4 uppercase">Địa bàn cư trú khó khăn</h6>
                  <p className="text-gray-700 leading-relaxed text-[15px] font-medium text-justify">
                    Các dân tộc thiểu số chủ yếu cư trú ở địa bàn chiến lược, xung yếu nhưng lại là những vùng có địa hình hiểm trở, hạ tầng kinh tế - xã hội phát triển chậm, khó khăn trong việc tiếp cận các nguồn lực.
                  </p>
                </div>

                {/* Reason 3 */}
                <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-green-500 transition-all duration-300 shadow-md group relative h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-16 h-16 text-green-700" />
                  </div>
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <span className="text-green-700 font-black text-xl">3</span>
                  </div>
                  <h6 className="font-black text-[#0B1E40] text-[17px] mb-4 uppercase">Nguy cơ từ bên ngoài</h6>
                  <p className="text-gray-700 leading-relaxed text-[15px] font-medium text-justify">
                    Các thế lực thù địch thường xuyên lợi dụng vấn đề dân tộc và sự khó khăn về đời sống để kích động, chia rẽ khối đại đoàn kết dân tộc, gây mất ổn định để thực hiện âm mưu "diễn biến hòa bình".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tóm lại */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#0B1E40] to-[#1a365d] rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-6">
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <CheckCircle className="w-64 h-64 text-[#D4AF37]" />
            </div>

            <div className="bg-[#D4AF37]/20 p-4 rounded-full border border-[#D4AF37]/50 shrink-0 z-10 hidden md:block">
              <Bookmark className="w-10 h-10 text-[#D4AF37]" />
            </div>

            <div className="relative z-10 flex-1">
              <h4 className="text-[#D4AF37] font-bold text-xl uppercase tracking-widest mb-3 flex items-center gap-2">
                Tóm Lại
              </h4>
              <p className="text-white text-[16px] md:text-lg leading-relaxed font-medium text-justify">
                Chính sách dân tộc của Việt Nam đã đạt được những thành tựu mang tính chiến lược, nhưng để đạt tới sự <strong className="text-[#D4AF37]">"thành công hoàn toàn"</strong> như ý kiến của A, cần một quá trình lâu dài để hiện thực hóa sự bình đẳng về thực tế đời sống như ý kiến của B đã nhấn mạnh.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}