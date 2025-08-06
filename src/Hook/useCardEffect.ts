import { useEffect, RefObject } from 'react';

export function useCardEffect(
  cardRef: RefObject<HTMLDivElement | null>,
  contentRef: RefObject<HTMLDivElement | null>,
  buttonRef: RefObject<HTMLButtonElement | null>
) {
  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const button = buttonRef.current;
    if (!card || !content || !button) return;

    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const rotationFactor =
      parseFloat(card.dataset.rotationFactor || '2');

    /* ---------- 3D 鼠标跟随 ---------- */
    if (!isTouchDevice) {
      const onMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (rotationFactor * (x - centerX)) / centerX;
        const rotateX = (-rotationFactor * (y - centerY)) / centerY;

        content.style.transform = `
          rotateX(${rotateX}deg) rotateY(${rotateY}deg)
        `;
        card.style.setProperty('--x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--y', `${(y / rect.height) * 100}%`);
      };

      const onMouseLeave = () => {
        content.style.transform = 'rotateX(0) rotateY(0)';
        content.style.transition = 'transform 0.5s ease';
        setTimeout(() => (content.style.transition = ''), 500);
      };

      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);

      return () => {
        card.removeEventListener('mousemove', onMouseMove);
        card.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [cardRef, contentRef, buttonRef]);

  /* ---------- 按钮水波纹 ---------- */
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const onClick = (e: MouseEvent) => {
      e.stopPropagation();
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      button.appendChild(ripple);

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      ripple.classList.add('active');

      setTimeout(() => ripple.remove(), 500);
    };

    button.addEventListener('click', onClick);
    return () => button.removeEventListener('click', onClick);
  }, [buttonRef]);
}
