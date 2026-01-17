import React from 'react';

export const Experimental: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-[fadeIn_0.5s_ease-out]">
      {/* Content Header */}
      <div className="p-8 lg:p-10 border-b border-slate-50">
         <h1 className="text-3xl font-black text-slate-900 mb-2 font-serif tracking-tight flex flex-col">
           一中实验学校简介
           <span className="w-16 h-1.5 bg-forest mt-4 rounded-full"></span>
         </h1>
      </div>

      <div className="p-8 lg:p-12">
         {/* Illustration */}
         <div className="mb-10 flex justify-center">
            
               <img 
                 src="../../images/实验学校.jpg" 
                 alt="Illustration" 
                 className="w-90 h-90 object-cover mix-blend-multiply opacity-80"
               />
           
         </div>

         {/* Text Content */}
         <div className="prose prose-lg max-w-none text-slate-600 space-y-6 text-[15px] leading-loose text-justify">
            <p>
              阳江市一中实验学校是依托阳江市第一中学优质教育资源创办的一所高起点、高标准、高质量的公办学校。学校秉承阳江一中“志、爱、勤、礼、洁”的校训精神，坚持素质教育与应试能力并重，致力于培养具有创新精神和实践能力的未来人才。
            </p>
            <p>
              学校位于阳江市中心城区，交通便利，环境幽雅。校园建设对标省一级学校标准，拥有现代化的教学楼、实验楼、图书馆、体育馆等一流设施。学校实行小班化教学，关注每一位学生的个性化成长，引入先进的教育管理模式，为学生提供寄宿制封闭式管理，营造安全、舒适、浓郁的学习氛围。
            </p>
            <p>
              师资方面，一中实验学校由阳江一中派出管理团队和骨干教师领衔，汇聚了一批来自全国各地的优秀中青年教师。学校注重特色课程建设，开设了科技、艺术、体育等丰富多彩的社团活动，让学生在快乐中学习，在探索中成长。
            </p>
         </div>
      </div>
    </div>
  );
};