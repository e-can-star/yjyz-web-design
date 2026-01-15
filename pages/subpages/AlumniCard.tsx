import React, { useState } from 'react';

export const AlumniCard: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const qrImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E";

  const handleSave = () => {
    setIsSaving(true);
    // Simulate save delay/ripple effect
    setTimeout(() => {
      setIsSaving(false);
      alert('二维码已保存到相册（模拟）');
    }, 600);
  };

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">校友卡</h1>
          <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">ALUMNI CARD</p>
          <div className="w-20 h-1 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 lg:p-16 flex flex-col items-center text-center animate-[scaleIn_0.6s_ease-out]">
        
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">申请您的电子校友卡</h2>
        <p className="text-slate-500 mb-12 max-w-2xl text-lg">
          电子校友卡是阳江一中校友身份的数字凭证，为您提供便捷的校友服务与专属礼遇。
        </p>

        <div className="flex flex-col lg:flex-row gap-16 items-center w-full max-w-5xl">
          {/* Left: QR Code Card */}
          <div className="flex-1 flex flex-col items-center">
            <div 
              className="relative group cursor-pointer"
              onClick={() => setIsZoomed(true)}
            >
              {/* Pulse Glow Effect */}
              <div className="absolute inset-0 bg-forest/20 blur-2xl rounded-full animate-[pulse_3s_infinite]"></div>
              
              {/* Card Container */}
              <div className="relative bg-white p-4 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-[280px] h-[340px] flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                <div className="w-full h-full bg-[#FAF9F7] rounded-lg overflow-hidden relative">
                    {/* Placeholder for QR Code (using an illustration as per design reference) */}
                    <img 
                      src={qrImage} 
                      alt="Mini Program QR" 
                      className="w-full h-full object-cover opacity-90 mix-blend-multiply" 
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                      <div className="bg-white/90 p-3 rounded-full shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <span className="material-symbols-outlined text-forest">zoom_in</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-forest font-bold tracking-wide">
                <span className="material-symbols-outlined text-xl">qr_code_scanner</span>
                扫一扫进入小程序
              </div>
              
              <button 
                onClick={handleSave}
                className={`relative overflow-hidden px-6 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full text-sm font-bold transition-all active:scale-95 border border-slate-200 flex items-center gap-2 ${isSaving ? 'bg-slate-100' : ''}`}
              >
                <span className="material-symbols-outlined text-lg">download</span>
                保存二维码
                {isSaving && (
                  <span className="absolute inset-0 bg-forest/10 animate-[ping_1s_ease-out]"></span>
                )}
              </button>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="flex-1 text-left space-y-10">
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center text-xl font-black shadow-sm group-hover:bg-forest group-hover:text-white transition-colors duration-300 shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">扫描二维码</h3>
                <p className="text-slate-500 leading-relaxed text-sm">使用微信扫描左侧二维码，或在微信搜索“阳江一中校友会”，进入官方小程序。</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center text-xl font-black shadow-sm group-hover:bg-forest group-hover:text-white transition-colors duration-300 shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">关注校友会</h3>
                <p className="text-slate-500 leading-relaxed text-sm">关注小程序，点击首页“校友卡”板块开始申领流程，授权获取微信昵称与头像。</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center text-xl font-black shadow-sm group-hover:bg-forest group-hover:text-white transition-colors duration-300 shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">填写资料申领</h3>
                <p className="text-slate-500 leading-relaxed text-sm">在线提交个人校友信息（入学年份、班级等），经校友办审核通过后即可获得专属电子校友卡。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100 my-12"></div>

        {/* Bottom Features */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-400">
          <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-forest text-2xl">verified_user</span>
             <span className="font-bold text-sm tracking-widest text-slate-600">身份认证</span>
          </div>
          <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-forest text-2xl">card_membership</span>
             <span className="font-bold text-sm tracking-widest text-slate-600">校友礼遇</span>
          </div>
          <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-forest text-2xl">school</span>
             <span className="font-bold text-sm tracking-widest text-slate-600">母校情缘</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-lg w-full bg-white p-2 rounded-2xl overflow-hidden shadow-2xl animate-[scaleIn_0.3s_ease-out]">
             <img src={qrImage} alt="Large QR" className="w-full h-auto rounded-xl" />
             <button 
               className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
               onClick={() => setIsZoomed(false)}
             >
               <span className="material-symbols-outlined">close</span>
             </button>
             <div className="p-4 text-center">
                <p className="text-slate-600 font-bold">微信扫一扫</p>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};