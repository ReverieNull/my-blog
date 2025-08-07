// src/components/Menu.tsx（/frontend 路由对应的页面）
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu as AntMenu ,Drawer} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { items } from '../config/menuItems';
import '../assets/styles/Menu.css';

const AppMenu: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
     if (window.innerWidth <= 768) setDrawerOpen(false);
    
  };



  return (
    <>
    <div className="menu-layout">
      <aside className="menu-wrapper">
        <div className="menu-scroll-container">
          <AntMenu
            onClick={onClick}
            style={{ width: 200 }}
            mode="inline"
            items={items}
            inlineIndent={24}
          />
        </div>
      </aside>

      {/* 右侧内容：渲染 /frontend/xxx 子路由 */}
      <main className="menu-content">
        <Outlet />
      </main>
    </div>
    {/* 3. 手机端专属：汉堡按钮 + 抽屉 */}
      <button
        className="hamburger-btn"
        aria-label="Toggle menu"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuOutlined style={{ fontSize: 20 }} />
      </button>

      <Drawer
        className="mobile-drawer"
        placement="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        closable={false}
      >
  
        <div className="menu-inner" >
              <AntMenu
      onClick={onClick}
      mode="inline"
      items={items}
      inlineIndent={24}
      style={{ width: '100%', border: 'none', background: 'transparent' }}
    />
        </div>
      </Drawer>
      </>
  );
};

export default AppMenu;
