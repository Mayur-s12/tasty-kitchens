import { HtmlHTMLAttributes } from "react";

interface IProps extends HtmlHTMLAttributes<HTMLHeadElement> {
  color?: string;
  size?: string;
  weight?: string;
  fontFamily?: string;
  fontStyle?: string;
  className?: string;
}

const Text: React.FC<IProps> = ({
  size = "16px",
  color = "black",
  fontFamily = "DM Sans",
  weight = "700",
  fontStyle,
  className,
  children,
}) => {
  return (
    <h1
      style={{
        color: color,
        fontSize: size,
        fontFamily: fontFamily,
        fontWeight: weight,
        fontStyle: fontStyle,
      }}
      className={className}
    >
      {children}
    </h1>
  );
};

export default Text;
