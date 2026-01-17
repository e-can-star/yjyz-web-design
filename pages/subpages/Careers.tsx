import React, { useState } from 'react';

// Mock Data based on reference screenshots
const careersData = [
  {
    id: 1,
    title: '阳江一中招聘69名教师 || 阳江市第一中学2025年下半年公开引进高层次人才公告',
    summary: '特别说明：本次公开引进高层次人才工作以此公告为准。招聘公告 为充实我市基础教育师资力量，优化教师队伍结构，现面向社会公开引进高层次人才...',
    date: '2025/12/20',
    views: '9076',
    img: '../../images/校园俯瞰图.jpg'
  },
  {
    id: 2,
    title: '阳江市第一中学招聘临时教师公告',
    summary: '根据我校教学工作的需要，现面向全国招聘临时数学教师3名，物理老师1名，生物教师1名。一、招聘条件 （一）具有良好的职业道德，遵纪守法...',
    date: '2025/2/6',
    views: '1.8万',
    img: '../../images/校园夜景俯瞰.jpg'
  },
  {
    id: 3,
    title: '阳江一中招聘30名教师 || 阳江市第一中学2024年下半年公开引进高层次...',
    summary: '（急需紧缺）人才预告 阳江一中招聘69名教师 01 引才计划 02报名条件 （一）具有中华人民共和国国籍，拥护中华人民共和国宪法...',
    date: '2024/12/15',
    views: '3.1万',
    img: '../../images/教学楼.jpg'
  },
  {
    id: 4,
    title: '阳江一中4月19日在东北师范大学招聘教师公告',
    summary: '阳江一中招聘教师8名，其中英语教师5名，政治、地理及体育教师各1名。三、报名条件 1.具有中华人民共和国国籍，拥护中国共产党的领导...',
    date: '2024/4/17',
    views: '1万',
    img: '../../images/banner-1.jpg'
  },
  {
    id: 5,
    title: '阳江市第一中学2023年集中公开招聘高层次和急需紧缺人才公告',
    summary: '十 其他事项 （一）本次招聘实行诚信报考。应聘人员应认真阅读公告、岗位要求，如实填写个人信息，并对所填信息的真实性、准确性负责...',
    date: '2023/12/17',
    views: '2.1万',
    img: '../../images/运动场.jpg'
  },
  {
    id: 6,
    title: '阳江市第一中学招聘临时数学教师公告',
    summary: '根据我校教学工作的需要，现面向全国招聘临时数学教师公告。根据我校教学工作的需要，现面向全国招聘...',
    date: '2023/2/17',
    views: '8938',
    img: '../../images/芬芳亭.jpg'
  }
];

export const Careers: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = 12; // Matching the screenshot showing page 12

  // Logic to simulate page content for demo purposes
  // In a real app, you'd slice the data based on current page
  const currentItems = currentPage === 1 ? careersData : careersData.slice(0, 4);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section (Wrapped in white card to match Admissions Column style) */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10">
        <header className="mb-0">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight font-serif">教师招聘</h1>
          <p className="text-forest font-bold tracking-[0.2em] uppercase text-sm">FACULTY RECRUITMENT</p>
          <div className="w-16 h-1.5 bg-forest mt-4 rounded-full"></div>
        </header>
      </div>

      {/* List Content */}
      <div className="flex flex-col gap-6">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl p-4 lg:p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Thumbnail */}
            <div className="flex-shrink-0 w-full md:w-56 h-48 md:h-32 rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
              />
            </div>

            {/* Content */}
            <div className="flex-grow min-w-0 flex flex-col h-full justify-between py-1">
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 group-hover:text-forest transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="flex items-center gap-6 text-slate-400 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  {item.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  阅读 {item.views}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8 select-none">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all bg-white
            ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:border-forest hover:text-forest'}`}
        >
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </button>

        {getPageNumbers().map((page, index) => {
          if (page === '...') {
            return <span key={`dots-${index}`} className="w-8 text-center text-slate-400 font-bold">...</span>;
          }

          const pageNum = page as number;
          const isActive = currentPage === pageNum;

          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] transition-all duration-300
                   ${isActive
                  ? 'bg-forest text-white shadow-md shadow-forest/30 border border-transparent scale-110'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest hover:bg-forest/5'}`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all bg-white
            ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:border-forest hover:text-forest'}`}
        >
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
};