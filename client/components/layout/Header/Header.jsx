import logo from "../../../assets/image/logo.png";
import prof from "../../../assets/image/person.png";
import cart from "../../../assets/image/cart.png";
import burger from "../../../assets/image/burger.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Auth from "../modals/Auth";
import { useEffect, useState } from "react";
import Burger from "../modals/Burger";
import Curt from "../modals/Curt";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeDishesFromSessionStorage,
  addDish,
} from "../../../redux/store";

const Header = ({ style }) => {
  const [isCurtOpen, setIsCurtOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [activeClass, setActiveClass] = useState(false); // Состояние для класса

  const dispatch = useDispatch();
  const storageData = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(initializeDishesFromSessionStorage());

    // Добавляем класс active
    setActiveClass(true);
    // Через секунду убираем класс active
    const timer = setTimeout(() => {
      setActiveClass(false);
    }, 1000);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, [dispatch]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const router = useRouter();

  const navigate = ({ link }) => {
    router.push(`${link}`);
  };

  return (
    <>
      <header className="header" style={style}>
        <div className="header__container">
          <div className="header__logo" onClick={() => navigate({ link: "/" })}>
            <Image
              src={logo}
              alt="404"
              className={activeClass ? "active" : ""} // Добавляем класс active
            />
          </div>
          <div className="header__content">
            <div className="header__content__login" onClick={() => openModal()}>
              <Image src={prof} alt="404" />
              <span className="header__content__txt">Log in</span>
            </div>
            <div
              className="header__content__cart"
              onClick={() => {
                setIsCurtOpen(true);
              }}
            >
              <Image class={activeClass ? "active" : ""} src={cart} alt="404" />
              <span className="header__content__txt">{storageData.length}</span>
            </div>
            <div
              className="header__content__burger"
              onClick={() => {
                setIsBurgerOpen(!isBurgerOpen);
              }}
            >
              <div className={isBurgerOpen ? "burger burger--open" : "burger"}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Auth isOpen={isModalOpen} onClose={closeModal} />
      <Burger isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
      <Curt isCurtOpen={isCurtOpen} setIsCurtOpen={setIsCurtOpen} />
    </>
  );
};

export default Header;
