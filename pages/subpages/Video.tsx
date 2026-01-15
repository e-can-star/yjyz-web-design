import React from 'react';

export const Video: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 lg:p-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight font-serif">学校宣传片</h1>
        <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">SCHOOL PROMOTIONAL VIDEO</p>
        <div className="w-20 h-1 bg-forest mx-auto mt-6 rounded-full"></div>
      </header>

      <div className="relative group cursor-pointer overflow-hidden rounded-[12px] aspect-video shadow-2xl bg-slate-900">
        <img alt="宣传片封面" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-forest flex items-center justify-center rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 active:scale-95">
            <span className="material-symbols-outlined text-white text-5xl translate-x-1">play_arrow</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-forest/90 text-white text-[12px] font-bold rounded-full tracking-wider">最新发布</span>
            <span className="flex items-center gap-1.5 text-white/80 text-[13px] font-medium">
              <span className="material-symbols-outlined text-sm">schedule</span>
              06:03
            </span>
          </div>
          <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">阳江市第一中学115华诞宣传片</h3>
        </div>
      </div>
    </div>
  );
};