import React, { useState } from "react";
import { User, Scale, BookOpen, AlertTriangle, ChevronDown, CheckCircle, ShieldAlert, Map, Heart, MessageSquare, Gavel, Quote, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as Popover from "@radix-ui/react-popover";

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
            Phân tích Tình huống & Lập luận
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#0B1E40] mb-6 uppercase tracking-tight">
            Đánh giá Chính sách Dân tộc tại Việt Nam
          </h3>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto text-lg">
            Giải quyết mâu thuẫn thực tiễn dưới góc nhìn khoa học khách quan.
          </p>
        </motion.div>

        {/* 1. DEBATE UI: Split Screen */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8 justify-center"
          >
            <div className="bg-[#0B1E40] p-2.5 rounded-xl shadow-md">
              <MessageSquare className="text-[#D4AF37] w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#0B1E40] text-2xl uppercase tracking-wide">1. Tranh luận: Góc nhìn đa chiều</h4>
          </motion.div>

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

        {/* 2. JUDGE'S VERDICT (Phán xử) */}
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
                  2. Phân Xử Từ Góc Độ Khoa Học
                </h3>
              </div>

              <div className="flex justify-center mb-10">
                <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-[#D4AF37]/50 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <span className="font-black text-[#D4AF37] text-xl uppercase tracking-wider">Kết luận:</span>
                  <span className="text-white font-bold text-xl ml-3">Cả A và B đều đúng một phần.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white/90">
                {/* Lập luận A */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-[#D4AF37] shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-[#D4AF37] mb-3 font-['Montserrat']">Về phía A (Đúng về vĩ mô):</h4>
                      <div className="space-y-3 text-[15px] leading-relaxed text-justify h-auto break-words whitespace-normal">
                        <p>
                          A đúng khi nhận diện được thành tựu chiến lược của Đảng: giữ vững khối đại đoàn kết, ngăn chặn xung đột sắc tộc đẫm máu (vốn rất phổ biến trên thế giới).
                        </p>
                        <p>
                          Tuy nhiên, việc khẳng định "thành công <strong className="text-white underline decoration-dotted">hoàn toàn</strong>" là khiếm khuyết về phương pháp luận biện chứng. Chính sách dân tộc không phải là một phép màu xảy ra trong một đêm, mà là một quá trình vận động lâu dài, luôn phát sinh mâu thuẫn mới cần giải quyết trong từng giai đoạn lịch sử.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lập luận B */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-[#D4AF37] shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-[#D4AF37] mb-3 font-['Montserrat']">Về phía B (Đúng về vi mô):</h4>
                      <div className="space-y-3 text-[15px] leading-relaxed text-justify h-auto break-words whitespace-normal">
                        <p>
                          B hoàn toàn chính xác khi chỉ ra trạng thái "bình đẳng thực tế" vẫn chưa đạt được. Sự chênh lệch về mức sống, tiếp cận y tế, giáo dục giữa các dân tộc ở vùng sâu xa so với đồng bằng vẫn là một bài toán nan giải.
                        </p>
                        <p>
                          Nhưng B lại thiếu cái nhìn lịch sử - cụ thể. Chênh lệch này là <strong className="text-white">di chứng của lịch sử và điều kiện tự nhiên khắc nghiệt</strong>, không phải do Đảng có chính sách phân biệt đối xử. Xóa bỏ khoảng cách này đòi hỏi thời gian tính bằng nhiều thế hệ và nguồn lực khổng lồ.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. THEORETICAL BASIS & LENIN QUOTES */}
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
            <h4 className="font-bold text-[#0B1E40] text-2xl uppercase tracking-wide">3. Căn cứ lý luận Cương lĩnh Mác - Lênin</h4>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Accordion / Popover cho Lý luận */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-fit">
              <p className="text-gray-800 text-lg mb-8 font-medium bg-[#f8fbff] p-4 rounded-xl border-l-4 border-[#0B1E40]">
                Để đánh giá khách quan, cần soi chiếu "Bình đẳng dân tộc" qua 2 cấp độ biện chứng:
              </p>

              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm">
                  <button
                    onClick={() => toggleTheory(1)}
                    className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#0B1E40] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">1</div>
                      <h5 className="font-bold text-[#0B1E40] text-xl text-left">Bình đẳng về pháp lý & chính trị</h5>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-[#0B1E40] transition-transform duration-300 ${openTheory === 1 ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openTheory === 1 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-white border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed text-[16px] text-justify">
                            Đây là quyền ngang nhau của các dân tộc được Hiến pháp quy định trong việc tham gia quản lý nhà nước. Về mặt này, Việt Nam đã <strong>thực hiện xuất sắc</strong>. Không có bất kỳ sự phân biệt đối xử nào dựa trên sắc tộc trong luật pháp. Tỷ lệ đại biểu Quốc hội là người dân tộc thiểu số luôn cao hơn tỷ lệ dân số của họ, minh chứng cho sự bình đẳng chính trị tuyệt đối.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm">
                  <button
                    onClick={() => toggleTheory(2)}
                    className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#D4AF37] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">2</div>
                      <h5 className="font-bold text-[#0B1E40] text-xl text-left">Bình đẳng về thực tế (Kinh tế - Xã hội)</h5>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-[#0B1E40] transition-transform duration-300 ${openTheory === 2 ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openTheory === 2 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-white border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed text-[16px] mb-4 text-justify">
                            Đây là nội dung cốt lõi và khó khăn nhất. V.I. Lênin nhấn mạnh rằng bình đẳng pháp lý chỉ là hình thức nếu không có bình đẳng thực tế. Do xuất phát điểm thấp và điều kiện địa lý, chênh lệch kinh tế giữa các dân tộc ở Việt Nam vẫn hiện hữu. 
                          </p>
                          <div className="bg-[#0B1E40]/5 p-5 rounded-xl border-l-4 border-[#D4AF37]">
                            <p className="text-[#0B1E40] font-semibold italic text-justify">
                              Do đó, "không xung đột" (như A nói) mới chỉ là điều kiện cần (ổn định). Để đạt được bình đẳng thực sự, Đảng và Nhà nước đang phải đầu tư các Chương trình Mục tiêu Quốc gia khổng lồ nhằm xóa bỏ sự bất bình đẳng thực tế này (như B mong mỏi).
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Trích dẫn Lênin */}
            <div className="lg:col-span-5 bg-[#0B1E40] rounded-2xl shadow-xl p-8 relative overflow-hidden flex flex-col justify-center border-t-4 border-[#D4AF37]">
              <Quote className="absolute top-4 right-4 w-24 h-24 text-white/5 rotate-180 pointer-events-none" />
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <FileText className="w-7 h-7 text-[#D4AF37]" />
                <h4 className="text-xl font-bold text-white uppercase tracking-widest">Trích dẫn V.I. Lênin</h4>
              </div>
              
              <div className="space-y-8 relative z-10">
                <div className="relative pl-6 border-l-4 border-[#D4AF37]">
                  <p className="text-white/90 italic leading-relaxed text-[16px]">
                    "Giai cấp vô sản không thể chỉ hài lòng với sự bình đẳng hình thức trên giấy tờ... Cần phải giúp đỡ các dân tộc bị áp bức, lạc hậu về kinh tế, chính trị và văn hóa tiến kịp các dân tộc tiên tiến, <strong className="text-[#D4AF37]">xóa bỏ sự bất bình đẳng thực tế do lịch sử để lại.</strong>"
                  </p>
                </div>

                <div className="relative pl-6 border-l-4 border-[#D4AF37]">
                  <p className="text-white/90 italic leading-relaxed text-[16px]">
                    Khẩu hiệu cốt lõi để giải quyết vấn đề: <br/>
                    <strong className="text-[#D4AF37] block mt-2 text-lg uppercase tracking-wide">
                      "Các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, liên hiệp công nhân tất cả các dân tộc lại."
                    </strong>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. WARNING / CHALLENGE BOX (No text truncation) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-[2rem] -z-10 translate-x-3 translate-y-3"></div>
          
          <div className="bg-[#fff7ed] rounded-[2rem] shadow-xl border-[3px] border-[#ea580c] p-8 md:p-12 relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <ShieldAlert className="w-80 h-80 text-[#ea580c]" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 border-b-2 border-[#ea580c]/20 pb-8">
                <div className="bg-[#ea580c] p-5 rounded-2xl shadow-lg shrink-0 animate-pulse-slow">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-[#9a3412] text-2xl md:text-3xl uppercase tracking-wide mb-2">
                    4. Nhận Định Nhóm: Thách Thức Chiến Lược
                  </h4>
                  <p className="text-[#ea580c] font-bold text-lg">
                    Rút ngắn khoảng cách phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số
                  </p>
                </div>
              </div>

              <div className="mb-10 text-gray-800 text-[16px] leading-relaxed text-justify h-auto break-words whitespace-normal bg-white p-6 rounded-xl border border-[#fdba74] shadow-sm">
                Đảng ta luôn xác định vấn đề dân tộc là vấn đề chiến lược cơ bản, lâu dài. Việc chưa đạt được "bình đẳng thực tế" ngay lập tức không có nghĩa là chính sách thất bại, mà nó phản ánh <strong className="text-[#ea580c]">những lực cản khách quan khổng lồ</strong> mà cả hệ thống chính trị đang phải từng bước khắc phục. Dưới đây là 3 nguyên nhân cốt lõi khiến đây là thách thức cam go nhất:
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Reason 1 */}
                <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-blue-500 transition-all duration-300 shadow-md group relative h-auto break-words whitespace-normal">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Map className="w-16 h-16 text-blue-700" />
                  </div>
                  <div className="bg-blue-100 p-4 rounded-xl inline-block mb-6 shadow-sm">
                    <Map className="w-8 h-8 text-blue-700" />
                  </div>
                  <h6 className="font-black text-[#0B1E40] text-xl mb-4 uppercase">Rào Cản Địa Lý</h6>
                  <p className="text-gray-700 leading-relaxed text-[15px] font-medium">
                    Đồng bào dân tộc thiểu số chủ yếu sinh sống ở vùng núi cao, biên giới hoang vu (chiếm tới 3/4 diện tích cả nước). Địa hình hiểm trở khiến chi phí đầu tư hạ tầng giao thông, điện lưới, trường học tốn kém gấp nhiều lần so với đồng bằng, làm chậm nhịp độ phát triển kinh tế hàng hóa.
                  </p>
                </div>

                {/* Reason 2 */}
                <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-red-500 transition-all duration-300 shadow-md group relative h-auto break-words whitespace-normal">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-16 h-16 text-red-700" />
                  </div>
                  <div className="bg-red-100 p-4 rounded-xl inline-block mb-6 shadow-sm">
                    <ShieldAlert className="w-8 h-8 text-red-700" />
                  </div>
                  <h6 className="font-black text-[#0B1E40] text-xl mb-4 uppercase">An Ninh Quốc Phòng</h6>
                  <p className="text-gray-700 leading-relaxed text-[15px] font-medium">
                    Sự chênh lệch về thu nhập và dân trí là "mảnh đất màu mỡ" để các thế lực thù địch lợi dụng. Chúng thường xuyên sử dụng chiêu bài "Diễn biến hòa bình", tôn giáo cực đoan để kích động ly khai tự trị, chia rẽ khối đại đoàn kết, đe dọa trực tiếp đến an ninh quốc gia vùng biên giới.
                  </p>
                </div>

                {/* Reason 3 */}
                <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-green-500 transition-all duration-300 shadow-md group relative h-auto break-words whitespace-normal">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Heart className="w-16 h-16 text-green-700" />
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl inline-block mb-6 shadow-sm">
                    <Heart className="w-8 h-8 text-green-700" />
                  </div>
                  <h6 className="font-black text-[#0B1E40] text-xl mb-4 uppercase">Bảo Tồn Bản Sắc</h6>
                  <p className="text-gray-700 leading-relaxed text-[15px] font-medium">
                    Hiện đại hóa kinh tế mang theo nguy cơ "hòa tan" văn hóa (mai một tiếng nói, chữ viết, trang phục truyền thống). Bài toán khó đặt ra là làm sao vừa phát triển kinh tế thị trường, nâng cao đời sống, vừa phải bảo vệ được bản sắc độc đáo của 53 dân tộc thiểu số trong xu thế hội nhập.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}