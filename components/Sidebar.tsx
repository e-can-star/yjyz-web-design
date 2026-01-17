import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { NavItem } from '../types';

const { Link, useLocation } = ReactRouterDOM as any;

interface SidebarProps {
  title: string;
  icon: string;
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ title, icon, items }) => {
  const location = useLocation();

  // Find the "best" active item by finding the longest matching path
  // This prevents '/group' from being active when we are at '/group/monan'
  const activePath = items.reduce((best: string, item: NavItem) => {
    // Check if current location matches item.path (exact or prefix for sub-routes)
    // We treat it as a match if it's exact, or if it starts with path + '/'
    // e.g. /group matches /group
    // e.g. /teaching/news matches /teaching/news/123 (starts with /teaching/news/)
    // but /group does NOT match /group/monan via simple startsWith unless we handle the slash, 
    // because we want /group to be a distinct page from /group/monan.
    
    const isExact = location.pathname === item.path;
    const isSubPath = location.pathname.startsWith(item.path + '/');
    
    const isMatch = isExact || isSubPath;
    
    if (isMatch) {
      // If we have a match, and it's longer (more specific) than our current best, take it
      if (!best || item.path.length > best.length) {
        return item.path;
      }
    }
    return best;
  }, '');

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-32">
        <div className="bg-gradient-to-br from-deep-forest to-forest px-6 py-10 relative overflow-hidden flex flex-col items-center justify-center shadow-md">
          {/* Background Watermark */}
          <div className="absolute -left-4 -bottom-6 opacity-[0.08] pointer-events-none select-none">
            <span className="material-symbols-outlined text-[160px] text-white rotate-12">school</span>
          </div>
          
          <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mb-4 backdrop-blur-md border border-white/20 relative z-10 shadow-inner">
            <span className="material-symbols-outlined text-white text-2xl">{icon}</span>
          </div>
          <h2 className="text-white text-xl font-black tracking-[0.25em] relative z-10 drop-shadow-sm">{title}</h2>
          <div className="w-10 h-[2px] bg-white/30 mt-4 rounded-full relative z-10"></div>
        </div>
        
        <div className="bg-white py-4">
          <nav className="flex flex-col">
            {items.map((item) => {
              const isActive = item.path === activePath;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-5 py-3.5 mx-3 my-1 text-[15px] font-medium transition-all rounded-lg group
                    ${isActive 
                      ? 'bg-deep-forest text-white font-bold shadow-md shadow-deep-forest/20' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-forest'}`}
                >
                  <div className="flex items-center">
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors flex-shrink-0
                       ${isActive ? 'bg-white' : 'bg-slate-300 group-hover:bg-forest'}`}></span>
                    <span>{item.label}</span>
                  </div>
                  <span className={`material-symbols-outlined text-[20px] transition-colors
                     ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-forest'}`}>
                    chevron_right
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
};