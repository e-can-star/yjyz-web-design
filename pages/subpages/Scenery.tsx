import React, { useState } from 'react';

export const Scenery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const baseImages = [
    { title: '阅览室（明耀庆丰纪念室）', img: '../../images/阅览室（明耀庆丰纪念室）.jpg' },
    { title: '电子阅览室', img: '../../images/电子阅览室.jpg' },
    { title: '美术馆', img: '../../images/美术馆.jpg' },
    { title: '体育馆', img: '../../images/体育馆.jpg' },
    { title: '芬芳亭', img: '../../images/芬芳亭.jpg' },
    { title: '春晖亭', img: '../../images/春晖亭.jpg' },
  ];

  // Extend data to have enough items for 3 pages
  const allImages = [
    ...baseImages,
    // Page 2 data
    { title: '教学楼', img: '../../images/教学楼.jpg' },
    { title: '校史馆', img: '../../images/校史馆.jpg' },
    { title: '院士馆', img: '../../images/院士馆.jpg' },
    { title: '图书馆', img: '../../images/图书馆.jpg' },
    { title: '运动场', img: '../../images/运动场.jpg' },
    { title: '美术室', img: '../../images/美术室.jpg' },
    // Page 3 data
    { title: '书法室', img: '../../images/书法室.png' },
    { title: '语音室', img: '../../images/语音室.jpg' },
    { title: '舞蹈室', img: '../../images/舞蹈室.jpg' },
    { title: '食堂', img: '../../images/食堂.jpg' },
    { title: '校园雕塑《火炬手》', img: '../../images/校园雕塑《火炬手》.jpg' },
    { title: '天鹅雕塑', img: '../../images/天鹅塑像.jpg' },
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