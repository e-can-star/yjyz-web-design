import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 引入jQuery
import $ from 'jquery';

// 将jQuery挂载到window对象上（方便全局使用和调试）
declare global {
  interface Window {
    $: typeof $;
    jQuery: typeof $;
  }
}
window.$ = $;
window.jQuery = $;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);