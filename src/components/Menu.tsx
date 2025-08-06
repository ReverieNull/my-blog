// src/components/Menu.tsx（/frontend 路由对应的页面）
import React from 'react';
import { Outlet } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu as AntMenu } from 'antd';
import { items } from '../config/menuItems';
import '../assets/styles/Menu.css';

const AppMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
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
  );
};

export default AppMenu;
