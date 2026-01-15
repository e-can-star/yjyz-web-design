import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthView } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (username: string) => void;
  onRegister: (u: string, p: string) => void;
  onVerifyLogin: (u: string, p: string) => boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  onLoginSuccess, 
  onRegister, 
  onVerifyLogin 
}) => {
  const [view, setView] = useState<AuthView>(AuthView.LOGIN);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [registerError, setRegisterError] = useState(''); // State for registration errors
  const [loginError, setLoginError] = useState(''); // State for login errors
  
  const navigate = useNavigate();
  
  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setView(AuthView.LOGIN);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setShowPassword(false);
      setShowConfirmPassword(false);
      setRegisterError('');
      setLoginError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[440px] bg-[#FAF9F7] dark:bg-[#202226] rounded-[12px] shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        
        {/* Close Button (Hidden in Success View) */}
        {view !== AuthView.SUCCESS && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors z-10"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}

        {/* View: Login */}
        {view === AuthView.LOGIN && (
          <div className="flex flex-col">
            <div className="pt-10 pb-4 flex flex-col items-center gap-3">
              <div className="text-forest size-10 flex items-center justify-center bg-forest/10 rounded-full">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h1 className="text-[#0c1c18] dark:text-white text-xl font-bold tracking-tight">欢迎登录阳江一中</h1>
            </div>

            {/* Login Error Banner */}
            {loginError && (
              <div className="mx-10 mt-2 p-3 bg-[#fff1f0] border border-[#ffccc7] rounded-[8px] flex items-center gap-2 animate-[fadeIn_0.2s_ease-out]">
                <span className="material-symbols-outlined text-[#ff4d4f] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                <span className="text-[#ff4d4f] text-sm font-medium">{loginError}</span>
              </div>
            )}

            <div className="px-10 mt-4">
              <div className="flex border-b border-[#e2e2e2] dark:border-gray-700">
                <button className="flex-1 py-4 text-sm font-bold border-b-2 border-forest text-forest transition-all">登录</button>
                <button 
                  onClick={() => {
                    setView(AuthView.REGISTER);
                    setRegisterError('');
                    setLoginError('');
                  }}
                  className="flex-1 py-4 text-sm font-medium text-gray-500 hover:text-[#0c1c18] dark:hover:text-white transition-all"
                >
                  注册
                </button>
              </div>
            </div>

            <div className="px-10 pt-8 pb-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">用户名</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (loginError) setLoginError('');
                  }}
                  className={`w-full h-12 px-4 rounded-lg border bg-white dark:bg-gray-800 text-[#0c1c18] dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all ${
                    loginError ? 'border-[#ff4d4f] focus:border-[#ff4d4f] focus:ring-[#ff4d4f]/20' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="请输入您的账号" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">密码</label>
                <div className="relative group flex items-center">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (loginError) setLoginError('');
                    }}
                    className={`w-full h-12 px-4 rounded-lg border bg-white dark:bg-gray-800 text-[#0c1c18] dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all pr-12 ${
                      loginError ? 'border-[#ff4d4f] focus:border-[#ff4d4f] focus:ring-[#ff4d4f]/20' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="请输入您的密码" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-400 hover:text-forest transition-colors flex items-center"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="size-4 rounded border-gray-300 text-forest focus:ring-forest" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-forest transition-colors">记住我</span>
                </label>
                <a href="#" className="text-sm text-forest hover:underline font-medium">忘记密码?</a>
              </div>

              <button 
                onClick={() => {
                   if(onVerifyLogin(username, password)) {
                     // Login Success Logic
                     setView(AuthView.SUCCESS);
                     setTimeout(() => {
                       onLoginSuccess(username);
                       onClose();
                       navigate('/'); // Redirect to home page
                     }, 1500); // 1.5s delay to show success animation
                   } else {
                     setLoginError('登录失败，用户名或密码错误');
                   }
                }}
                className="w-full h-12 bg-forest hover:bg-[#027a5c] text-white font-bold rounded-lg shadow-lg shadow-forest/20 transition-all active:scale-[0.98]"
              >
                登录
              </button>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900/50 py-5 text-center border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                还没有账号？
                <button 
                  onClick={() => {
                    setView(AuthView.REGISTER);
                    setRegisterError('');
                    setLoginError('');
                  }} 
                  className="text-forest font-bold hover:underline ml-1"
                >
                  立即注册
                </button>
              </p>
            </div>
          </div>
        )}

        {/* View: Success */}
        {view === AuthView.SUCCESS && (
          <div className="flex flex-col items-center justify-center py-16 px-10 min-h-[400px]">
            <div className="w-24 h-24 bg-[#e6f7ef] rounded-full flex items-center justify-center mb-6 animate-[scaleIn_0.3s_ease-out]">
              <span className="material-symbols-outlined text-[#028d6a] text-6xl font-bold">check</span>
            </div>
            <h2 className="text-3xl font-bold text-[#0c1c18] mb-4 tracking-tight animate-[fadeInUp_0.4s_ease-out]">登录成功！</h2>
            <p className="text-slate-500 text-lg mb-8 animate-[fadeInUp_0.5s_ease-out]">正在为您跳转至首页...</p>
            <div className="flex gap-3">
              <div className="w-3 h-3 bg-[#028d6a] rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-[#028d6a]/60 rounded-full animate-bounce [animation-delay:0.1s]"></div>
              <div className="w-3 h-3 bg-[#028d6a]/30 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            </div>
          </div>
        )}

        {/* View: Register */}
        {view === AuthView.REGISTER && (
          <div className="flex flex-col">
            <div className="pt-10 pb-6 flex flex-col items-center gap-3">
              <div className="text-forest size-10 flex items-center justify-center bg-forest/10 rounded-full">
                <span className="material-symbols-outlined text-3xl">person_add</span>
              </div>
              <h1 className="text-[#0c1c18] dark:text-white text-xl font-bold tracking-tight">欢迎加入阳江一中</h1>
            </div>

            <div className="px-10">
              <div className="flex border-b border-[#e2e2e2] dark:border-gray-700">
                <button 
                  onClick={() => {
                    setView(AuthView.LOGIN);
                    setRegisterError('');
                    setLoginError('');
                  }}
                  className="flex-1 py-4 text-sm font-medium text-gray-500 hover:text-[#0c1c18] dark:hover:text-white transition-all"
                >
                  登录
                </button>
                <button className="flex-1 py-4 text-sm font-bold border-b-2 border-forest text-forest transition-all">注册</button>
              </div>
            </div>

            <div className="px-10 pt-8 pb-10 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">用户名</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (registerError) setRegisterError('');
                  }}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-[#0c1c18] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all"
                  placeholder="请输入您的用户名" 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">设置密码</label>
                <div className="relative group flex items-center">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (registerError) setRegisterError('');
                    }}
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-[#0c1c18] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all pr-12" 
                    placeholder="请输入您的密码" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-400 hover:text-forest transition-colors flex items-center"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">确认密码</label>
                <div className="relative group flex items-center">
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (registerError) setRegisterError('');
                    }}
                    className={`w-full h-12 px-4 rounded-lg border bg-white text-[#0c1c18] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all pr-12 ${registerError ? 'border-[#ff4d4f]' : 'border-gray-300'}`}
                    placeholder="请再次输入密码" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 text-gray-400 hover:text-forest transition-colors flex items-center"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showConfirmPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>
                
                {/* Error Message for Password Mismatch */}
                {registerError && (
                  <div className="flex items-center gap-1 mt-1 animate-[fadeIn_0.2s_ease-out]">
                     <span className="material-symbols-outlined text-[#ff4d4f] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                     <span className="text-[#ff4d4f] text-xs">{registerError}</span>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => {
                  setRegisterError('');
                  
                  if (!username.trim() || !password) {
                    alert('请输入用户名和密码');
                    return;
                  }
                  
                  if (password !== confirmPassword) {
                    setRegisterError('两次输入的密码不一致');
                    return;
                  }

                  // 1. Alert the registration info
                  alert(`请确认您的注册信息：\n\n用户名：${username}\n密码：${password}`);

                  // 2. Open Mail Client
                  const subject = "注册信息";
                  const body = `用户名：${username}\n密码：${password}`;
                  const mailtoLink = `mailto:enchan_0314@qq.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = mailtoLink;

                  // 3. Save User to App State (Persisted in localStorage)
                  onRegister(username, password);

                  // 4. Clear form and move to login view
                  setUsername('');
                  setPassword('');
                  setConfirmPassword('');
                  setView(AuthView.LOGIN);
                }}
                className="w-full h-12 mt-4 bg-forest hover:bg-[#027a5c] text-white font-bold rounded-lg shadow-lg shadow-forest/20 transition-all active:scale-[0.98]"
              >
                立即注册
              </button>
            </div>
            
            <div className="bg-gray-50 py-5 text-center border-t border-gray-100">
              <p className="text-sm text-gray-600">
                已有账号？
                <button 
                  onClick={() => {
                    setView(AuthView.LOGIN);
                    setRegisterError('');
                    setLoginError('');
                  }}
                  className="text-forest font-bold hover:underline ml-1"
                >
                  登录账号
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};