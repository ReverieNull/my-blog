// src/components/LayoutComponents/Layout.tsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../assets/styles/Layout.css';
import '../assets/styles/Menu.css';
import '../assets/styles/Content.css';

const Layout: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', drawerOpen);
  }, [drawerOpen]);

  return (
    <div className="main-layout">
      <Header />

      <button
        className="layout-menu-toggle"
        onClick={() => setDrawerOpen(true)}
        aria-label="展开侧边菜单"
      >
        <MenuOutlined />
      </button>

      {/* 主内容区：渲染一级路由页面(Menu/HMMenu/LLMMenu/Welcome...) */}
      <main className="content">
        <Outlet />
      </main>

      <Drawer
        placement="left"
        width="100vw"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        closable={false}
        bodyStyle={{ padding: 0 }}
        className="mobile-drawer"
      >
        {/* 移动端抽屉如果需要全局导航，可放 AppMenu；否则留空 */}
      </Drawer>
    </div>
  );
};

export default Layout;
