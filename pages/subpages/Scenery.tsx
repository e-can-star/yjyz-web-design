import React, { useState } from 'react';

export const Scenery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const baseImages = [
    { title: '阅览室（明耀庆丰纪念室）', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT' },
    { title: '电子阅览室', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuk_Qtmi0CGnsVCzkhra03jFKTrgwN-daJgNGybCHEroM6xqMG_9o1s1HX732pbN6fwQBvmXi51RPWeiwPZOuB9rNrbYoHnK2Dawe12i-_nFl2VIjD3H5wI4Tck4NhHg8I8yD1H5Ejm8MeZsqzZiSlx03pRbKZsmASZROS1tmPrcEdQHQHujGaQcu6GweP3osicQ3KB3SDkPx0KUXMuUMCdPCcBwY2m3o23fjfRbkvk5wAFlWA4zDoxeKdKmoSwbKyGlJSj1b0MTV6' },
    { title: '美术馆', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKic_ANbi8A6cXiV80FxLHbxPDQ2ttvptPjeHEg1kMMHsqEiyNheeypvGEGhICgXn2y0t39mQB4FKqp565v6f2zDl-y1t2aQ3JsxdMlfgXqaj0o1Qax0gamS90uJ8nkuVdtLUrDbopuiqzM_80GbShUeNKUZ-a2MaRBliOpL5jc1_RzR8xprj-W6cjNSnQB8PPSDAiCzfhtHDxKne53NupeugpOgT1Lbdpb7fxM89PvZJh8Ubsw60vzoXXT_HOHNY4eOrpmZ_uCsSc' },
    { title: '体育馆', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E' },
    { title: '芬芳亭', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W' },
    { title: '春晖亭', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W' },
  ];

  // Extend data to have enough items for 3 pages
  const allImages = [
    ...baseImages,
    // Page 2 data
    { title: '教学楼', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByx9tmJo1Ptpf6KB8bB2ejH26bajFCqOUcluBc486jAJX4QbnmXKPQk1UCD_2irF9ZwdledJaet-2VgiYlvGJgx9tQBEdfN2l5pEFHrQuWSDv6M5GZ_HVY4-N-H673oG3KI5Z3n7VehvRChHrIm8FPy__lnWOrF5qFJvJ8qJMH-r79ADKl3P3-WdpE2wKcPkvFaljcUicQF4ScSYg3-JswtDsefNSX4icS20HM4ou2vUmSPGlF85EL0hHItKovtNoONoGri8nt9i68' },
    { title: '校史馆', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT' },
    { title: '院士馆', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E' },
    { title: '图书馆', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo2QMjj3X7PiTNUXRdNERhh_UVb3YJh7fMbeRR2XhAoozDUUICGIXx-RN0M5h9aZdxsZz75rZ5RRWF9PVh9Gt9aczEvAk9Xe3wYNG80FqGUQcN0qvJirSoX5RnWcQVALKkkgdfNVqmSVbI-lPOMqCvSN_hRb2uHAyFcnAVQwVUETJemyzPJh4pwsPUrC-0NFMeUhNhE4xnjN-oUkDFKBEE9LD3OC5EnD_XmgBxBALmj6qlfxq_g6laBN56W8HL6CRcfb5OS82zjlzl' },
    { title: '运动场', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W' },
    { title: '美术室', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT' },
    // Page 3 data
    { title: '书法室', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E' },
    { title: '语音室', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W' },
    { title: '舞蹈室', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zblejk4vtXhpJLr03ALBvqHP4aFCFKX9Mw7ysOTfwqpn5XABM9TfUJPjjD1Kkhh9gBsOBu7R67v2UIvYSFfDmPLWSyZnGzx9LYMXitXO9mhtHDVOoKCKh7w2fgC1qufU5j-AvWKaU7-hFbHWzSHufihsgbsej9HDaieCRtiovcIL-OyNlRGf7Hfk1S7dsZoI51nbbAggg6bJSdC5wiUr8ukDuKQvsAMUqgdNnl-StYV5GQvfP99mNmZjirQDzMpAhfB7svasLUPT' },
    { title: '食堂', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwwtP5j53CGBARsm_5mcPDnQnxW4xUAqHPEtbYUE58W94wTO0x4risoGtqTrHbowqzz3yXwQFmyD6FCwogSvIz0-kjTJFUGXmSiqK0ZAFujnix8p92DkOVpAs37YwUgEbf3Vgn-ewtMg_GRwyiroGom_451e15gtkv79HZKduakat7As0eQfZyEpiJ7D1cwzFaX7dTktE_HRMi6ZnirCrzNxUwEgAoTv4kT5s29zU_qq9zJeGiWuhwlRVkJXLdEwMIgSIb5kfwO-0E' },
    { title: '校园雕塑《火炬手》', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W' },
    { title: '天鹅雕塑', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI-WKvXdoF_NPpPXXZzWrlSTLPinYNVSuPaV5DOgIvdqME1vIMa7KuiWIQotFPU-ynUmwaTYkNCOuRNCB3YFzvZjA1DsfpAkGgAQh-bUmzMhuQ4WUqzMIAV8xzeCDWuAZB2fYMOYRh4RD7MQmRWd0ftAPlzo172rzp6-teamB28U9MW8t6XZd4UI9gbE4lxJA7vfFHbxALmo2gy2S4Kmqjnw0AqkwFAz-WcOg196T0uNyk6TdS8r21G-PM3IiiUXLEcIgaR2NyRX7W' },
  ];

  const totalPages = Math.ceil(allImages.length / itemsPerPage);
  
  const currentImages = allImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 lg:p-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight font-serif">校园风光</h1>
        <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">CAMPUS SCENERY</p>
        <div className="w-20 h-1 bg-forest mx-auto mt-6 rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 min-h-[600px]">
        {currentImages.map((img, i) => (
          <div key={i} className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-slate-100 group animate-[fadeIn_0.5s_ease-out]">
            <div className="overflow-hidden">
                <img alt={img.title} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110" src={img.img} />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-slate-700 font-medium text-base group-hover:text-forest transition-colors">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex items-center justify-center gap-3">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 transition-all
            ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:border-forest hover:text-forest'}`}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
           <button
             key={page}
             onClick={() => handlePageChange(page)}
             className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all font-medium
               ${currentPage === page 
                 ? 'bg-forest text-white border-forest shadow-md shadow-forest/20' 
                 : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}
           >
             {page}
           </button>
        ))}

        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 transition-all
            ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:border-forest hover:text-forest'}`}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};