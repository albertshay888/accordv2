import { useState, useEffect } from 'react';

function useIsInView(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current; // Store ref.current in a variable
    const observer = new IntersectionObserver(entries => {
      setIsVisible(entries[0].isIntersecting);
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref]); // Keep ref in the dependency array

  return isVisible;
}

export default useIsInView;