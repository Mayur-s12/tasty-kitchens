import { useState } from "react";
import Loginbanner from "../../assets/loginbanner.png";
import KitchenLogo from "../../assets/kitchenLogo.svg";
import Input from "../../components/Input";
import styles from "./styles.module.scss";
import Button from "../../components/Button";
import { BASE_URL } from "../../utils/helper";
import { endpoints } from "../../utils/endpoints";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prevState) => ({ ...prevState, username: e.target.value }));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prevState) => ({ ...prevState, password: e.target.value }));
  };

  const onSubmitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `${BASE_URL}${endpoints.login}`;
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.error_msg);
    if (response.ok === true) {
      localStorage.setItem("token", data.jwt_token);
      setLoginError("");
      navigate("/");
    } else {
      setLoginError(data.error_msg);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginDetails}>
        <form className={styles.loginForm} onSubmit={onSubmitLoginForm}>
          <img src={KitchenLogo} alt='logo' />
          <h1 className={styles.heading}>Tasty Kitchens</h1>
          <h2 className={styles.login}>Login</h2>
          <Input type='text' onChange={handleUsername} label='USERNAME' />
          <Input type='text' onChange={handlePassword} label='PASSWORD' />
          <Button type='submit'>Login</Button>
          <p className={styles.loginError}>{loginError}</p>
        </form>
      </div>
      <img src={Loginbanner} className={styles.banner} alt='login banner' />
    </div>
  );
};

export default LoginPage;
