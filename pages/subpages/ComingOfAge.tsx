import React, { useState } from 'react';

const events = [
  {
    id: 1,
    title: '感恩有你 责任启航 || 阳江一中举行2025届高三级成人礼',
    date: '2025年3月15日',
    tags: ['成长记忆', '青春起航'],
    img: '../../images/crl1.jpg'
  },
  {
    id: 2,
    title: '青春当立凌云志 奋发有为勇担当 || 阳江一中举行2024届成人礼',
    date: '2024年3月12日',
    tags: ['成长记忆', '责任担当'],
    img: '../../images/crl2.jpg'
  },
  {
    id: 3,
    title: '不负时代齐奋进 青春年华书誓言 || 阳江一中举行2023届成人礼',
    date: '2023年3月10日',
    tags: ['成长记忆', '誓师大会'],
    img: '../../images/crl3.jpg'
  },
  {
    id: 4,
    title: '十八而赋凌云志，未来共期万里晴 || 阳江一中2022届高三成人礼',
    date: '2022年3月08日',
    tags: ['成长记忆', '凌云之志'],
    img: '../../images/crl4.jpg'
  },
  {
    id: 5,
    title: '坚定制度自信，强化使命担当 || 阳江一中隆重举行2021届高三成人礼',
    date: '2021年3月14日',
    tags: ['成长记忆', '使命担当'],
    img: '../../images/crl5.jpg'
  }
];

export const ComingOfAge: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">成人礼</h1>
          <p className="text-forest font-bold tracking-[0.2em] uppercase text-sm">COMING OF AGE CEREMONY</p>
          <div className="w-16 h-1.5 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* List */}
      <div className="flex flex-col gap-6">
        {events.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col-reverse md:flex-row justify-between items-start gap-8 group"
          >
            <div className="flex-1 py-2">
               <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6 leading-snug group-hover:text-forest transition-colors">
                 {item.title}
               </h3>
               <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    {item.date}
                  </span>
                  <div className="flex gap-2">
                    {item.tags.map((tag, i) => (
                        <span key={i} className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs">{tag}</span>
                    ))}
                  </div>
               </div>
            </div>
            
            <div className="w-full md:w-72 lg:w-80 h-48 md:h-40 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
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