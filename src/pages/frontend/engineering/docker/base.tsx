// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import '@/pages/frontend/pagescss/htmlbase.css/all.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';

const htmlSkeleton = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>HTML 示例</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>站点标题</h1>
    <nav>
      <a href="/">首页</a>
      <a href="/about">关于</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>最新文章</h2>
      <article>
        <h3>文章标题</h3>
        <p>正文内容……</p>
      </article>
    </section>
  </main>

  <footer>
    <small>&copy; 2024 My Blog</small>
  </footer>
</body>
</html>`;

export default function DockerBase() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>HTML 基础速查表</h1>

     
      <details>
        <summary>点我展开详情</summary>
        <p>这里是隐藏的内容，支持任意 HTML。</p>
      </details>

      <h2>7. 完整页面骨架示例</h2>
      <pre>
        <code className="language-markup">{htmlSkeleton}</code>
      </pre>
    </GlassBox>
  );
}
