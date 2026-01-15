import React from 'react';

const HistoryItem = ({ year, title, desc }: {year: string, title: string, desc: string}) => (
  <div className="relative pl-12 pb-12 group last:pb-0">
    {/* Line */}
    <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-slate-200 group-last:bg-transparent">
        <div className="absolute top-0 left-0 w-full h-full bg-forest origin-top scale-y-0 transition-transform duration-700 group-hover:scale-y-100"></div>
    </div>
    {/* Node */}
    <div className="absolute left-[8.5px] top-1 w-3.5 h-3.5 bg-white border-[3px] border-forest rounded-full z-10"></div>
    
    <div className="bg-white p-6 rounded-[12px] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <span className="text-4xl font-bold text-forest block mb-2">{year}</span>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const History: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 lg:p-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight font-serif">历史沿革</h1>
        <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">HISTORICAL EVOLUTION</p>
        <div className="w-20 h-1 bg-forest mx-auto mt-6 rounded-full"></div>
      </header>

      <div className="max-w-3xl mx-auto">
        <HistoryItem year="1909" title="阳江直隶州官立中学堂创立" desc="阳江一中的前身，设立在东门街旧游击署（即今阳江市南恩学校所在地）。" />
        <HistoryItem year="1914" title="改称“阳江县官立中学校”" desc="从1914年至1922年10年间学校共招收学生293人。随着“五四”新文化运动和马克思主义的传播，特别是中国共产党的成立，青年学生有了新的思想武装和历史使命，涌现了一大批抛头颅洒热血的革命战士。" />
        <HistoryItem year="1923" title="改称“阳江县立中学”" desc="从1931年到1949年，县中师生经历了14年抗日战争和4年解放战争。学校曾遭受日军二次的狂轰滥炸，为了坚持办学，三次搬迁，历尽艰辛，弦歌不辍。" />
        <HistoryItem year="1950" title="改称“阳江县第一中学”" desc="1976年“文革”结束，学校迎来了教育教学复兴和发展的新时期，规模和教学质量不断提高，1980年至1987年，共向大学和中专输送了2020人，其中19人考上清华、北大，初中应届毕业生的升学率也保持在90%以上。" />
        <HistoryItem year="1988" title="建市更名" desc="阳江撤县建市，学校随之更名为“阳江市第一中学”，升格为市重点中学，并被省教育厅纳入省重点中学管理行列。1995年被评为广东省一级学校，2007年被评为广东省国家级示范性普通高中。" />
        <HistoryItem year="2011" title="新校区落成启用" desc="学校整体搬迁到城南新区。新校区占地面积广阔，设施现代化，极大地改善了办学条件。" />
        <div className="relative pl-12">
            <div className="absolute left-[8.5px] top-1 w-3.5 h-3.5 bg-forest border-[3px] border-forest rounded-full z-10"></div>
             <div className="bg-forest/5 p-6 rounded-[12px] border border-forest/20 shadow-sm">
                <span className="text-4xl font-bold text-forest block mb-2">2026</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">跨越式高质量发展</h3>
                <p className="text-slate-600 text-sm leading-relaxed">学校秉承“志、爱、勤、礼、洁”的校训，坚持“以人为本，发掘潜能，让每位师生都得到充分发展”的办学理念，教育教学质量逐年攀升，比肩省内名校。</p>
            </div>
        </div>
      </div>
    </div>
  );
};