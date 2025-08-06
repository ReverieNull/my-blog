// src/page/WelcomePage.tsx
import {Header} from '../components/Header';
import GlassBox from '../components/GlassBox';

export default function WelcomePage() {
  return (
    <>
      <Header />
      <main className="welcome-only">
        <GlassBox>
          {/* 这里直接写你的 Markdown / 图片 / 任何内容 */}
          <h1>欢迎来到我的笔记</h1>
          <p>下面随便放内容、图片、代码……</p>
        </GlassBox>
      </main>
    </>
  );
}
