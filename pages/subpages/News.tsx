import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

export const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const newsListRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  // Base real data (Existing items)
  const baseNews = [
    { id: 44, title: '传承红色基因 培育时代新人 || 我校举行党建馆揭幕仪式', date: '2025年12月31日', views: 1034, img: '../../images/dangjian-1.jpg' },
    { id: 43, title: '市委常委、政法委书记蔡铁鹰同志到我校讲授“开学第一堂法治课”', date: '2025年09月20日', views: 3602, img: '../../images/dangjian-2.jpg' },
    { id: 42, title: '中共阳江市第一中学委员会圆满完成换届选举工作', date: '2025年07月13日', views: 5657, img: '../../images/dangjian-3.jpg' },
    { id: 41, title: '我校召开2024-2025学年度第二学期思政课工作会议', date: '2025年03月16日', views: 1834, img: '../../images/dangjian-4.png' },
    { id: 40, title: '承家风明德 仰廉韵正行 || 我校党委组织参观“中国共产党人的家风”档案展', date: '2025年01月07日', views: 1649, img: '../../images/dangjian-5.jpg' },
    { id: 39, title: '坚持党建引领 赋能教育高质量发展', date: '2024年12月01日', views: 1200, img: '../../images/dangjian-6.jpg' },
    { id: 38, title: '弘扬教育家精神 当好新时代教育高质量发展的引领者||阳江市教育局专题', date: '2024年10月21日', views: 4092, img: '../../images/dangjian-7.jpg' },
    { id: 37, title: '学纪 知纪 明纪 守纪||我校召开“七一”表彰大会暨党纪学习教育警示教育', date: '2024年07月05日', views: 3362, img: '../../images/dangjian-8.jpg' },
    { id: 36, title: '习近平对学校思政课建设作出重要指示', date: '2024年05月12日', views: 748, img: '../../images/dangjian-9.jpg' },
    { id: 35, title: '重温党的光辉历史 牢记党的初心使命 || 我校党委组织开展庆“七一”主题党', date: '2023年07月14日', views: 2172, img: '../../images/dangjian-10.jpg' },
    { id: 34, title: '学习新思想 奋进新征程||我校召开“七一”主题党日报告会暨表彰大会', date: '2023年07月11日', views: 2966, img: '../../images/dangjian-11.jpg' },
    { id: 33, title: '广东省中小学中职学校思政课优质课程建设——阳江一中《政治与法治》', date: '2023年07月02日', views: 3379, img: '../../images/dangjian-12.jpg' },
    { id: 32, title: '学习榜样精神 汲取奋斗力量||我校全体党员观看《榜样7》专题节目', date: '2023年03月31日', views: 785, img: '../../images/dangjian-13.jpg' },
    { id: 31, title: '打造精品思政课堂 筑牢立德树人阵地||中共阳江市第一中学第六支部委员', date: '2023年03月04日', views: 1703, img: '../../images/dangjian-14.jpg' },
    { id: 30, title: '我校各党支部学习党的二十大精神心得体会（三）', date: '2023年01月07日', views: 2415, img: '../../images/dangjian-15.jpg' },
    { id: 29, title: '我校各党支部学习党的二十大精神心得体会（二）', date: '2023年01月05日', views: 1596, img: '../../images/dangjian-15-1.jpg' },
    { id: 28, title: '我校各党支部学习党的二十大精神心得体会（一）', date: '2023年01月04日', views: 2088, img: '../../images/dangjian-15-2.jpg' },
    { id: 27, title: '听党话 跟党走||市委二十大精神宣讲团成员、阳江职业技术学院党委书记', date: '2022年12月10日', views: 2371, img: '../../images/dangjian-18.jpg' },
  ];

  // Fill up to 30 items to reach 5 pages (30 / 6 = 5)
  const news = [...baseNews];
  while (news.length < 30) {
    const id = news[news.length - 1].id - 1;
    news.push({
      id,
      title: `党建引领，立德树人 —— 阳江一中党建工作回顾与展望系列报道之 ${Math.abs(id)}`,
      date: '2022年01月01日',
      views: 1000 + Math.floor(Math.random() * 2000),
      img: baseNews[Math.floor(Math.random() * baseNews.length)].img
    });
  }

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const currentNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

    // Case 1: Start (1 2 3 4 ... 10)
    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }
    // Case 2: End (1 ... 7 8 9 10)
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    // Case 3: Middle (1 ... 4 5 6 ... 10)
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  // jQuery effects initialization
  useEffect(() => {
    if (newsListRef.current) {
      // News item hover effects
      $(newsListRef.current).find('.group').each((index, element) => {
        $(element).on('mouseenter', function () {
          $(this).stop().animate({
            backgroundColor: 'rgba(241, 245, 249, 0.8)',
            paddingLeft: '20px',
            paddingRight: '20px'
          }, 300, 'easeOutQuad');

          // Animate title
          $(this).find('h3').stop().animate({
            fontSize: '1.25rem',
            letterSpacing: '0.5px'
          }, 300, 'easeOutQuad');

          // Animate image with bounce effect
          $(this).find('img').stop().animate({
            transform: 'scale(1.15)'
          }, 500, 'easeOutBounce');
        });

        $(element).on('mouseleave', function () {
          $(this).stop().animate({
            backgroundColor: 'transparent',
            paddingLeft: '0px',
            paddingRight: '0px'
          }, 300, 'easeOutQuad');

          $(this).find('h3').stop().animate({
            fontSize: '1.2rem',
            letterSpacing: '0px'
          }, 300, 'easeOutQuad');

          $(this).find('img').stop().animate({
            transform: 'scale(1)'
          }, 500, 'easeOutBounce');
        });

        // News item click effect
        $(element).on('click', function () {
          $(this).stop().animate({
            opacity: '0.7'
          }, 100, function () {
            $(this).stop().animate({
              opacity: '1'
            }, 200);
          });
        });
      });
    }

    if (paginationRef.current) {
      // Pagination button hover effects
      $(paginationRef.current).find('button').not(':disabled').each((index, element) => {
        $(element).on('mouseenter', function () {
          $(this).stop().animate({
            transform: 'scale(1.15)',
            boxShadow: '0 4px 12px rgba(39, 87, 39, 0.3)'
          }, 200, 'easeOutQuad');
        });

        $(element).on('mouseleave', function () {
          $(this).stop().animate({
            transform: 'scale(1)',
            boxShadow: 'none'
          }, 200, 'easeOutQuad');
        });

        // Pagination button click effect
        $(element).on('click', function (e) {
          e.preventDefault();
          $(this).stop().animate({
            transform: 'scale(0.95)'
          }, 100, function () {
            $(this).stop().animate({
              transform: 'scale(1.15)'
            }, 200);
          });
        });
      });
    }

    // Cleanup function to remove event listeners
    return () => {
      if (newsListRef.current) {
        $(newsListRef.current).find('.group').off('mouseenter mouseleave click');
      }
      if (paginationRef.current) {
        $(paginationRef.current).find('button').off('mouseenter mouseleave click');
      }
    };
  }, [currentPage]); // Re-run when currentPage changes

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 px-8 py-4 min-h-[800px] flex flex-col justify-between">
      <div ref={newsListRef}>
        {currentNews.map((item) => (
          <div key={item.id} className="flex gap-6 py-8 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors cursor-pointer group animate-[fadeIn_0.3s_ease-out]">
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-forest transition-colors">
                {item.id}. {item.title}
              </h3>
              <div className="flex items-center gap-6 mt-4 text-slate-400 text-sm">
                <span className="flex items-center gap-1">{item.date}</span>
                <span className="flex items-center gap-1">阅读 {item.views}</span>
              </div>
            </div>
            <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-xl border border-slate-100">
              <img alt="news" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.img} />
            </div>
          </div>
        ))}
      </div>

      <div ref={paginationRef} className="mt-16 flex justify-center items-center gap-2 pb-6 select-none">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300
            ${currentPage === 1
              ? 'border-slate-100 text-slate-300 cursor-not-allowed'
              : 'border-slate-200 text-slate-500 hover:border-forest hover:text-forest hover:shadow-sm'}`}
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
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[15px] transition-all duration-300
                 ${isActive
                  ? 'bg-forest text-white shadow-md shadow-forest/30 scale-105 border border-transparent'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-forest hover:text-forest hover:bg-forest/5'}`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300
            ${currentPage === totalPages
              ? 'border-slate-100 text-slate-300 cursor-not-allowed'
              : 'border-slate-200 text-slate-500 hover:border-forest hover:text-forest hover:shadow-sm'}`}
        >
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
};