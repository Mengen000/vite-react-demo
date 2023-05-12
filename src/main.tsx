import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css' //样式初始化在最前面
import '@/assets/style/global.scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
