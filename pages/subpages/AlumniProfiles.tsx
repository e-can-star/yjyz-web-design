import React, { useState } from 'react';

// Mock Data matching the reference image
const alumniData = [
  {
    id: 1,
    name: '曾庆存',
    year: '1952届校友',
    tag: '学术泰斗',
    tagStyle: 'bg-[#028d6a] text-white',
    desc: '中国科学院院士，著名大气科学家，2019年度国家最高科学技术奖获得者。在大气动力学、地球流体力学等领域作出划时代贡献。',
    img: '../../images/zenqincun.png'
  },
  {
    id: 2,
    name: '林冠',
    year: '1985届校友',
    tag: '商界精英',
    tagStyle: 'bg-[#D4A373] text-white',
    desc: '知名科技企业高级副总裁，长期致力于推动智慧城市与绿色能源技术的融合应用，曾获多项行业创新大奖。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT'
  },
  {
    id: 3,
    name: '陈晓芸',
    year: '1992届校友',
    tag: '医学专家',
    tagStyle: 'bg-[#3b82f6] text-white',
    desc: '中山大学附属第一医院主任医师，在临床医学研究领域发表多篇国际核心期刊论文，深受病患信赖。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W'
  },
  {
    id: 4,
    name: '王建民',
    year: '1978届校友',
    tag: '教育楷模',
    tagStyle: 'bg-[#014d3a] text-white',
    desc: '国家特级教师，曾任多所重点中学校长，长期扎根基础教育一线，为家乡人才培养做出了重要贡献。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo2QMjj3X7PiTNUXRdNERhh_UVb3YJh7fMbeRR2XhAoozDUUICGIXx-RN0M5h9aZdxsZz75rZ5RRWF9PVh9Gt9aczEvAk9Xe3wYNG80FqGUQcN0qvJirSoX5RnWcQVALKkkgdfNVqmSVbI-lPOMqCvSN_hRb2uHAyFcnAVQwVUETJemyzPJh4pwsPUrC-0NFMeUhNhE4xnjN-oUkDFKBEE9LD3OC5EnD_XmgBxBALmj6qlfxq_g6laBN56W8HL6CRcfb5OS82zjlzl'
  },
  {
    id: 5,
    name: '张明辉',
    year: '1980届校友',
    tag: '文化名家',
    tagStyle: 'bg-[#ea580c] text-white',
    desc: '著名书法家，作品多次入选全国书法大展。热心校友事业，为校园文化建设提供了诸多宝贵建议。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E'
  },
  {
    id: 6,
    name: '李思颖',
    year: '2012届校友',
    tag: '科研新星',
    tagStyle: 'bg-[#0d9488] text-white',
    desc: '清华大学博士后，主要研究方向为人工智能与可持续发展。在求学期间曾多次获得国家奖学金。',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuk_Qtmi0CGnsVCzkhra03jFKTrgwN-daJgNGybCHEroM6xqMG_9o1s1HX732pbN6fwQBvmXi51RPWeiwPZOuB9rNrbYoHnK2Dawe12i-_nFl2VIjD3H5wI4Tck4NhHg8I8yD1H5Ejm8MeZsqzZiSlx03pRbKZsmASZROS1tmPrcEdQHQHujGaQcu6GweP3osicQ3KB3SDkPx0KUXMuUMCdPCcBwY2m3o23fjfRbkvk5wAFlWA4zDoxeKdKmoSwbKyGlJSj1b0MTV6'
  },
];

export const AlumniProfiles: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8; // Simulating 8 pages as per reference

  const getPageNumbers = () => {
    // Logic to show 1 2 3 ... 8
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="space-y-12 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">校友风采</h1>
          <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">ALUMNI SPOTLIGHT</p>
          <div className="w-20 h-1 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {alumniData.map((person) => (
          <div 
            key={person.id}
            className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
          >
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F2EF]">
              <img 
                src={person.img} 
                alt={person.name} 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 mix-blend-multiply" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Tag (Floating) */}
              <div className={`absolute bottom-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${person.tagStyle}`}>
                {person.tag}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-black text-slate-900 font-serif">{person.name}</h3>
                <span className="text-slate-500 text-sm font-medium bg-slate-50 px-2 py-1 rounded-md border border-slate-100">{person.year}</span>
              </div>
              
              <p className="text-slate-500 text-sm leading-7 mb-6 line-clamp-4 flex-grow text-justify">
                {person.desc}
              </p>

              <button className="flex items-center gap-1 text-forest font-bold text-sm group/btn w-fit hover:underline decoration-2 underline-offset-4 decoration-forest/30 hover:decoration-forest transition-all">
                了解更多 
                <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </button>
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
        
        {getPageNumbers().map((page, index) => {
           if (page === '...') {
             return <span key={`dots-${index}`} className="w-8 text-center text-slate-400 font-bold">...</span>;
           }
           const isCurrent = currentPage === page;
           return (
             <button 
               key={index}
               onClick={() => typeof page === 'number' && setCurrentPage(page)}
               className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[15px] transition-all duration-300
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
          className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest hover:text-forest hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white"
          disabled={currentPage === totalPages}
        >
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>

      {/* Floating Action Button (Optional for Mobile) */}
      <div className="fixed bottom-8 right-8 z-30 md:hidden">
          <button className="w-12 h-12 bg-forest text-white rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-transform">
             <span className="material-symbols-outlined">vertical_align_top</span>
          </button>
      </div>
    </div>
  );
};