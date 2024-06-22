import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
