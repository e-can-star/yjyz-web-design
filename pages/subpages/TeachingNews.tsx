import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 47,
    title: '聚力新程 筑梦杏坛 || 我校2025年新教师跟岗培训总结',
    date: '2025年08月30日',
    views: 6138,
    img: '../../images/jiaoyan-1.jpg'
  },
  {
    id: 46,
    title: '智慧赋能 共研成长 || 我校开展国家中小学智慧教育平台全域应用学习教研',
    date: '2025年04月24日',
    views: 1350,
    img: '../../images/jiaoyan-2.png'
  },
  {
    id: 45,
    title: '协同共研高效课堂 融创赋能高考复习 || 我校举办2025年阳江·中山两地数',
    date: '2025年04月22日',
    views: 2011,
    img: '../../images/jiaoyan-3.jpg'
  },
  {
    id: 44,
    title: '山海相连谋发展 追光而遇促提升 || 阳江市第一中学教育集团前往广西武鸣',
    date: '2025年04月03日',
    views: 3509,
    img: '../../images/jiaoyan-4.jpg'
  },
  {
    id: 43,
    title: '专题导航明方向 模型解码创佳绩 || 我校举办阳江市高中物理高考二轮备考',
    date: '2025年03月27日',
    views: 2029,
    img: '../../images/jiaoyan-5.jpg'
  },
  {
    id: 42,
    title: '凝心聚智备中考 蓄力赋能向未来 || 2025年阳江市初中英语学科中考备考',
    date: '2024年12月28日',
    views: 1931,
    img: '../../images/jiaoyan-6.jpg'
  },
  {
    id: 41,
    title: '阳江市第一中学教育集团美术科组成功举办《创想候车亭》同课异构教研',
    date: '2024年12月19日',
    views: 3345,
    img: '../../images/jiaoyan-7.jpg'
  }
];

export const TeachingNews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">教研动态</h1>
          <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">T&R DYNAMICS</p>
          <div className="w-20 h-1 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* News List */}
      <div className="space-y-6">
        {newsItems.map((item) => (
          <Link
            key={item.id}
            to={`/teaching/news/${item.id}`}
            className="group block bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
              {/* Content */}
              <div className="flex-grow order-2 md:order-1 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-4 leading-snug group-hover:text-forest transition-colors">
                    {item.id}. {item.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6 text-slate-400 text-sm font-medium mt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    阅读 {item.views}
                  </div>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="flex-shrink-0 order-1 md:order-2 w-full md:w-40 lg:w-48 h-48 md:h-28 rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-6 select-none">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest hover:text-forest hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          disabled={currentPage === 1}
        >
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </button>

        {/* Simplified pagination logic for demo */}
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[15px] bg-forest text-white shadow-md shadow-forest/30 border border-transparent">1</button>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[15px] bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest hover:bg-forest/5">2</button>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[15px] bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest hover:bg-forest/5">3</button>
        <span className="w-8 text-center text-slate-400 font-bold">...</span>
        <button className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[15px] bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest hover:bg-forest/5">{totalPages}</button>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest hover:text-forest hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          disabled={currentPage === totalPages}
        >
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
};