import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { Home } from './pages/Home';
import { ProfileLayout } from './pages/ProfileLayout';
import { PartyLayout } from './pages/PartyLayout';
import { ActivitiesLayout } from './pages/ActivitiesLayout';
import { AlumniLayout } from './pages/AlumniLayout';
import { TeachingLayout } from './pages/TeachingLayout';
import { AdmissionsLayout } from './pages/AdmissionsLayout';
import { Introduction } from './pages/subpages/Introduction';
import { Leadership } from './pages/subpages/Leadership';
import { History } from './pages/subpages/History';
import { Halls } from './pages/subpages/Halls';
import { Scenery } from './pages/subpages/Scenery';
import { Video } from './pages/subpages/Video';
import { News } from './pages/subpages/News';
import { Structure } from './pages/subpages/Structure';
import { PastLeaders } from './pages/subpages/PastLeaders';
import { Foundation } from './pages/subpages/Foundation';
import { AlumniCard } from './pages/subpages/AlumniCard';
import { AlumniProfiles } from './pages/subpages/AlumniProfiles';
import { AlumniEvents } from './pages/subpages/AlumniEvents';
import { AdmissionsPolicy } from './pages/subpages/AdmissionsPolicy';
import { TeachingNews } from './pages/subpages/TeachingNews';
import { TeachingArticle } from './pages/subpages/TeachingArticle';

// Placeholder components for other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-slate-50 pt-24">
    <div className="text-6xl text-slate-200 mb-4 material-symbols-outlined">construction</div>
    <h1 className="text-2xl font-bold text-slate-400">{title}</h1>
    <p className="text-slate-400 mt-2">Page content under development</p>
  </div>
);

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  // Store registered users (initialize from localStorage or default test user)
  const [registeredUsers, setRegisteredUsers] = useState<{u: string, p: string}[]>(() => {
    const saved = localStorage.getItem('school_users');
    return saved ? JSON.parse(saved) : [{ u: 'webdesign', p: '123456' }];
  });

  const handleLoginSuccess = (username: string) => {
    setUser(username);
  };

  const handleRegister = (u: string, p: string) => {
    // Update state and localStorage
    const newUser = { u, p };
    const updatedUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('school_users', JSON.stringify(updatedUsers));
  };

  const handleVerifyLogin = (u: string, p: string) => {
    // Check against all registered users
    return registeredUsers.some(user => user.u === u && user.p === p);
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header 
          onOpenAuth={() => setIsAuthOpen(true)} 
          isLoggedIn={!!user} 
          username={user || undefined}
        />
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Navigate to="intro" replace />} />
            <Route path="intro" element={<Introduction />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="past-leaders" element={<PastLeaders />} />
            <Route path="history" element={<History />} />
            <Route path="halls" element={<Halls />} />
            <Route path="scenery" element={<Scenery />} />
            <Route path="video" element={<Video />} />
          </Route>

          <Route path="/party" element={<PartyLayout />}>
             <Route index element={<Navigate to="news" replace />} />
             <Route path="news" element={<News />} />
             <Route path="structure" element={<Structure />} />
          </Route>
          
          {/* Teaching Routes */}
          <Route path="/teaching" element={<TeachingLayout />}>
            <Route index element={<Navigate to="news" replace />} />
            <Route path="news" element={<TeachingNews />} />
            <Route path="news/:id" element={<TeachingArticle />} />
            <Route path="studio" element={<Placeholder title="名师工作室" />} />
            <Route path="achievements" element={<Placeholder title="教研成果展" />} />
          </Route>
          
          {/* Activities Routes */}
          <Route path="/activities" element={<ActivitiesLayout />}>
             <Route index element={<Navigate to="lecture" replace />} />
             <Route path="lecture" element={<Placeholder title="一中大讲坛" />} />
             <Route path="anniversary" element={<Placeholder title="校庆活动" />} />
             <Route path="coming-of-age" element={<Placeholder title="成人礼" />} />
             <Route path="charity-sale" element={<Placeholder title="三五义卖" />} />
             <Route path="may-fourth" element={<Placeholder title="五四合唱" />} />
             <Route path="sports-meeting" element={<Placeholder title="校运会" />} />
          </Route>
          
          {/* Admissions Routes */}
          <Route path="/admissions" element={<AdmissionsLayout />}>
             <Route index element={<Navigate to="policy" replace />} />
             <Route path="policy" element={<AdmissionsPolicy />} />
             <Route path="careers" element={<Placeholder title="教师招聘" />} />
          </Route>
          
          {/* Alumni Routes */}
          <Route path="/alumni" element={<AlumniLayout />}>
             <Route index element={<Navigate to="foundation" replace />} />
             <Route path="foundation" element={<Foundation />} />
             <Route path="profiles" element={<AlumniProfiles />} />
             <Route path="events" element={<AlumniEvents />} />
             <Route path="card" element={<AlumniCard />} />
          </Route>

          <Route path="/group" element={<Placeholder title="教育集团" />} />
        </Routes>

        <Footer />
        
        <AuthModal 
          isOpen={isAuthOpen} 
          onClose={() => setIsAuthOpen(false)}
          onLoginSuccess={handleLoginSuccess}
          onRegister={handleRegister}
          onVerifyLogin={handleVerifyLogin}
        />
      </div>
    </HashRouter>
  );
}

export default App;