import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  className?: string;
}

const Button: React.FC<IProps> = ({
  children,
  type,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <button
      style={{ width: width, height: height }}
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
