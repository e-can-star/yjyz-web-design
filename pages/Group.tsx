import React from 'react';

export const Group: React.FC = () => {
   return (
      <div className="min-h-screen bg-[#FAF9F7] pt-24 pb-20">
         <div className="max-w-[1440px] mx-auto px-6 md:px-16 space-y-12 animate-[fadeIn_0.5s_ease-out]">

            {/* Header Section (Simple style as per reference) */}
            <div className="flex items-baseline gap-3 justify-center">
               <h1 className="text-4xl font-black text-slate-900 font-serif tracking-tight">教育集团</h1>
               <p className="text-forest font-bold tracking-[0.2em] uppercase text-sm">EDUCATION GROUP</p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
               {/* Card 1: Monan Middle School */}
               <div className="bg-white rounded-[20px] p-10 lg:p-16 flex flex-col items-center text-center shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 bg-slate-50 rounded-2xl mb-10 flex items-center justify-center border border-slate-100 overflow-hidden group-hover:border-forest/20 transition-colors">
                     {/* QR Code Image */}
                     <img src="/images/erweima2.jpg" alt="高新区漠南中学二维码" className="w-full h-full object-contain p-4" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-700 mb-2">阳江市第一中学教育集团</h3>
                  <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">高新区漠南中学</h2>
                  <button className="flex items-center gap-2 text-forest font-bold hover:text-deep-forest transition-colors group/btn">
                     <span className="material-symbols-outlined text-xl group-hover/btn:scale-110 transition-transform">touch_app</span>
                     扫码关注
                  </button>
               </div>

               {/* Card 2: Experimental School */}
               <div className="bg-white rounded-[20px] p-10 lg:p-16 flex flex-col items-center text-center shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 bg-slate-50 rounded-2xl mb-10 flex items-center justify-center border border-slate-100 overflow-hidden group-hover:border-forest/20 transition-colors">
                     {/* QR Code Image */}
                     <img src="/images/erweima3.jpg" alt="阳江市第一中学实验学校二维码" className="w-full h-full object-contain p-4" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-700 mb-2">阳江市第一中学教育集团</h3>
                  <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">阳江市第一中学实验学校</h2>
                  <button className="flex items-center gap-2 text-forest font-bold hover:text-deep-forest transition-colors group/btn">
                     <span className="material-symbols-outlined text-xl group-hover/btn:scale-110 transition-transform">touch_app</span>
                     扫码关注
                  </button>
               </div>
            </div>

            {/* Description Section */}
            <div className="bg-[#F5F9FF] border-2 border-dashed border-[#E1EEFA] rounded-2xl p-8 lg:p-12 mt-8">
               <p className="text-slate-500 text-center leading-loose text-sm lg:text-base font-medium max-w-4xl mx-auto">
                  阳江市第一中学教育集团以阳江一中为龙头学校，旨在通过资源共享、管理互鉴、师资轮岗等方式，带动成员校共同发展，助力阳江教育高质量发展。
               </p>
            </div>
         </div>
      </div>
   );
};