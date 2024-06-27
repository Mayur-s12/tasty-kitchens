import logo from "../../assets/kitchenLogo.svg";
import Button from "../Button";
import Text from "../Text";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerItems}>
        <img className={styles.logo} src={logo} alt='logo' />{" "}
        <Text color='#F7931E' fontStyle='italic' size='20px'>
          Tasty Kitchens
        </Text>
      </div>
      <div className={styles.headerItems}>
        <Text>Home</Text>
        <Text>Cart</Text>
        <Button width='100px' height='35px'>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
