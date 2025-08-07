// src/components/LayoutComponents/Layout.tsx
import React  from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import '../assets/styles/Layout.css';
import '../assets/styles/Menu.css';
import '../assets/styles/content.css';

const Layout: React.FC = () => {

  return (
    <div className="main-layout">
      <Header />

    
      <main className="content">
        <Outlet />
      </main>


    </div>
  );
};

export default Layout;
