import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const AdmissionsLayout: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: '招生专栏', path: '/admissions/policy' },
    { label: '教师招聘', path: '/admissions/careers' },
  ];

  const currentItem = navItems.find(item => location.pathname.includes(item.path)) || navItems[0];

  return (
    <div className="flex-grow pt-24 pb-20 bg-[#FAF9F7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Dynamic Breadcrumb */}
        <div className="flex items-center gap-3 text-[15px] text-slate-500 mb-8 select-none animate-[fadeIn_0.5s_ease-out]">
          <Link to="/" className="hover:text-forest transition-colors">首页</Link>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="cursor-default">招生招聘</span>
          <span className="material-symbols-outlined text-sm text-slate-300">chevron_right</span>
          <span className="text-slate-900 font-bold">{currentItem.label}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Area */}
          <div className="flex flex-col gap-6 w-full lg:w-72 flex-shrink-0">
            <Sidebar title="招生招聘" icon="person_add" items={navItems} />
          </div>

          <article className="flex-grow w-full">
            <Outlet />
          </article>
        </div>
      </div>
    </div>
  );
};