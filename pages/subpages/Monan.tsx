import React from 'react';

export const Monan: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-[fadeIn_0.5s_ease-out]">
      {/* Content Header */}
      <div className="p-8 lg:p-10 border-b border-slate-50">
        <h1 className="text-3xl font-black text-slate-900 mb-2 font-serif tracking-tight flex flex-col">
          漠南中学简介
          <span className="w-16 h-1.5 bg-forest mt-4 rounded-full"></span>
        </h1>
      </div>

      <div className="p-8 lg:p-12">
        {/* Illustration */}
        <div className="mb-10 flex justify-center">
          
            <img
              src="../../images/monan.jpg"
              alt="Illustration"
              className="w-90 h-90  object-cover mix-blend-multiply opacity-80"
            />
          
        </div>

        {/* Text Content */}
        <div className="prose prose-lg max-w-none text-slate-600 space-y-6 text-[15px] leading-loose text-justify">
          <p>
            漠南中学创建于1942年，1955年易名为阳江县第五中学。1958年秋，学校发展成为一所完全中学，易名为平冈中学。1961年秋，学校首届高中毕业生参加高考的有74人，其中考上大学的有67人，升学率居阳江之冠。1985年秋，复名为漠南中学。学校已有83年办学历史。2023年漠南中学加入阳江市第一中学教育集团，成为阳江市第一中学教育集团成员校，与阳江市第一中学资源共享、文化共融、品牌共创。
          </p>
          <p>
            学校拥有一支有理想信念、有道德情操、有扎实学识、有仁爱之心的高水平教师队伍，现有教职工255人，专职教师192人，其中高级职称74人，占比38.54%。其中南粤优秀教师2人，阳江市优秀教师23人。
          </p>
        </div>
      </div>
    </div>
  );
};