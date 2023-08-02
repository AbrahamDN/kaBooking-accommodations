interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  markup: string;
}

const Markup = ({ markup, className, ...props }: Props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: markup }}
      className={`markup ${className || ""}`}
      {...props}
    />
  );
};
export default Markup;
