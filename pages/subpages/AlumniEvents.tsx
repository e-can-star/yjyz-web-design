import React from 'react';

const events = [
  {
    id: 1,
    title: '阳江一中2025年粤港澳大湾区校友新春团拜会',
    date: '2025-01-12',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W',
    location: '深圳',
    delay: '0ms'
  },
  {
    id: 2,
    title: '阳江一中广州校友会举行2024年中秋联谊活动',
    date: '2024-09-15',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT',
    location: '广州',
    delay: '100ms'
  },
  {
    id: 3,
    title: '阳江一中江门校友会正式成立',
    date: '2024-05-20',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E',
    location: '江门',
    delay: '200ms'
  },
  {
    id: 4,
    title: '回家看看——记1994届校友毕业30周年返校聚会',
    date: '2024-04-05',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo2QMjj3X7PiTNUXRdNERhh_UVb3YJh7fMbeRR2XhAoozDUUICGIXx-RN0M5h9aZdxsZz75rZ5RRWF9PVh9Gt9aczEvAk9Xe3wYNG80FqGUQcN0qvJirSoX5RnWcQVALKkkgdfNVqmSVbI-lPOMqCvSN_hRb2uHAyFcnAVQwVUETJemyzPJh4pwsPUrC-0NFMeUhNhE4xnjN-oUkDFKBEE9LD3OC5EnD_XmgBxBALmj6qlfxq_g6laBN56W8HL6CRcfb5OS82zjlzl',
    location: '阳江一中',
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
                <p className="text-white/80 text-sm">点击查看本次活动的精彩回顾与照片集锦</p>
                <button className="mt-6 px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-forest transition-colors font-bold text-sm">
                  进入相册
                </button>
              </div>

              {/* Location Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-forest">location_on</span>
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