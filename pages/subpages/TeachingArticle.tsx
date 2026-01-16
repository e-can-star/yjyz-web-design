import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export const TeachingArticle: React.FC = () => {
   const { id } = useParams();

   // Scroll to top when loaded
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [id]);

   return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-[fadeIn_0.5s_ease-out]">
         <div className="p-8 lg:p-12">
            {/* Article Header */}
            <header className="text-center mb-10 pb-8 border-b border-slate-100">
               <h1 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight font-serif">
                  聚力新程 筑梦杏坛 || 我校2025年新教师跟岗培训总结
               </h1>
               <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 text-xs lg:text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                     <span className="material-symbols-outlined text-base">calendar_today</span>
                     发布时间: 2025-08-30
                  </span>
                  <span className="flex items-center gap-1.5">
                     <span className="material-symbols-outlined text-base">domain</span>
                     来源: 教研室
                  </span>
                  <span className="flex items-center gap-1.5">
                     <span className="material-symbols-outlined text-base">visibility</span>
                     阅读次数: 6138
                  </span>
               </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-slate max-w-none prose-lg text-slate-700 leading-loose text-justify">
               <p className="indent-8">
                  为进一步提升新入职教师的教学能力、育人素养与班级管理水平，确保新学期教育教学工作高质量开展，我校于2025年8月正式启动了新教师系列培训活动。通过系列精心设计的培育环节，推动新教师们快速熟稔校园教育教学生态与执教规范，加速融入学校深厚的教育文化血脉。
               </p>

               <figure className="my-10">
                  <div className="bg-slate-50 p-2 border border-slate-100 rounded-xl">
                     <img
                        src="../../images/gengangpeixun.jpg"
                        alt="研讨会现场"
                        className="w-full rounded-lg shadow-sm"
                     />
                  </div>
                  <figcaption className="text-center text-sm text-slate-400 mt-3 font-bold tracking-widest uppercase">入职跟岗培训会议照片</figcaption>
               </figure>

               <p className="indent-8">
                  8月17日晚，我校于高三阶梯教室举行2025年新入职教师跟岗培训会议。此次培训会议旨在为新入职教师筑牢专业根基，淬炼教育初心——既以系统培育夯实其专业素养，更以理念引领树牢立德树人之魂。
               </p>

               <p className="indent-8">
                  本次会议得到学校领导的高度重视，学校教研室、高三年级管理团队成员等悉数出席。在主持人的引导下，新入职教师与结对的导师、班主任依次登台完成会面。双方在互动中相互认识、增进了解，并共同合影留念，为后续的跟岗学习与协同育人奠定良好基础。
               </p>

               <p className="indent-8">
                  本次培训以高三年级为核心实践阵地，深度依托“导师制”结对帮扶机制。会议明确要求新教师需严格落实三项核心任务：一是高质量完成听评课记录，深度研磨课堂教学细节；二是精心撰写教学设计，体现新课标理念与原创性；三是系统分析德育典型案例，积累育人实践经验。这些安排与要求，既是对新教师学习成果的检验，更是对其专业成长轨迹的见证。
               </p>
            </article>
         </div>

         {/* Article Footer Nav */}
         <div className="bg-slate-50 p-6 lg:p-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
            <Link to="/teaching/news" className="flex items-center gap-2 text-slate-500 hover:text-forest transition-colors max-w-[45%] truncate">
               <span className="material-symbols-outlined text-lg">arrow_back</span>
               <span>上一篇:智慧赋能 共研成长 || 我校开展国家中小学智慧教育平台全域应用学习教研</span>
            </Link>
         </div>
      </div>
   );
};