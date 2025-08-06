// src/components/GlassBox.tsx
import React from 'react';
import '../assets/styles/Glassbox.css';

type Props = { children: React.ReactNode };
export default function GlassBox({ children }: Props) {
  return <div className="glass-box">{children}
</div>;
}
