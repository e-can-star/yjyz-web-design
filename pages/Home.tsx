import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AnimatedStat = ({ end, duration = 1000, decimals = 0 }: { end: number, duration?: number, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out quart: 1 - (1 - x)^4
      const ease = 1 - Math.pow(1 - percentage, 4);
      
      setCount(end * ease);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasAnimated, end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
    </span>
  );
};

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Scenery Carousel State
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const heroImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuByx9tmJo1Ptpf6KB8bB2ejH26bajFCqOUcluBc486jAJX4QbnmXKPQk1UCD_2irF9ZwdledJaet-2VgiYlvGJgx9tQBEdfN2l5pEFHrQuWSDv6M5GZ_HVY4-N-H673oG3KI5Z3n7VehvRChHrIm8FPy__lnWOrF5qFJvJ8qJMH-r79ADKl3P3-WdpE2wKcPkvFaljcUicQF4ScSYg3-JswtDsefNSX4icS20HM4ou2vUmSPGlF85EL0hHItKovtNoONoGri8nt9i68",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E"
  ];

  const sceneryItems = [
    { title: "芬芳亭", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W" },
    { title: "春晖亭", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-jeTmmthQmv2Ugw8N9j7g20lxc9DYN1GV5bU_47RlOVKIoZHtjywo_c-iC0LdyLOHxshZ-LKUcYm57c_k0cC2iooSxg_3HFqbOZ9T7tRWzjkQrK_K7mN6pewgCM2jiA04jo5h0GHhw-QVpyd5KQDlmPo6wr3F7SkrtNMLDHgyWov_m5yiD8XGKgbIyFPDn7wMJcaNW6Z-GGGuU65FaTKPicJJH49HLYh356HlMOlU1dBmDLdK6mbozStzwJBrd95X7jA_Rk1jsohN" },
    { title: "教学楼", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByx9tmJo1Ptpf6KB8bB2ejH26bajFCqOUcluBc486jAJX4QbnmXKPQk1UCD_2irF9ZwdledJaet-2VgiYlvGJgx9tQBEdfN2l5pEFHrQuWSDv6M5GZ_HVY4-N-H673oG3KI5Z3n7VehvRChHrIm8FPy__lnWOrF5qFJvJ8qJMH-r79ADKl3P3-WdpE2wKcPkvFaljcUicQF4ScSYg3-JswtDsefNSX4icS20HM4ou2vUmSPGlF85EL0hHItKovtNoONoGri8nt9i68" },
    { title: "校史馆", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT" },
    { title: "院士馆", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E" },
    { title: "图书馆", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo2QMjj3X7PiTNUXRdNERhh_UVb3YJh7fMbeRR2XhAoozDUUICGIXx-RN0M5h9aZdxsZz75rZ5RRWF9PVh9Gt9aczEvAk9Xe3wYNG80FqGUQcN0qvJirSoX5RnWcQVALKkkgdfNVqmSVbI-lPOMqCvSN_hRb2uHAyFcnAVQwVUETJemyzPJh4pwsPUrC-0NFMeUhNhE4xnjN-oUkDFKBEE9LD3OC5EnD_XmgBxBALmj6qlfxq_g6laBN56W8HL6CRcfb5OS82zjlzl" },
    { title: "阅览室（明耀庆丰纪念室）", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuk_Qtmi0CGnsVCzkhra03jFKTrgwN-daJgNGybCHEroM6xqMG_9o1s1HX732pbN6fwQBvmXi51RPWeiwPZOuB9rNrbYoHnK2Dawe12i-_nFl2VIjD3H5wI4Tck4NhHg8I8yD1H5Ejm8MeZsqzZiSlx03pRbKZsmASZROS1tmPrcEdQHQHujGaQcu6GweP3osicQ3KB3SDkPx0KUXMuUMCdPCcBwY2m3o23fjfRbkvk5wAFlWA4zDoxeKdKmoSwbKyGlJSj1b0MTV6" },
    { title: "电子阅览室", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W" },
    { title: "美术馆", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKic_ANbi8A6cXiV80FxLHbxPDQ2ttvptPjeHEg1kMMHsqEiyNheeypvGEGhICgXn2y0t39mQB4FKqp565v6f2zDl-y1t2aQ3JsxdMlfgXqaj0o1Qax0gamS90uJ8nkuVdtLUrDbopuiqzM_80GbShUeNKUZ-a2MaRBliOpL5jc1_RzR8xprj-W6cjNSnQB8PPSDAiCzfhtHDxKne53NupeugpOgT1Lbdpb7fxM89PvZJh8Ubsw60vzoXXT_HOHNY4eOrpmZ_uCsSc" },
    { title: "体育馆", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E" },
    { title: "运动场", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W" },
    { title: "美术室", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT" },
    { title: "书法室", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E" },
    { title: "语音室", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W" },
    { title: "舞蹈室", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT" },
    { title: "食堂", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E" },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <section className="relative h-[100vh] w-full overflow-hidden bg-black">
        {/* Carousel Images */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          >
             <div className="absolute inset-0 bg-black/20"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/90 to-transparent opacity-60"></div>
          </div>
        ))}
        
        {/* Content Overlay */}
        <div className="absolute bottom-32 left-8 md:left-20 max-w-4xl text-white z-20 pointer-events-none">
             <h2 className="text-2xl md:text-3xl font-bold mb-4 opacity-90 tracking-widest animate-[fadeInUp_1s_ease-out]">百年名校 薪火相传</h2>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight drop-shadow-lg animate-[fadeInUp_1s_ease-out_0.2s_both]">
               砥砺前行<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">筑梦未来</span>
             </h1>
             <p className="text-xl md:text-2xl font-light border-l-4 border-forest pl-3 py-2 bg-black/20 backdrop-blur-sm rounded-r-lg max-w-xl animate-[fadeInUp_1s_ease-out_0.4s_both]">
               阳江一中校训：志、爱、勤、礼、洁
             </p>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 pointer-events-auto">
          {heroImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group py-4 px-2 cursor-pointer focus:outline-none" 
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className={`block h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                index === currentSlide 
                  ? 'w-12 bg-white' 
                  : 'w-4 bg-white/40 group-hover:bg-white/70 group-hover:w-6'
              }`} />
            </button>
          ))}
        </div>
      </section>

      {/* School Profile Summary */}
      <section className="bg-white py-24">
         <div className="max-w-[1440px] mx-auto px-6 md:px-16">
             <div className="flex items-end justify-between mb-16">
                 <div className="flex gap-4">
                     <div className="w-2 self-stretch bg-forest rounded-full"></div>
                     <div>
                         <h2 className="text-4xl font-black text-slate-900 mb-2">学校概况</h2>
                         <p className="text-slate-400 font-bold tracking-[0.25em] text-sm">SCHOOL PROFILE</p>
                     </div>
                 </div>
                 <Link to="/profile/intro" className="px-6 py-2 bg-forest text-white rounded-full flex items-center gap-2 text-sm font-medium hover:bg-deep-forest transition-colors">
                    详细介绍 <span className="material-symbols-outlined text-sm">east</span>
                 </Link>
             </div>
             
             <div className="flex flex-col lg:flex-row gap-12 items-center">
                 <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-2xl relative group">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuByx9tmJo1Ptpf6KB8bB2ejH26bajFCqOUcluBc486jAJX4QbnmXKPQk1UCD_2irF9ZwdledJaet-2VgiYlvGJgx9tQBEdfN2l5pEFHrQuWSDv6M5GZ_HVY4-N-H673oG3KI5Z3n7VehvRChHrIm8FPy__lnWOrF5qFJvJ8qJMH-r79ADKl3P3-WdpE2wKcPkvFaljcUicQF4ScSYg3-JswtDsefNSX4icS20HM4ou2vUmSPGlF85EL0hHItKovtNoONoGri8nt9i68" alt="Campus" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </div>
                 <div className="w-full lg:w-2/5 space-y-8">
                     <div className="text-slate-600 leading-relaxed text-lg space-y-6">
                        <p>
                          阳江市第一中学（简称“阳江一中”），是由阳江市政府投资建设、市教育局直属的重点中学，是广东省国家级示范性普通高中。学校办学历史悠久，底蕴深厚，致力于培养具有家国情怀、国际视野、创新精神的现代高素质人才。
                        </p>
                        <p>
                          校园环境优雅，景色宜人，被誉为“求学之胜地”。学校占地面积广阔，教学设施先进，师资力量雄厚，教学成果斐然，在省内外享有极高的社会声誉。
                        </p>
                     </div>
                     <div className="grid grid-cols-2 gap-8">
                         {[
                             { val: 26.9, decimals: 1, unit: '万 m²', label: '占地面积' },
                             { val: 11.3, decimals: 1, unit: '万 m²', label: '建筑面积' },
                             { val: 60, decimals: 0, unit: '个', label: '教学班级', suffix: '+' },
                             { val: 476, decimals: 0, unit: '位', label: '专职教师' },
                         ].map((stat, i) => (
                             <div key={i} className="border-l-4 border-slate-100 pl-4">
                                 <div className="flex items-baseline gap-1">
                                     <span className="text-4xl font-black text-forest">
                                       <AnimatedStat end={stat.val} decimals={stat.decimals} />{stat.suffix}
                                     </span>
                                     <span className="text-slate-400 text-sm">{stat.unit}</span>
                                 </div>
                                 <div className="text-xs text-slate-500 font-bold tracking-wider uppercase mt-1">{stat.label}</div>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Campus Activities Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="flex items-end justify-between mb-12">
             <div className="flex gap-4">
                 <div className="w-2 self-stretch bg-forest rounded-full"></div>
                 <div>
                     <h2 className="text-4xl font-black text-slate-900 mb-2">校园活动</h2>
                     <p className="text-slate-400 font-bold tracking-[0.25em] text-sm">CAMPUS ACTIVITIES & EVENTS</p>
                 </div>
             </div>
             <Link to="/activities" className="text-forest font-bold hover:text-deep-forest flex items-center gap-1 transition-colors group">
                更多活动 <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">east</span>
             </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
             {/* Left: Featured Activity */}
             <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group cursor-pointer flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                <div className="relative h-[360px] overflow-hidden">
                   <div className="absolute top-6 left-6 z-10">
                      <span className="bg-forest text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">活动动态</span>
                   </div>
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuByx9tmJo1Ptpf6KB8bB2ejH26bajFCqOUcluBc486jAJX4QbnmXKPQk1UCD_2irF9ZwdledJaet-2VgiYlvGJgx9tQBEdfN2l5pEFHrQuWSDv6M5GZ_HVY4-N-H673oG3KI5Z3n7VehvRChHrIm8FPy__lnWOrF5qFJvJ8qJMH-r79ADKl3P3-WdpE2wKcPkvFaljcUicQF4ScSYg3-JswtDsefNSX4icS20HM4ou2vUmSPGlF85EL0hHItKovtNoONoGri8nt9i68" alt="Sports Day" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3 font-medium">
                        <span className="material-symbols-outlined text-lg">calendar_today</span>
                        2026年1月14日
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-forest transition-colors">
                      阳江市第一中学合唱团专场音乐会预告
                    </h3>
                    <p className="text-slate-500 leading-relaxed line-clamp-3">
                      为展现阳江一中美育教育成果，推动音乐审美教育普及与提高，促进美育教育教学高质量发展，我校于1月17日19:30在阳江市百乐演艺中心举行专场音乐会。欢迎大家前来观看。
                    </p>
                </div>
             </div>

             {/* Right: Activity List */}
             <div className="flex flex-col gap-6">
                {[
                  {
                    tag: '教学教研',
                    title: '我校青年教师省赛创佳绩，彰显教学改革硬实力',
                    date: '2025年12月1日',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W'
                  },
                  {
                    tag: '校园活动',
                    title: '承百年文脉  启时代新程：阳江一中建校116周年发展大会暨文艺晚会',
                    date: '2025年11月29日',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT'
                  },
                  {
                    tag: '招生招聘',
                    title: '阳江一中招聘32名教师：阳江一中招聘教师公告',
                    date: '2025年11月17日',
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-6 items-center transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer group h-full">
                     <div className="w-36 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     </div>
                     <div className="flex-grow">
                        <span className="inline-block bg-[#F0F4F2] text-deep-forest text-[11px] font-bold px-2.5 py-1 rounded mb-2">{item.tag}</span>
                        <h4 className="font-bold text-slate-800 text-lg leading-snug mb-2 group-hover:text-forest transition-colors line-clamp-2">{item.title}</h4>
                        <p className="text-slate-400 text-xs font-medium">{item.date}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Campus Scenery Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="flex items-end justify-between mb-12">
             <div className="flex gap-4">
                 <div className="w-2 self-stretch bg-forest rounded-full"></div>
                 <div>
                     <h2 className="text-4xl font-black text-slate-900 mb-2">校园风光</h2>
                     <p className="text-slate-400 font-bold tracking-[0.25em] text-sm">CAMPUS SCENERY</p>
                 </div>
             </div>
             <div className="flex gap-2">
                <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-all">
                  <span className="material-symbols-outlined text-lg">west</span>
                </button>
                <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-all">
                  <span className="material-symbols-outlined text-lg">east</span>
                </button>
             </div>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory scrollbar-hide select-none cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sceneryItems.map((item, i) => (
              <div key={i} className="min-w-[280px] h-[400px] relative rounded-[20px] overflow-hidden shadow-sm snap-start group select-none">
                 {/* Image with zoom effect */}
                 <div className="absolute inset-0 bg-slate-200">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                      draggable="false"
                      loading="lazy"
                    />
                 </div>
                 
                 {/* Dark gradient for contrast on hover only */}
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                 {/* Floating Content Card */}
                 <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50 transition-all duration-300 group-hover:bg-forest group-hover:border-forest group-hover:shadow-forest/30 group-hover:-translate-y-2">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1 group-hover:text-white/70 transition-colors">SCENERY</p>
                                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors">{item.title}</h3>
                            </div>
                            <Link to="/profile/scenery" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white/20 transition-colors z-10">
                                <span className="material-symbols-outlined text-slate-600 text-sm group-hover:text-white">arrow_outward</span>
                            </Link>
                        </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};