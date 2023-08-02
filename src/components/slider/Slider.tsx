import "./Slider.styles.css";
import { default as cn } from "classnames";
import { useScroll } from "@react-hooks-library/core";
import { useRef, useState } from "react";
import SliderArrow from "./SliderArrow";
import { SliderProps } from "./Slider.types";

const Slider = ({ children, className }: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const [scrollCount] = useState(0);

  const showPrevBtn = scroll.x > 0.06;
  const showNextBtn = scroll.x !== 1;

  useScroll(
    sliderRef,
    ({ scrollX, scrollY }: { scrollX: number; scrollY: number }) =>
      setScroll({ x: scrollX, y: scrollY })
  );

  const handleScroll = () => {
    sliderRef.current?.children[scrollCount].scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };
  const prevScroll = () => {
    handleScroll();
  };
  const nextScroll = () => {
    handleScroll();
  };

  if (!children) return;
  return (
    <div className={cn("slider", className)}>
      {showPrevBtn && <SliderArrow left onClick={prevScroll} />}
      {showNextBtn && <SliderArrow onClick={nextScroll} />}

      <div ref={sliderRef} className="slides scrollbar-hidden">
        {children}
      </div>
    </div>
  );
};
export default Slider;

// TODO: Add error handling / check that children have 'slide' class
// TODO: Implement working arrow scrolling
// TODO: Fix useScroll type issue / Use a different package
