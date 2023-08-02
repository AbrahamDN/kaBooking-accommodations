import { SliderArrowProps } from "./Slider.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { default as cn } from "classnames";

const SliderArrow = ({ className, left, ...props }: SliderArrowProps) => (
  <button
    className={cn("slider-arrow", left && "slider-arrow--left", className)}
    {...props}
  >
    {left ? <ChevronLeft /> : <ChevronRight />}
  </button>
);

export default SliderArrow;
