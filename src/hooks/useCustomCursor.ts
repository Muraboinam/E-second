import { useEffect } from 'react';

export const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-dot';
    
    const cursorCircle = document.createElement('div');
    cursorCircle.className = 'cursor-circle';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorCircle);
    
    const updateCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update cursor position with slight delay
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      
      // Update circle position with more delay for trailing effect
      setTimeout(() => {
        cursorCircle.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }, 50);
    };
    
    const growCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorCircle.style.width = '60px';
      cursorCircle.style.height = '60px';
      cursorCircle.style.opacity = '0.5';
    };
    
    const shrinkCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorCircle.style.width = '40px';
      cursorCircle.style.height = '40px';
      cursorCircle.style.opacity = '1';
    };
    
    // Add listeners
    document.addEventListener('mousemove', updateCursor);
    
    // Add hover effect for clickable elements
    const clickables = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', growCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', growCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
      document.body.removeChild(cursor);
      document.body.removeChild(cursorCircle);
    };
  }, []);
};