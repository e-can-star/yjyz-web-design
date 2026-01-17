import React, { useState } from 'react';

const events = [
  {
    id: 1,
    title: '青春心向党 共筑中国梦 || 我校纪念五四运动105周年合唱比赛顺利举行',
    date: '1年前',
    author: '梁绮莹',
    views: 1932,
    img: '../../images/ws2.jpg'
  },
  {
    id: 2,
    title: '青春献礼二十大 强国有我新征程 || 我校纪念五四运动104周年合唱比赛顺利举行',
    date: '2年前',
    views: 1540,
    img: '../../images/ws3.jpg'
  },
  {
    id: 3,
    title: '“喜迎二十大，永远跟党走，奋进新征程” || 阳江一中高二级2022年五四合唱比赛',
    date: '2022-05-12',
    views: 1037,
    img: '../../images/ws4.jpg'
  },
  {
    id: 4,
    title: '“学党史，颂党恩，跟党走” || 阳江一中隆重举行庆祝中国共产党建党100周年合唱比赛',
    date: '2021-05-24',
    views: 3250,
    img: '../../images/ws5.jpg'
  },
  {
    id: 5,
    title: '青春心向党，唱响新时代 || 阳江一中2020年“五四”合唱比赛圆满落幕',
    date: '2020-05-15',
    views: 1709,
    img: '../../images/ws6.jpg'
  }
];

export const MayFourth: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">五四合唱</h1>
          <p className="text-forest font-bold tracking-[0.2em] uppercase text-sm">MAY 4TH CHORUS</p>
          <div className="w-16 h-1.5 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* Hero Card */}
      <div className="group relative w-full h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-md cursor-pointer">
         <img 
           src="../../images/ws1.jpg" 
           alt="Featured" 
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
         
         <div className="absolute top-6 left-6">
            <span className="bg-forest text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg">置顶回顾</span>
         </div>

         <div className="absolute bottom-0 left-0 right-0 p-8">
             <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight drop-shadow-md">
               青春心向党 奋斗正当时 || 我校纪念五四运动106周年合唱比赛顺利举行
             </h2>
             <div className="flex items-center gap-6 text-white/80 text-sm font-medium">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_today</span> 2025-05-10</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">visibility</span> 阅读 3390</span>
             </div>
         </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-6">
        {events.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col md:flex-row gap-6 items-start group h-full"
          >
            <div className="flex-grow order-2 md:order-1 flex flex-col justify-between h-full">
               <div>
                   <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-forest transition-colors line-clamp-2">
                     {item.title}
                   </h3>
               </div>
               
               <div className="flex items-center gap-6 text-slate-400 text-xs font-medium mt-2">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {item.date}
                  </span>
                  {item.author && (
                    <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">person</span>
                        原创: {item.author}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    阅读 {item.views}
                  </span>
               </div>
            </div>

            <div className="flex-shrink-0 order-1 md:order-2 w-full md:w-56 h-40 rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
               <img 
                 src={item.img} 
                 alt={item.title} 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
               />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8 select-none">
        <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 bg-white"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-forest text-white shadow-md shadow-forest/30">1</button>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest">2</button>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest">3</button>
        <span className="w-8 text-center text-slate-400">...</span>
        <button className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest hover:text-forest bg-white"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
      </div>
    </div>
  );
};