import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollToElement = useCallback((targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, []);

  const handleScroll = useCallback((e, targetId) => {
    e.preventDefault();
    scrollToElement(targetId);
  }, [scrollToElement]);

  return { scrollToElement, handleScroll };
};
