// src/components/LayoutComponents/Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import '../assets/styles/header.css';
import '../assets/styles/fonts.css';

export const Header: React.FC = () => {
  const [mode, setMode] = useState<'dark' | 'eye'>('dark');
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);

  const toggleDark = () => {
    setMode('dark');
    document.body.className = 'dark-mode';
  };
  const toggleEye = () => {
    setMode('eye');
    document.body.className = 'eye-protection-mode';
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="left-content">
          <NavLink to="/" className="logo">净秋前端指南</NavLink>

          {/* 按钮 1：控制 Header 自己的链接 */}
          <button
            className="header-menu-toggle"
            onClick={() => setHeaderMenuOpen(!headerMenuOpen)}
            aria-label="展开 Header 导航"
          >
            <MenuOutlined />
          </button>

          {/* Header 内导航链接 */}
          <div className={`nav-links ${headerMenuOpen ? 'mobile-open' : ''}`}>
    
            <NavLink 
            to="/app/frontend" 
            className="nav-link dragon-font"
            onClick={() => setHeaderMenuOpen(false)}
            >前端
            </NavLink>
            <NavLink 
            to="/app/harmonyos" 
            className="nav-link dragon-font"
            onClick={() => setHeaderMenuOpen(false)}
            >鸿蒙
            </NavLink>
            <NavLink 
            to="/app/llm"
            className="nav-link dragon-font"
            onClick={() => setHeaderMenuOpen(false)}
            >大模型
            </NavLink>
          </div>
        </div>

        <div className="right-content">
          <button
            className={`mode-toggle-btn ${mode === 'dark' ? 'active' : ''}`}
            onClick={toggleDark}
            title="暗色模式"
          >
            <span className="icon">🌙</span>
          </button>
          <button
            className={`mode-toggle-btn ${mode === 'eye' ? 'active' : ''}`}
            onClick={toggleEye}
            title="护眼模式"
          >
            <span className="icon">🌿</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
