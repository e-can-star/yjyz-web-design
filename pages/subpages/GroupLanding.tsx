import React from 'react';

export const GroupLanding: React.FC = () => {
   return (
      <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
         {/* Header inside the content area */}
         <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 text-center">
            <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">集团概况</h1>
            <p className="text-forest font-bold tracking-[0.2em] uppercase text-sm">GROUP OVERVIEW</p>
            <div className="w-16 h-1.5 bg-forest mx-auto mt-4 rounded-full"></div>
         </div>

         {/* Cards Section */}
         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Card 1: Monan Middle School */}
            <div className="bg-white rounded-[20px] p-8 flex flex-col items-center text-center shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
               <div className="w-40 h-40 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center border border-slate-100 overflow-hidden group-hover:border-forest/20 transition-colors">
                  {/* QR Code Image */}
                  <img 
                    src="../../images/erweima2.jpg" 
                    alt="高新区漠南中学二维码" 
                    className="w-full h-full object-contain p-3 mix-blend-multiply opacity-90" 
                  />
               </div>
               <h3 className="text-sm font-bold text-slate-500 mb-1">阳江市第一中学教育集团</h3>
               <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">高新区漠南中学</h2>
               <button className="flex items-center gap-2 text-forest font-bold hover:text-deep-forest transition-colors group/btn text-sm bg-forest/5 px-4 py-2 rounded-full hover:bg-forest hover:text-white">
                  <span className="material-symbols-outlined text-lg">touch_app</span>
                  扫码关注
               </button>
            </div>

            {/* Card 2: Experimental School */}
            <div className="bg-white rounded-[20px] p-8 flex flex-col items-center text-center shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
               <div className="w-40 h-40 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center border border-slate-100 overflow-hidden group-hover:border-forest/20 transition-colors">
                  {/* QR Code Image */}
                  <img 
                    src="../../images/erweima3.jpg" 
                    alt="阳江市第一中学实验学校二维码" 
                    className="w-full h-full object-contain p-3 mix-blend-multiply opacity-90" 
                  />
               </div>
               <h3 className="text-sm font-bold text-slate-500 mb-1">阳江市第一中学教育集团</h3>
               <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">阳江市第一中学实验学校</h2>
               <button className="flex items-center gap-2 text-forest font-bold hover:text-deep-forest transition-colors group/btn text-sm bg-forest/5 px-4 py-2 rounded-full hover:bg-forest hover:text-white">
                  <span className="material-symbols-outlined text-lg">touch_app</span>
                  扫码关注
               </button>
            </div>
         </div>

         {/* Description Section */}
         <div className="bg-[#F5F9FF] border-2 border-dashed border-[#E1EEFA] rounded-2xl p-8">
            <p className="text-slate-500 text-center leading-loose text-sm lg:text-base font-medium">
               阳江市第一中学教育集团以阳江一中为龙头学校，旨在通过资源共享、管理互鉴、师资轮岗等方式，带动成员校共同发展，助力阳江教育高质量发展。
            </p>
         </div>
      </div>
   );
};