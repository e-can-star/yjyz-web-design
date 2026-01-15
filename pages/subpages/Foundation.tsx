import React, { useState } from 'react';

// Mock data based on the provided image
const stats = [
  { label: '累计资助金额', value: '5,800', unit: '万+', delay: '0' },
  { label: '受益师生人数', value: '12,500', unit: '名+', delay: '100' },
  { label: '成立年份', value: '2014', unit: '年', delay: '200' },
];

const newsData = [
  {
    id: 1,
    tag: '基金动态',
    date: '2024-06-23',
    title: '阳江一中教育发展基金会举行成立10周年发展大会',
    desc: '十年风雨兼程，十年春华秋实。阳江一中教育发展基金会迎来了成立十周年的重要里程碑，广大校友齐聚一堂共谋发展。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByx9tmJo1Ptpf6KB8bB2ejH26bajFCqOUcluBc486jAJX4QbnmXKPQk1UCD_2irF9ZwdledJaet-2VgiYlvGJgx9tQBEdfN2l5pEFHrQuWSDv6M5GZ_HVY4-N-H673oG3KI5Z3n7VehvRChHrIm8FPy__lnWOrF5qFJvJ8qJMH-r79ADKl3P3-WdpE2wKcPkvFaljcUicQF4ScSYg3-JswtDsefNSX4icS20HM4ou2vUmSPGlF85EL0hHItKovtNoONoGri8nt9i68'
  },
  {
    id: 2,
    tag: '特别鸣谢',
    date: '2022-12-16',
    title: '【特别鸣谢】阳江市第一中学教育发展基金会 2021-2022年度捐赠鸣谢名单',
    desc: '感谢每一位校友的慷慨解囊，正是您的点滴关怀汇聚成了支持母校发展的磅礴力量。现将本年度捐赠名单予以公示。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W'
  },
  {
    id: 3,
    tag: '内部治理',
    date: '2021-09-15',
    title: '阳江市第一中学教育发展基金会召开理事监事（扩大）会议',
    desc: '会议审议了基金会上半年度财务报告及项目进展，探讨了下一阶段在奖教奖学、困难帮扶等方面的重点工作方向。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT'
  },
  {
    id: 4,
    tag: '助学仪式',
    date: '2021-08-31',
    title: '帮人一把，送人一程——阳江市第一中学教育发展基金会2021年大一新生助学金发放仪式',
    desc: '为助力家庭经济困难的优秀毕业生顺利开启大学生活，基金会举行了隆重的助学金发放仪式，传递母校温暖。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E'
  },
  {
    id: 5,
    tag: '官方资格',
    date: '2017-11-22',
    title: '阳江市第一中学教育发展基金会获得2016年阳江市公益性捐赠税前扣除资格',
    desc: '根据相关法律法规，基金会正式取得税前扣除资格，将为捐赠校友及企业提供更完善的公益回报保障。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo2QMjj3X7PiTNUXRdNERhh_UVb3YJh7fMbeRR2XhAoozDUUICGIXx-RN0M5h9aZdxsZz75rZ5RRWF9PVh9Gt9aczEvAk9Xe3wYNG80FqGUQcN0qvJirSoX5RnWcQVALKkkgdfNVqmSVbI-lPOMqCvSN_hRb2uHAyFcnAVQwVUETJemyzPJh4pwsPUrC-0NFMeUhNhE4xnjN-oUkDFKBEE9LD3OC5EnD_XmgBxBALmj6qlfxq_g6laBN56W8HL6CRcfb5OS82zjlzl'
  },
];

export const Foundation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12; // As shown in the screenshot

  const getPageNumbers = () => {
    const pages = [];
    
    // Robust pagination logic
    if (totalPages <= 7) {
      // If total pages are small, show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logic for larger page counts (e.g. 12) to match screenshot style: 1 2 3 ... 12
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }
    
    return pages;
  };

  const getTagStyles = (tag: string) => {
    switch (tag) {
      case '特别鸣谢':
        return 'bg-amber-50 text-amber-600 border border-amber-100';
      case '内部治理':
        return 'bg-blue-50 text-blue-600 border border-blue-100';
      case '助学仪式':
        return 'bg-rose-50 text-rose-600 border border-rose-100';
      case '官方资格':
        // Updated to Green/Emerald to match screenshot
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100'; 
      case '基金动态':
      default:
        return 'bg-forest/10 text-forest border border-forest/10';
    }
  };

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">基金会</h1>
          <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">ALUMNI FOUNDATION</p>
          <div className="w-20 h-1 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[160px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ animationDelay: `${stat.delay}ms` }}
          >
            <p className="text-forest font-bold text-sm mb-3 tracking-wide opacity-80">{stat.label}</p>
            <div className="flex items-baseline text-slate-900">
              <span className="text-4xl lg:text-5xl font-black tracking-tight">{stat.value}</span>
              <span className="text-lg lg:text-xl font-bold ml-1 text-slate-500">{stat.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* News List */}
      <div className="space-y-6">
        {newsData.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 lg:gap-8 transition-all duration-300 hover:shadow-lg cursor-pointer group"
          >
            {/* Content Area */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-3">
                <span className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${getTagStyles(item.tag)}`}>
                  {item.tag}
                </span>
                <span className="text-slate-400 text-sm font-medium">{item.date}</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4 leading-snug group-hover:text-forest transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-loose line-clamp-3 md:line-clamp-2 lg:line-clamp-3">
                {item.desc}
              </p>
            </div>

            {/* Image Area */}
            <div className="w-full md:w-48 lg:w-64 h-48 md:h-32 lg:h-40 flex-shrink-0 rounded-lg overflow-hidden bg-[#F5F2EF] border border-slate-50 relative">
               {/* Using a mix-blend-mode to make images look softer/integrated like illustrations in the reference */}
               <img 
                 src={item.img} 
                 alt={item.title} 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100 mix-blend-multiply" 
               />
               <div className="absolute inset-0 bg-[#F5F2EF]/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8 select-none">
        <button 
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest hover:text-forest hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          disabled={currentPage === 1}
        >
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </button>
        
        {getPageNumbers().map((page, index) => {
           if (page === '...') {
             return <span key={`dots-${index}`} className="w-8 text-center text-slate-400 font-bold">...</span>;
           }
           const isCurrent = currentPage === page;
           return (
             <button 
               key={index}
               onClick={() => typeof page === 'number' && setCurrentPage(page)}
               className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] transition-all duration-300
                 ${isCurrent
                   ? 'bg-forest text-white shadow-md shadow-forest/30 border border-transparent' 
                   : 'bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest hover:bg-forest/5'}`}
             >
               {page}
             </button>
           );
        })}

        <button 
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest hover:text-forest hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          disabled={currentPage === totalPages}
        >
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
};