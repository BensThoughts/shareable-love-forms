import { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

type ScrollDirection = 'up' | 'down';

export default function useScrollDirection() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const {y} = useWindowScroll();
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');

  const listener = (e: any) => {
    setScrollDirection(y > lastScrollTop ? 'down' : 'up');
    setLastScrollTop(y);
  }

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    }    
  });

  return { scrollDirection, y };
}