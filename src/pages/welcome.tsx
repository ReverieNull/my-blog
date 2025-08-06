// src/pages/WelcomePage.tsx
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // 引入样式文件

export default function Welcome() {
  return (
    <>
      <main className="frontend-welcome">
        <div className="own-box">
          <h1 className="welcome-title">欢迎来到我的前端指南</h1>
          <div className="welcome-buttons">
            <Link to="/frontend" className="welcome-btn">前端</Link>
            <Link to="/harmonyos" className="welcome-btn">鸿蒙</Link>
            <Link to="/LLM" className="welcome-btn">大模型</Link>
          </div>
        </div>
      </main>
    </>
  );
}
