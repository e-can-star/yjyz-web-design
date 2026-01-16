import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onOpenAuth: () => void;
  isLoggedIn: boolean;
  username?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth, isLoggedIn, username }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: '首页', path: '/' },
    {
      label: '走进一中',
      path: '/profile',
      subItems: [
        { label: '一中简介', path: '/profile/intro' },
        { label: '学校领导', path: '/profile/leadership' },
        { label: '历任主要领导', path: '/profile/past-leaders' },
        { label: '历史沿革', path: '/profile/history' },
        { label: '学校四馆', path: '/profile/halls' },
        { label: '校园风光', path: '/profile/scenery' },
        { label: '学校宣传片', path: '/profile/video' },
      ]
    },
    {
      label: '党建引领',
      path: '/party',
      subItems: [
        { label: '党建动态', path: '/party/news' },
        { label: '组织架构', path: '/party/structure' },
      ]
    },
    {
      label: '教学教研',
      path: '/teaching',
      subItems: [
        { label: '教研动态', path: '/teaching/news' },
        { label: '名师工作室', path: '/teaching/studio' },
        { label: '教研成果展', path: '/teaching/achievements' },
      ]
    },
    {
      label: '校园活动',
      path: '/activities',
      subItems: [
        { label: '一中大讲坛', path: '/activities/lecture' },
        { label: '校庆活动', path: '/activities/anniversary' },
        { label: '成人礼', path: '/activities/coming-of-age' },
        { label: '三五义卖', path: '/activities/charity-sale' },
        { label: '五四合唱', path: '/activities/may-fourth' },
        { label: '校运会', path: '/activities/sports-meeting' },
      ]
    },
    {
      label: '招生招聘',
      path: '/admissions',
      subItems: [
        { label: '招生专栏', path: '/admissions/policy' },
        { label: '教师招聘', path: '/admissions/careers' },
      ]
    },
    {
      label: '校友之窗',
      path: '/alumni',
      subItems: [
        { label: '基金会', path: '/alumni/foundation' },
        { label: '校友风采', path: '/alumni/profiles' },
        { label: '校友活动', path: '/alumni/events' },
        { label: '校友卡', path: '/alumni/card' },
      ]
    },
    { label: '教育集团', path: '/group' },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.nav-item-group')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent, item: any) => {
    if (item.subItems) {
      e.preventDefault();
      // Toggle dropdown on click
      setActiveDropdown(activeDropdown === item.label ? null : item.label);
    } else {
      setActiveDropdown(null);
      navigate(item.path);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 frosted-glass shadow-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src="/images/logo3.png"
            alt="阳江一中"
            className="h-18 w-auto lg:h-20 transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = location.pathname.startsWith(item.path) || (item.path === '/' && location.pathname === '/');
            const isDropdownOpen = activeDropdown === item.label;

            return (
              <div key={item.label} className="relative nav-item-group px-1">
                <button
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-3 py-2 text-[15px] font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 bg-transparent border-none
                    ${isActive || isDropdownOpen
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'}`}
                >
                  {item.label}
                  {/* Arrow only appears when active/clicked as requested */}
                  {isDropdownOpen && item.subItems && (
                    <span className="material-symbols-outlined text-sm animate-[fadeIn_0.2s_ease-out]">expand_more</span>
                  )}
                </button>

                {/* Dropdown */}
                {item.subItems && isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-[fadeInUp_0.2s_ease-out] w-48 z-50">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100 py-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-6 py-3 text-sm font-bold text-slate-700 hover:text-forest hover:bg-forest/5 transition-colors border-l-2 border-transparent hover:border-forest"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Auth Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAuth}
            className={`px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm
              ${isLoggedIn
                ? 'bg-deep-forest text-white ring-2 ring-white/20'
                : 'bg-white text-deep-forest hover:bg-warm-white'}`}
          >
            <span className="material-symbols-outlined text-[22px] font-medium">account_circle</span>
            {isLoggedIn ? username || '已登录' : '注册/登录'}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-deep-forest border-t border-white/10 p-4 shadow-xl max-h-[80vh] overflow-y-auto">
          {navLinks.map((item) => (
            <div key={item.label} className="border-b border-white/5 py-2">
              <button
                onClick={(e) => {
                  if (item.subItems) {
                    setActiveDropdown(activeDropdown === item.label ? null : item.label);
                  } else {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="w-full text-left py-2 text-white font-bold text-lg flex justify-between items-center"
              >
                {item.label}
                {item.subItems && (
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`}>expand_more</span>
                )}
              </button>

              {/* Mobile Submenu */}
              {item.subItems && activeDropdown === item.label && (
                <div className="pl-4 flex flex-col gap-2 mt-1 pb-2 animate-[fadeIn_0.3s]">
                  {item.subItems.map(sub => (
                    <Link
                      key={sub.label}
                      to={sub.path}
                      className="text-white/70 text-sm py-1 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};