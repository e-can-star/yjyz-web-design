import React, { useState } from 'react';

const newsData = [
  {
    id: 1,
    date: '2024年3月5日',
    tag: '慈善周',
    title: '凝聚爱 传递光 || 我校举办“三·五”大义卖活动',
    img: '../../images/ym1.jpg'
  },
  {
    id: 2,
    date: '2023年3月5日',
    tag: '爱心行动',
    title: '爱在“义”起 温暖无限 || 我校举办“三·五”大义卖活动',
    img: '../../images/ym2.jpg'
  },
  {
    id: 3,
    date: '2022年3月5日',
    tag: '圆梦行动',
    title: '情谊绵长 爱心圆梦 || 阳江一中举行2022年“三·五”大义卖活动',
    img: '../../images/ym3.jpg'
  },
  {
    id: 4,
    date: '2021年3月5日',
    tag: '温暖同行',
    title: '凝聚星火之爱 携手温暖同行 || 阳江一中2021年“三·五”大义卖活动',
    img: '../../images/ym4.jpg'
  },
  {
    id: 5,
    date: '2018年3月5日',
    tag: '传统延续',
    title: '崇文修德，善行一中 | 阳江一中2018年“三·五大义卖”活动',
    img: '../../images/ym5.jpg'
  },
];

export const CharitySale: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">三五义卖</h1>
          <p className="text-forest font-bold tracking-[0.2em] uppercase text-sm">CHARITY SALE</p>
          <div className="w-16 h-1.5 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* List */}
      <div className="flex flex-col gap-6">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-center gap-8 group"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-forest transition-colors leading-snug">
                {item.title}
              </h3>
              <div className="flex items-center gap-4 text-sm font-medium">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  {item.date}
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  {item.tag}
                </span>
              </div>
            </div>

            <div className="w-full md:w-64 h-40 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
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