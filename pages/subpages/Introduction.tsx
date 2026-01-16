import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <div className="space-y-12 animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 lg:p-12 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tight font-serif">一中简介</h1>
        <p className="text-forest font-bold tracking-[0.3em] uppercase text-xs mb-6">SCHOOL INTRODUCTION</p>
        <div className="w-16 h-1 bg-forest mx-auto rounded-full"></div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Hero Image */}
        <div className="p-3 pb-0">
          <div className="rounded-lg overflow-hidden relative aspect-[21/9]">
            <img
              alt="阳江一中校园全景"
              className="w-full h-full object-cover"
              src="../../images/banner-1.jpg"
            />
          </div>
        </div>

        <div className="p-8 lg:p-12">
          {/* Intro Text */}
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6 text-[15px] leading-loose text-justify mb-12">
            <p>
              阳江市第一中学（简称“阳江一中”）的历史可追溯至1909年，初名“阳江县立中学堂”，是广东省首批省重点中学、广东省国家级示范性普通高中。学校座落于阳江市城南新区金山路，校园占地面积26.9万平方米，建筑规模宏大，文化底蕴深厚，被誉为“漠江之滨的一颗璀璨明珠”。
            </p>
            <p>
              跨越百年沧桑，阳江一中始终秉承“崇德、博学、求实、创新”的校训。近年来，学校迎来了新一轮的跨越式发展，2021年至2024年间，校园进行了大规模的设施升级改造，新建了高标准数字化实验楼、多功能艺术体育馆以及现代化学生公寓，教学环境焕然一新，全面迈入智慧校园新时代。
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 py-10 px-6 mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
              {[
                { val: '116', label: '载办学历史' },
                { val: '26.9万', label: '占地面积(M²)' },
                { val: '60+', label: '高中教学班' },
                { val: '92.6%', label: '本科上线率' }
              ].map((item, i) => (
                <div key={i} className="text-center flex flex-col items-center justify-center p-2">
                  <div className="text-3xl lg:text-4xl font-black text-forest mb-3 tracking-tight">{item.val}</div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Sections */}
          <div className="space-y-12 mb-12">
            {/* Faculty */}
            <section>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
                <span className="w-1.5 h-6 bg-forest rounded-full"></span>
                雄厚的师资力量
              </h3>
              <p className="text-slate-600 text-[15px] leading-loose text-justify">
                学校师资力量雄厚，现有教职工529人，其中特级教师、高级教师比例居全市首位。近年来，学校培养出一大批在国家和省级教学竞赛中获奖的杰出中青年骨干教师，形成了一支学术造诣深、教学水平高、充满活力的教育团队。通过实施“名师工程”和“青蓝工程”，学校建立起了一支梯队合理、素质精良的专业队伍，为学生的全面发展提供了坚实的保障。
              </p>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 mb-4">
                <span className="w-1.5 h-6 bg-forest rounded-full"></span>
                骄人的育人成绩
              </h3>
              <p className="text-slate-600 text-[15px] leading-loose text-justify">
                建校百余年来，阳江一中英才辈出，校友遍布全球。其中最具代表性的杰出校友包括中国科学院院士、著名大气科学家曾庆存等。他们从这里起步，走向科学的高峰，为祖国和人类的进步做出了卓越贡献。学校连续多年高考成绩位居全省前列，92.6%以上的本科上线率展示了卓越的教学质量，每年向清华、北大等知名学府输送大批优秀人才。
              </p>
            </section>
          </div>

          {/* Bottom Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-md">
            <img
              src="../../images/校园俯瞰图.jpg"
              alt="Campus Building"
              className="w-full h-64 lg:h-80 object-cover"
            />
          </div>

          {/* Footer Text */}
          <p className="text-slate-600 text-[15px] leading-loose text-justify">
            展望未来，阳江一中将继续站在时代潮头，积极探索新课改背景下的育人模式，坚持内涵发展与特色发展并重，努力把学校建设成为具有岭南特色、国内一流、世界视野的现代名校。
          </p>

        </div>
      </div>
    </div>
  );
};