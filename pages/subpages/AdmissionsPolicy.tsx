import React, { useState } from 'react';

const policies = [
  {
    id: 1,
    title: '阳江市第一中学2025年秋季高一新生入学须知',
    day: '28',
    month: 'JUL',
    date: '2025-07-28',
    views: '2,481',
    link: '#'
  },
  {
    id: 2,
    title: '阳江市第一中学2025年高中创新人才自主招生公告',
    day: '24',
    month: 'JUN',
    date: '2025-06-24',
    views: '1,205',
    link: '#'
  },
  {
    id: 3,
    title: '关于开展2025年艺体生招生术科考试的公告',
    day: '18',
    month: 'APR',
    date: '2025-04-18',
    views: '964',
    link: '#'
  },
  {
    id: 4,
    title: '阳江一中2024年招生简章',
    day: '05',
    month: 'APR',
    date: '2024-07-14',
    views: '1,532',
    link: '#'
  },
  {
    id: 5,
    title: '阳江市第一中学2024年创新类自主招生考试温馨提示',
    day: '30',
    month: 'AUG',
    date: '2024-06-29',
    views: '3,100',
    link: '#'
  },
  {
    id: 6,
    title: '阳江市第一中学2023年招生简章',
    day: '15',
    month: 'MAY',
    date: '2023-07-9',
    views: '890',
    link: '#'
  }
];

export const AdmissionsPolicy: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <div className="space-y-12 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">招生专栏</h1>
          <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">ADMISSIONS COLUMN</p>
          <div className="w-20 h-1 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* List Content */}
      <div className="flex flex-col gap-6">
        {policies.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-xl p-6 lg:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col md:flex-row gap-6 items-start md:items-center"
          >
            {/* Date Box */}
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#EFF5F3] rounded-xl flex flex-col items-center justify-center border border-forest/10 group-hover:bg-forest group-hover:border-forest transition-colors duration-300">
               <span className="text-xl md:text-2xl font-black text-forest group-hover:text-white transition-colors">{item.day}</span>
               <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-400 group-hover:text-white/80 transition-colors">{item.month}</span>
            </div>

            {/* Content */}
            <div className="flex-grow min-w-0">
               <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-forest transition-colors line-clamp-2">
                 {item.title}
               </h3>
               <div className="flex items-center gap-6 text-slate-400 text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    {item.views} 阅读
                  </div>
               </div>
            </div>

            {/* Action Button */}
            <div className="flex-shrink-0 mt-2 md:mt-0">
               <div className="px-5 py-2 bg-[#F8FAFC] rounded-full text-sm font-bold text-slate-600 group-hover:bg-forest group-hover:text-white transition-all flex items-center gap-2">
                 查看详情
                 <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-4 select-none">
        <button 
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest hover:text-forest hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          disabled={currentPage === 1}
        >
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </button>
        
        {[1, 2, 3].map((page) => (
             <button 
               key={page}
               onClick={() => setCurrentPage(page)}
               className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[15px] transition-all duration-300
                 ${currentPage === page
                   ? 'bg-forest text-white shadow-md shadow-forest/30 border border-transparent' 
                   : 'bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest hover:bg-forest/5'}`}
             >
               {page}
             </button>
        ))}

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