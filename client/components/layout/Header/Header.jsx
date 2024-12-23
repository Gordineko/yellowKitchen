import logo from "../../../assets/image/logo.png";
import prof from "../../../assets/image/person.png";
import cart from "../../../assets/image/cart.png";
import burger from "../../../assets/image/burger.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ style }) => {
  const router = useRouter();

  const navigate = ({ link }) => {
    router.push(`${link}`);
  };
  return (
    <header className="header" style={style}>
      <div className="header__container">
        <div className="header__logo" onClick={() => navigate({ link: "/" })}>
          <Image src={logo} alt="404" />
        </div>
        <div className="header__content">
          <div className="header__content__login">
            <Image src={prof} alt="404" />
            <span className="header__content__txt">Log in</span>
          </div>
          <div className="header__content__cart">
            <Image src={cart} alt="404" />
            <span className="header__content__txt">0</span>
          </div>
          <div className="header__content__burger">
            <Image src={burger} alt="404" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
