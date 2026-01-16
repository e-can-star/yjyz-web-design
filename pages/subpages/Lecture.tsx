import React, { useState } from 'react';

// Mock Data
const lectureData = [
  {
    id: 151,
    title: '第151期 一中大讲坛 || 深圳北理莫斯科大学化学系中方系主任张东翔教授专题讲座',
    date: '2天前',
    views: 421,
    isNew: true,
    img: '../../images/lecture1.jpg',
    summary: '张东翔教授深入浅出地讲解了化学前沿科技与未来发展趋势，勉励一中学子立大志、明大德、成大才、担大任。'
  },
  {
    id: 150,
    title: '一中大讲坛（总第150期）预告|| 2001届校友敖慧仙教授将在我校开展专题讲座',
    date: '4天前',
    views: 1734,
    isNew: false,
    img: '../../images/lecture2.png'
  },
  {
    id: 149,
    title: '一中大讲坛（总第151期）预告 || 深圳北理莫斯科大学化学系中方系主任张东翔将在我校开展专题讲座',
    date: '1周前',
    views: 759,
    isNew: false,
    img: '../../images/lecture3.jpg'
  },
  {
    id: 148,
    title: '一中大讲坛（总第149期）|| 阳江市妇幼保健院妇科门诊主任医师周祖妹到我校开展专题讲座',
    date: '1周前',
    views: 1037,
    isNew: false,
    img: '../../images/lecture4.jpg'
  },
  {
    id: 147,
    title: '一中大讲坛（总第148期）|| 资深餐厨用品设计师苏志勇校友到我校开展专题讲座',
    date: '2025年12月24日',
    views: 650,
    isNew: false,
    img: '../../images/lecture5.jpg'
  },
  {
    id: 146,
    title: '一中大讲坛（总第148期）预告|| 资深餐厨用品设计师苏志勇校友将在我校开展专题讲座',
    date: '2025年12月12日',
    views: 1709,
    isNew: false,
    img: '../../images/lecture6.jpg'
  }
];

export const Lecture: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const featuredLecture = lectureData[0];
  const listLectures = lectureData.slice(1);

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <div className="flex items-baseline gap-3">
             <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">一中大讲坛</h1>
          </div>
          <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">CAMPUS LECTURE HALL</p>
          <div className="w-20 h-1 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* Featured Lecture (Latest) */}
      <div className="group relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
         <img 
           src={featuredLecture.img} 
           alt={featuredLecture.title} 
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
         />
         {/* Overlay Gradient */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
         
         {/* Content */}
         <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 flex flex-col items-start">
             <span className="bg-forest text-white text-xs font-bold px-3 py-1 rounded-sm mb-4">最新讲座</span>
             <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight line-clamp-2 drop-shadow-md">
               {featuredLecture.title}
             </h2>
             <div className="flex items-center gap-6 text-white/70 text-sm font-medium mb-6">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">calendar_today</span> {featuredLecture.date}</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">visibility</span> 阅读 {featuredLecture.views}</span>
             </div>
             
             <button className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-forest hover:text-white transition-all group-hover:translate-x-2">
                了解更多
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
             </button>
         </div>
      </div>

      {/* Lecture List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 md:p-6">
         {listLectures.map((item) => (
           <div 
             key={item.id}
             className="flex flex-col md:flex-row gap-6 p-4 md:p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group"
           >
              {/* ID Number */}
              <div className="hidden md:flex flex-col justify-start pt-1">
                 <span className="text-3xl font-black text-slate-200 group-hover:text-forest/30 transition-colors">{item.id}</span>
              </div>

              {/* Text Info */}
              <div className="flex-grow flex flex-col justify-center">
                 <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-forest transition-colors leading-snug">
                   {item.title}
                 </h3>
                 <div className="flex items-center gap-6 text-slate-400 text-xs font-medium">
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_today</span> {item.date}</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">visibility</span> 阅读 {item.views}</span>
                 </div>
              </div>

              {/* Thumbnail Image */}
              <div className="w-full md:w-48 h-32 md:h-28 flex-shrink-0 rounded-lg overflow-hidden border border-slate-100 relative">
                 <img 
                   src={item.img} 
                   alt={item.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                 />
                 {/* ID Overlay for Mobile */}
                 <div className="md:hidden absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
                    Vol.{item.id}
                 </div>
              </div>
           </div>
         ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-4 select-none">
        <button 
          className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-forest hover:text-forest bg-white transition-all"
          disabled
        >
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </button>
        
        <button className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-forest text-white shadow-md shadow-forest/30 border border-transparent">1</button>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest hover:bg-forest/5 transition-all">2</button>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest hover:bg-forest/5 transition-all">3</button>
        <span className="w-8 text-center text-slate-400 font-bold text-sm">...</span>

        <button 
          className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-forest hover:text-forest bg-white transition-all"
        >
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
};