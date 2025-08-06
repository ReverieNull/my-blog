import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import '../assets/styles/Menu.css'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
        key: 'list1',
        label: 'LLM',
        className:'menu-llm',
        children: [
          { key: 'list11', label: '大模型基础' },
          { key: 'list12', label: '大模型进阶' },
          { key: 'list13', label: '大模型面试' },
        ],
},
];

const APP: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <aside className="menu-wrapper">
        <div className="menu-scroll-container">
  <Menu
      onClick={onClick}
      style={{ width: 200 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      inlineIndent={24}
      className='menu-scroll-container'
  />
  </div>
</aside>
  );
};

export default APP;