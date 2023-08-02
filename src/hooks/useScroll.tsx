import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

const useScroll = (
  targetRef?: React.RefObject<HTMLElement>
): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    const targetElement = targetRef?.current || document.documentElement;

    if (targetElement) {
      setScrollPosition({
        x: targetElement.scrollLeft,
        y: targetElement.scrollTop,
      });
    }
  };

  useEffect(() => {
    const targetElement = targetRef?.current || document.documentElement;

    targetElement.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      targetElement.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef]);

  return scrollPosition;
};

export default useScroll;
