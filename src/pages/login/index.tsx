import { useState } from "react";
import Loginbanner from "../../assets/loginbanner.png";
import KitchenLogo from "../../assets/kitchenLogo.svg";
import Input from "../../components/Input";
import styles from "./styles.module.scss";
import Button from "../../components/Button";

const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prevState) => ({ ...prevState, userName: e.target.value }));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prevState) => ({ ...prevState, password: e.target.value }));
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginDetails}>
        <form className={styles.loginForm}>
          <img src={KitchenLogo} alt='logo' />
          <h1 className={styles.heading}>Tasty Kitchens</h1>
          <h2 className={styles.login}>Login</h2>
          <Input type='text' onChange={handleUsername} label='USERNAME' />
          <Input type='text' onChange={handlePassword} label='PASSWORD' />
          <Button>Login</Button>
        </form>
      </div>
      <img src={Loginbanner} className={styles.banner} alt='login banner' />
    </div>
  );
};

export default LoginPage;
