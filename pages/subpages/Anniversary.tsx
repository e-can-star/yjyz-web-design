import React, { useState } from 'react';

const newsData = [
  {
    id: 50,
    title: '承百年文脉 启时代新程 || 阳江一中建校116周年发展大会暨文艺晚会',
    date: '2025年12月03日',
    views: '4457',
    img: '../../images/xq1.jpg'
  },
  {
    id: 49,
    title: '双星同辉映学苑 文脉相承启新程 || 我校“状元廊”揭幕暨天鹅池升级改造启用仪式',
    date: '2025年11月29日',
    views: '5023',
    img: '../../images/xq2.jpg'
  },
  {
    id: 48,
    title: '校庆公告 || 阳江一中建校116周年发展大会暨文艺晚会',
    date: '2025年11月28日',
    views: '1.1万',
    img: '../../images/xq3.png'
  },
  {
    id: 47,
    title: '根脉相承 弦歌不辍 || 我校举行“根”文化广场启用仪式',
    date: '2024年12月09日',
    views: '2967',
    img: '../../images/xq4.jpg'
  },
  {
    id: 46,
    title: '环湖彩道欢乐跑 绿美校园健康行 || 我校环湖彩道正式启用',
    date: '2024年12月11日',
    views: '3962',
    img: '../../images/xq5.jpg'
  },
  {
    id: 45,
    title: '百十五载星辉路 共谱华章启新航 || 阳江市第一中学召开建校115周年发展大会',
    date: '2024年12月02日',
    views: '4387',
    img: '../../images/xq6.jpg'
  },
  {
    id: 44,
    title: '共忆星光 乘风启航 || 阳江一中建校115周年文艺晚会',
    date: '2024年12月01日',
    views: '4999',
    img: '../../images/xq7.jpg'
  }
];

export const Anniversary: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">校庆活动</h1>
          <p className="text-forest font-bold tracking-[0.2em] uppercase text-sm">ANNIVERSARY ACTIVITIES</p>
          <div className="w-16 h-1.5 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Content */}
            <div className="flex-grow min-w-0 flex flex-col h-full justify-between py-1 order-2 md:order-1">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-forest transition-colors leading-snug line-clamp-2">
                  <span className="text-slate-400 font-medium mr-2">{item.id}.</span>
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center gap-6 text-slate-400 text-xs font-medium mt-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  {item.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  阅读 {item.views}
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="flex-shrink-0 order-1 md:order-2 w-full md:w-48 h-36 md:h-28 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 relative group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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