import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<IProps> = ({ label, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input className={styles.input} {...props} />
    </div>
  );
};

export default Input;
