import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { Home } from './pages/Home';
import { Group } from './pages/Group';
import { GroupLanding } from './pages/subpages/GroupLanding';
import { Monan } from './pages/subpages/Monan';
import { Experimental } from './pages/subpages/Experimental';
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
import { Lecture } from './pages/subpages/Lecture';
import { Careers } from './pages/subpages/Careers';
import { ComingOfAge } from './pages/subpages/ComingOfAge';
import { MayFourth } from './pages/subpages/MayFourth';
import { CharitySale } from './pages/subpages/CharitySale';
import { SportsMeeting } from './pages/subpages/SportsMeeting';
import { Anniversary } from './pages/subpages/Anniversary';

const { HashRouter, Routes, Route, Navigate } = ReactRouterDOM as any;

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
  const [registeredUsers, setRegisteredUsers] = useState<{ u: string, p: string }[]>(() => {
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

        {/* Main Content Area with Padding to Avoid Header Overlap */}
        <div className="pt-10"> {/* 添加足够的顶部内边距避免被Header遮挡 */}
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
              <Route path="lecture" element={<Lecture />} />
              <Route path="anniversary" element={<Anniversary />} />
              <Route path="coming-of-age" element={<ComingOfAge />} />
              <Route path="charity-sale" element={<CharitySale />} />
              <Route path="may-fourth" element={<MayFourth />} />
              <Route path="sports-meeting" element={<SportsMeeting />} />
            </Route>

            {/* Admissions Routes */}
            <Route path="/admissions" element={<AdmissionsLayout />}>
              <Route index element={<Navigate to="policy" replace />} />
              <Route path="policy" element={<AdmissionsPolicy />} />
              <Route path="careers" element={<Careers />} />
            </Route>

            {/* Alumni Routes */}
            <Route path="/alumni" element={<AlumniLayout />}>
              <Route index element={<Navigate to="foundation" replace />} />
              <Route path="foundation" element={<Foundation />} />
              <Route path="profiles" element={<AlumniProfiles />} />
              <Route path="events" element={<AlumniEvents />} />
              <Route path="card" element={<AlumniCard />} />
            </Route>

            {/* Education Group Routes */}
            <Route path="/group" element={<Group />}>
              <Route index element={<GroupLanding />} />
              <Route path="monan" element={<Monan />} />
              <Route path="experimental" element={<Experimental />} />
            </Route>
          </Routes>
        </div>

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