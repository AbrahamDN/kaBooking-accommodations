export type SliderProps = {
  className?: string;
  children: React.ReactElement[];
};

export type SliderArrowProps = React.HTMLAttributes<HTMLButtonElement> & {
  left?: boolean;
};
