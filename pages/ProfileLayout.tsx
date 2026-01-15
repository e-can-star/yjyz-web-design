import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const ProfileLayout: React.FC = () => {
  const location = useLocation();
  
  const profileNavItems = [
    { label: '一中简介', path: '/profile/intro' },
    { label: '学校领导', path: '/profile/leadership' },
    { label: '历任主要领导', path: '/profile/past-leaders' },
    { label: '历史沿革', path: '/profile/history' },
    { label: '学校四馆', path: '/profile/halls' },
    { label: '校园风光', path: '/profile/scenery' },
    { label: '学校宣传片', path: '/profile/video' },
  ];

  // Find the active item based on current path
  const currentItem = profileNavItems.find(item => location.pathname.includes(item.path)) || profileNavItems[0];

  return (
    <div className="flex-grow pt-24 pb-20 bg-[#FAF9F7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Dynamic Breadcrumb */}
        <div className="flex items-center gap-3 text-[15px] text-slate-500 mb-8 select-none animate-[fadeIn_0.5s_ease-out]">
          <Link to="/" className="hover:text-forest transition-colors">首页</Link>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="cursor-default">走进一中</span>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="text-slate-900 font-bold">{currentItem.label}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <Sidebar title="走进一中" icon="menu_book" items={profileNavItems} />
          <article className="flex-grow w-full">
             <Outlet />
          </article>
        </div>
      </div>
    </div>
  );
};