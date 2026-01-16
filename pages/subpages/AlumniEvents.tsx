import React from 'react';

const events = [
  {
    id: 1,
    title: '阳江一中2005届高中毕业20周年聚会',
    date: '2025-11-23',
    img: '../../images/2005jie.jpg',

    delay: '0ms'
  },
  {
    id: 2,
    title: '阳江一中校友第四届羽毛球联谊赛圆满收官',
    date: '2025-11-03',
    img: '../../images/yumaoqiu.jpg',

    delay: '100ms'
  },
  {
    id: 3,
    title: '阳江一中成功举办环校跑活动',
    date: '2025-09-15',
    img: '../../images/huanxiaopao.jpg',

    delay: '200ms'
  },
  {
    id: 4,
    title: '阳江一中校友会2025届理事会扬帆起航',
    date: '2025-06-11',
    img: '../../images/2025jie.jpg',

    delay: '300ms'
  }
];

export const AlumniEvents: React.FC = () => {
  return (
    <div className="space-y-12 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">校友活动</h1>
          <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">ALUMNI EVENTS</p>
          <div className="w-20 h-1 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* Polaroid Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="group relative bg-white p-4 pb-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] hover:rotate-1 animate-[fadeInUp_0.8s_ease-out_both]"
            style={{ animationDelay: event.delay }}
          >
            {/* Image Container with Overflow Hidden */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-6">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Slide-up Overlay */}
              <div className="absolute inset-0 bg-forest/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center text-white p-8 text-center">
                <span className="material-symbols-outlined text-4xl mb-4 animate-[bounce_2s_infinite]">event_available</span>
                <h4 className="text-xl font-bold mb-2">了解详情</h4>
                <p className="text-white/80 text-sm">点击查看本次活动的精彩回顾</p>
                <button className="mt-6 px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-forest transition-colors font-bold text-sm">
                  进入活动
                </button>
              </div>

              {/* Location Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                {event.location}
              </div>
            </div>

            {/* Content Area */}
            <div className="px-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-forest text-lg">calendar_month</span>
                <span className="text-forest font-bold text-sm tracking-wide">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-forest transition-colors font-serif">
                {event.title}
              </h3>
            </div>

            {/* Decorative 'Tape' effect (simulated with CSS) */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm border border-white/40 rotate-1 shadow-sm opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center pt-8">
        <button className="flex items-center gap-2 text-slate-500 hover:text-forest font-bold transition-all group px-8 py-3 rounded-full hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm">
          查看更多往期活动
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};