// src/FEHTML/BASE/index.tsx
import React from 'react';
import GlassBox from '@/components/GlassBox';
import '../pagescss/htmlbase.css/all.css';

// 可选：引入 Prism 高亮（只需 npm i prismjs）
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-markup';



export default function HTMLAdvance() {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <GlassBox>
      <h1>HTML属性进阶表</h1>
      <div>
<table>
<thead>
<tr><th>标签/属性</th><th>一句话讲解</th><th>代码示例</th><th>常见坑 & 提示</th></tr>
</thead>
<tbody>
<tr><td>&lt;picture&gt;</td><td>艺术指导响应图</td><td>&lt;picture&gt;&lt;source media="(min-width:600px)" srcset="big.webp"&gt;&lt;img src="small.jpg"&gt;&lt;/picture&gt;</td><td>不写 media → 浏览器永远选第一张 source</td></tr>
<tr><td>&lt;input type="date"&gt;</td><td>原生日期选择</td><td>&lt;input type="date" min="2025-01-01"&gt;</td><td>样式不可自定义，老 IE 回退 text</td></tr>
<tr><td>&lt;canvas&gt;</td><td>位图画布</td><td>&lt;canvas id="c" width="300" height="150"&gt;&lt;/canvas&gt;</td><td>不写宽高 → 默认 300×150，高清屏模糊</td></tr>
<tr><td>&lt;video&gt;</td><td>原生视频</td><td>&lt;video controls poster="cover.jpg" playsinline&gt;&lt;source src="a.mp4"&gt;&lt;/video&gt;</td><td>iOS 必须 playsinline，否则全屏</td></tr>
<tr><td>&lt;template&gt;</td><td>惰性模板</td><td>&lt;template id="card"&gt;内容&lt;/template&gt;</td><td>内部 img 不会预加载</td></tr>
<tr><td>&lt;slot&gt;</td><td>Web Components 占位</td><td>&lt;slot name="title"&gt;&lt;/slot&gt;</td><td>无默认内容 → 空节点</td></tr>
<tr><td>localStorage</td><td>永久本地存储</td><td>localStorage.setItem('k','v')</td><td>5 MB 超限抛 QuotaExceededError</td></tr>
<tr><td>Service Worker</td><td>浏览器后台代理</td><td>navigator.serviceWorker.register('/sw.js')</td><td>HTTPS 才允许注册</td></tr>
<tr><td>Shadow DOM</td><td>样式隔离</td><td>elem.attachShadow(mode:'open')</td><td>mode:closed 调试困难</td></tr>
<tr><td>Web Components</td><td>自定义元素</td><td>customElements.define('my-card', MyCard)</td><td>标签名必须含连字符</td></tr>
</tbody>
</table>
</div>
    </GlassBox>
  );
}
