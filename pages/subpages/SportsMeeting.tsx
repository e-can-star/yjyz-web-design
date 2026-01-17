import React, { useState } from 'react';

const events = [
  {
    id: 1,
    title: '超越自我 勇争第一 || 校运会精彩瞬间',
    date: '2024-11-30',
    views: 2451,
    img: '../../images/xyh2.jpg'
  },
  {
    id: 2,
    title: '挥洒汗水 续写辉煌 || 我校运动健儿再破纪录',
    date: '2023-11-28',
    views: 1892,
    img: '../../images/xyh3.jpg'
  },
  {
    id: 3,
    title: '圆满落幕 || 阳江一中第58届校运会颁奖典礼',
    date: '2022-12-27',
    desc: '历时三天的激烈角逐，本届校运会在欢呼声中圆满落下帷幕。这不仅是一场体育竞技的盛会，更是一次意志品质的磨炼。',
    img: '../../images/xyh4.jpg'
  },
];

export const SportsMeeting: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">校运会</h1>
          <p className="text-forest font-bold tracking-[0.2em] uppercase text-sm">SPORTS MEETING</p>
          <div className="w-16 h-1.5 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* Featured News (Top Large Card) */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row group cursor-pointer hover:shadow-xl transition-shadow">
        <div className="lg:w-3/5 h-64 lg:h-auto bg-slate-200 relative overflow-hidden">
          <img
            src="../../images/xyh1.jpg"
            alt="Opening Ceremony"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center bg-white">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-md">热点聚焦</span>
            <span className="text-slate-400 text-xs font-bold">2025-11-27</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-forest transition-colors">
            燃动青春 逐梦田径 || 阳江一中第61届校运会开幕
          </h2>
          <p className="text-slate-500 text-sm leading-loose mb-8 line-clamp-3">
            金秋送爽，丹桂飘香。伴随着雄壮的运动员进行曲，阳江一中迎来了期待已久的第61届田径运动会。全校师生齐聚操场，共同见证这一体育盛事的开启。
          </p>
          <button className="flex items-center gap-2 text-forest font-bold text-sm hover:underline decoration-2 underline-offset-4 decoration-forest/30">
            阅读全文
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Grid Layout for other news */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.slice(0, 2).map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
            <div className="h-56 overflow-hidden bg-slate-100">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <p className="text-xs font-bold text-slate-400 mb-2">{item.date}</p>
              <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug group-hover:text-forest transition-colors">{item.title}</h3>
              <div className="flex justify-between items-center text-slate-400 text-xs">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span> {item.views}</span>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Width Card */}
      {events[2] && (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row h-auto md:h-80 group cursor-pointer hover:shadow-lg transition-all">
          <div className="md:w-1/2 p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
            <p className="text-xs font-bold text-slate-400 mb-3">{events[2].date}</p>
            <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-forest transition-colors">{events[2].title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{events[2].desc}</p>

          </div>
          <div className="md:w-1/2 h-64 md:h-full bg-slate-200 relative overflow-hidden order-1 md:order-2">
            <img src={events[2].img} alt="Closing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8 select-none">
        <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 bg-white"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-forest text-white shadow-md shadow-forest/30">1</button>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest">2</button>
        <span className="w-8 text-center text-slate-400">...</span>
        <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest hover:text-forest bg-white"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
      </div>
    </div>
  );
};