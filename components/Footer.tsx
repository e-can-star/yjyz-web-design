import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-forest text-slate-300 py-12 mt-auto">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-8">
          <div>
            <h4 className="text-white font-bold mb-6 text-base tracking-wide border-l-4 border-forest pl-3">联系我们</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-lg text-forest mt-0.5">location_on</span>
                <span className="leading-relaxed">广东省阳江市城南新区城南大道</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="material-symbols-outlined text-lg text-forest">call</span>
                <span>(0662) 3252388</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-base tracking-wide border-l-4 border-forest pl-3">快速链接</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">中华人民共和国教育部</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">广东省教育厅</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">阳江市教育局</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-base tracking-wide border-l-4 border-forest pl-3">公众号订阅</h4>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 p-2 group hover:bg-white/10 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-4xl text-white/20 group-hover:text-white/80 transition-colors">qr_code_2</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold text-white uppercase tracking-widest">Official WeChat</p>
                <p className="text-[11px] text-slate-400 leading-relaxed">扫描二维码关注<br/>官方微信公众号</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-[10px] tracking-widest text-slate-500 flex flex-col md:flex-row justify-center gap-4">
          <p>© 2024 阳江市第一中学. 版权所有</p>
          <span className="hidden md:inline text-slate-700">|</span>
          <p>粤ICP备12345678号</p>
        </div>
      </div>
      
      {/* Scroll to top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-white shadow-2xl rounded-full flex items-center justify-center text-forest border border-slate-100 hover:bg-forest hover:text-white transition-all group"
      >
        <span className="material-symbols-outlined transition-transform group-hover:-translate-y-1">arrow_upward</span>
      </button>
    </footer>
  );
};
