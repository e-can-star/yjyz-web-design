import React from 'react';

const LeaderCard = ({ name, title, img }: {name: string, title: string, img: string}) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] cursor-default flex flex-col items-center">
    <div className="aspect-[3/4] w-full overflow-hidden rounded-[12px] mb-6 border border-slate-100 bg-slate-50">
      <img alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={img} />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-1">{name}</h3>
    <p className="text-slate-500 text-sm font-medium">{title}</p>
  </div>
);

export const Leadership: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 lg:p-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight font-serif">学校领导</h1>
        <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">SCHOOL LEADERSHIP</p>
        <div className="w-20 h-1 bg-forest mx-auto mt-6 rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
        <LeaderCard name="梁峻荣" title="[ 党委副书记、校长 ]" img="../../images/liangjunrong.png" />
        <LeaderCard name="莫介健" title="[ 学校党委书记 ]" img="../../images/mojiejian.jpg" />
      </div>
      
      <div className="h-px bg-slate-100 w-full mb-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <LeaderCard name="冯锦霞" title="[ 副校长 ]" img="../../images/foujinxia.png" />
        <LeaderCard name="黄广才" title="[ 副校长 ]" img="../../images/huangguangcai.jpg" />
        <LeaderCard name="叶秀荡" title="[ 党委委员、副校长 ]" img="../../images/yexiudang.jpg" />
      </div>
    </div>
  );
};