import React from 'react';

export const Halls: React.FC = () => {
  const halls = [
    { title: '沉浸式“逛馆”系列（一）|| 阳江一中校史馆', img: '../../images/xiaoshiguan.jpg' },
    { title: '沉浸式“逛馆”系列（二）|| 阳江一中曾庆存院士馆', img: '../../images/yuanshiguan.jpg' },
    { title: '沉浸式“逛馆”系列（三）|| 阳江一中图书馆', img: '../../images/library.jpg' },
    { title: '沉浸式“逛馆”系列（四）|| 阳江一中美术馆', img: '../../images/meishuguan.jpg' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 lg:p-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight font-serif">学校四馆</h1>
        <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">SCHOOL FOUR HALLS</p>
        <div className="w-20 h-1 bg-forest mx-auto mt-6 rounded-full"></div>
      </header>

      <div className="space-y-8">
        {halls.map((hall, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white rounded-[12px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg overflow-hidden group">
            <div className="flex-grow p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-forest transition-colors">{hall.title}</h3>
              <p className="text-slate-400 text-sm">原创:学校党政办公室</p>
            </div>
            <div className="w-full md:w-[360px] h-[220px] overflow-hidden flex-shrink-0">
              <img alt={hall.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={hall.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};