import React from 'react';

export const Structure: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-forest rounded-full"></span>
        组织架构图
      </h3>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 mb-12">
        <div className="relative flex flex-col items-center">
          <div className="bg-white border-2 border-forest text-forest px-6 py-3 rounded-lg font-bold shadow-sm relative z-10 hover:bg-forest hover:text-white transition-colors cursor-default">
              中共阳江市第一中学委员会
          </div>
          <div className="w-0.5 h-8 bg-forest/30 -mt-0"></div>
          <div className="relative w-full flex justify-center">
            <div className="absolute top-0 w-[80%] h-0.5 bg-forest/30"></div>
          </div>
          <div className="flex justify-between w-full pt-8">
            {['校行政支部', '高一支部', '高二支部', '高三支部'].map((item) => (
                <div key={item} className="flex flex-col items-center w-1/4">
                    <div className="w-0.5 h-4 bg-forest/30 -mt-8"></div>
                    <div className="bg-white border-2 border-forest text-forest px-4 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-forest hover:text-white transition-colors w-32 text-center">
                        {item}
                    </div>
                </div>
            ))}
          </div>
          <div className="relative w-full flex justify-center mt-12">
            <div className="absolute top-0 w-[40%] h-0.5 bg-forest/30"></div>
          </div>
          <div className="flex justify-center gap-24 w-full pt-8">
            {['教研支部', '后勤支部'].map((item) => (
                <div key={item} className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-forest/30 -mt-8"></div>
                    <div className="bg-white border-2 border-forest text-forest px-4 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-forest hover:text-white transition-colors w-32 text-center">
                        {item}
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-forest rounded-full"></span>
        班子成员
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex gap-4 transition-all hover:shadow-md">
            <div className="w-24 h-32 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                <img alt="张德明" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByx9tmJo1Ptpf6KB8bB2ejH26bajFCqOUcluBc486jAJX4QbnmXKPQk1UCD_2irF9ZwdledJaet-2VgiYlvGJgx9tQBEdfN2l5pEFHrQuWSDv6M5GZ_HVY4-N-H673oG3KI5Z3n7VehvRChHrIm8FPy__lnWOrF5qFJvJ8qJMH-r79ADKl3P3-WdpE2wKcPkvFaljcUicQF4ScSYg3-JswtDsefNSX4icS20HM4ou2vUmSPGlF85EL0hHItKovtNoONoGri8nt9i68"/>
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-lg font-bold text-slate-900">莫介健</h4>
                <p className="text-forest font-bold text-sm mb-2">党委书记</p>
                <p className="text-slate-500 text-xs leading-relaxed">全面负责学校党建工作。主持校党委全面工作。</p>
            </div>
          </div>
           <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex gap-4 transition-all hover:shadow-md">
            <div className="w-24 h-32 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                <img alt="李华" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByx9tmJo1Ptpf6KB8bB2ejH26bajFCqOUcluBc486jAJX4QbnmXKPQk1UCD_2irF9ZwdledJaet-2VgiYlvGJgx9tQBEdfN2l5pEFHrQuWSDv6M5GZ_HVY4-N-H673oG3KI5Z3n7VehvRChHrIm8FPy__lnWOrF5qFJvJ8qJMH-r79ADKl3P3-WdpE2wKcPkvFaljcUicQF4ScSYg3-JswtDsefNSX4icS20HM4ou2vUmSPGlF85EL0hHItKovtNoONoGri8nt9i68"/>
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-lg font-bold text-slate-900">梁峻荣</h4>
                <p className="text-forest font-bold text-sm mb-2">党委副书记、校长</p>
                <p className="text-slate-500 text-xs leading-relaxed">分管党建宣传工作，联系教研支部与高一年级支部。</p>
            </div>
          </div>
      </div>
    </div>
  );
};
