import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const ActivitiesLayout: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { label: '一中大讲坛', path: '/activities/lecture' },
    { label: '校庆活动', path: '/activities/anniversary' },
    { label: '成人礼', path: '/activities/coming-of-age' },
    { label: '三五义卖', path: '/activities/charity-sale' },
    { label: '五四合唱', path: '/activities/may-fourth' },
    { label: '校运会', path: '/activities/sports-meeting' },
  ];
  
  const currentItem = navItems.find(item => location.pathname.includes(item.path)) || navItems[0];

  return (
    <div className="flex-grow pt-24 pb-20 bg-[#FAF9F7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Dynamic Breadcrumb */}
        <div className="flex items-center gap-3 text-[15px] text-slate-500 mb-8 select-none animate-[fadeIn_0.5s_ease-out]">
          <Link to="/" className="hover:text-forest transition-colors">首页</Link>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="cursor-default">校园活动</span>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="text-slate-900 font-bold">{currentItem.label}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <Sidebar title="校园活动" icon="event" items={navItems} />
          <article className="flex-grow w-full">
             <Outlet />
          </article>
        </div>
      </div>
    </div>
  );
};