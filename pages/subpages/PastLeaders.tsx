import React from 'react';

export const PastLeaders: React.FC = () => {
  const leaders = [
    { name: '梁观喜', term: '1909年-1910年' },
    { name: '林振环', term: '1911年-1913年' },
    { name: '卓宏章', term: '1913年-1917年' },
    { name: '谭鸿', term: '1917年-1922年' },
    { name: '彭德禄', term: '1938年-1939年' },
    { name: '梁启亮', term: '1980年-1984年' },
    { name: '张奋忠', term: '1984年-1994年' },
    { name: '李明礼', term: '1994年-2000年' },
    { name: '梁贵谦', term: '2000年-2004年' },
    { name: '梁晓', term: '2004年-2012年' },
    { name: '陈恕', term: '2012年-2021年' },
    { name: '梁峻荣', term: '2022年-' },
  ];

  // Helper to chunk array for 2-column layout in one row
  const rows = [];
  for (let i = 0; i < leaders.length; i += 2) {
    rows.push(leaders.slice(i, i + 2));
  }

  const notableLeaders = [
    { name: '梁启亮校长', img: '../../images/梁启亮校长.jpg' },
    { name: '张奋忠校长', img: '../../images/张奋忠校长.jpg' },
    { name: '陈恕校长', img: '../../images/chenshu.png' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 lg:p-16 animate-[fadeIn_0.5s_ease-out]">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight font-serif">历任主要领导</h1>
        <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">PAST SCHOOL LEADERS</p>
        <div className="w-20 h-1 bg-forest mx-auto mt-6 rounded-full"></div>
      </header>

      {/* Leaders Table */}
      <div className="w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm mb-20">
        {/* Table Header */}
        <div className="grid grid-cols-4 bg-[#014d3a] text-white font-bold text-center py-5 text-sm md:text-base tracking-wide">
          <div className="border-r border-white/10">姓名</div>
          <div className="border-r border-white/10 md:border-r-0">任职时间</div>
          <div className="hidden md:block border-r border-white/10">姓名</div>
          <div className="hidden md:block">任职时间</div>
        </div>

        {/* Table Body */}
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            {/* Desktop View: Single row with 4 columns */}
            <div className={`hidden md:grid grid-cols-4 text-center items-center text-slate-700 font-medium ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
              <div className="py-5 border-r border-slate-100/50">{row[0].name}</div>
              <div className="py-5 text-slate-500 border-r border-slate-100/50">{row[0].term}</div>
              <div className="py-5 border-r border-slate-100/50">{row[1]?.name || ''}</div>
              <div className="py-5 text-slate-500">{row[1]?.term || ''}</div>
            </div>

            {/* Mobile View: Stacked rows (2 columns) */}
            <div className="md:hidden">
              <div className={`grid grid-cols-2 text-center py-4 border-b border-slate-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
                <div className="font-bold text-slate-800">{row[0].name}</div>
                <div className="text-slate-500 text-sm">{row[0].term}</div>
              </div>
              {row[1] && (
                <div className={`grid grid-cols-2 text-center py-4 border-b border-slate-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
                  <div className="font-bold text-slate-800">{row[1].name}</div>
                  <div className="text-slate-500 text-sm">{row[1].term}</div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Notable Leaders Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {notableLeaders.map((leader, i) => (
          <div key={i} className="flex flex-col group cursor-pointer">
            <div className="bg-[#f9fafb] aspect-[3/4] rounded-t-xl border border-slate-100 border-b-0 overflow-hidden relative">
              {leader.img ? (
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                // Fallback to icon if no image provided
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent opacity-60"></div>
                  <span className={`material-symbols-outlined text-[80px] text-slate-400 group-hover:scale-110 transition-transform duration-500 ${leader.style}`}>
                    {leader.icon}
                  </span>
                </>
              )}
            </div>
            <div className="bg-[#026c52] text-white py-4 text-center font-bold text-lg rounded-b-xl shadow-md transition-colors group-hover:bg-[#014d3a]">
              {leader.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};