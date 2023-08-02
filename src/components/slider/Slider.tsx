import "./Slider.styles.css";
import { default as cn } from "classnames";
import { useRef, useState } from "react";
import SliderArrow from "./SliderArrow";
import { SliderProps } from "./Slider.types.ts";
import useScroll from "../../hooks/useScroll";

const Slider = ({ children, className }: SliderProps) => {
  const [scrollCount] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const scroll = useScroll(sliderRef);

  const showPrevBtn = scroll.x > 16;
  // const showNextBtn = scroll.x !== 1;

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

      <div ref={sliderRef} className="slides scrollbar-hidden">
        {children}
      </div>

      <SliderArrow onClick={nextScroll} />
    </div>
  );
};
export default Slider;

// TODO: Add error handling / check that children have 'slide' class
// TODO: Implement working arrow scrolling
// TODO: Programmatically show Right SliderArrow
