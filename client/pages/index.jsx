import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import Form from "../components/layout/Main/Form";
import Info from "../components/layout/Main/Info";
import Preview from "../components/layout/Main/Preview";
import Products from "../components/layout/Main/Products";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/dishes");
  const dishes = await res.json();

  return {
    props: {
      dishes,
    },
  };
}

const HomePage = ({ dishes }) => {
  const { ref: productsRef, inView: productsInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [isLoading, setIsLoading] = useState(true); // Начальное состояние — лоадинг
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Снимаем лоадинг через 2 секунды
    }, 2000);

    return () => clearTimeout(timer); // Очищаем таймер при размонтировании
  }, []);

  const navigate = ({ link }) => {
    router.push(`${link}`);
  };

  if (isLoading) {
    // Экран лоадинга
    return (
      <div className="loader__container">
        <span className="loader">yellowkitchen</span>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>
          Лучший ресторан в городе — Вкусные блюда на заказ yellowKitchen
        </title>
        <meta
          name="description"
          content="Добро пожаловать в yellowKitchen! Мы предлагаем вкусные блюда на заказ с доставкой по городу. Узнайте меню и закажите прямо сейчас!"
        />
        <meta
          name="keywords"
          content="ресторан, доставка еды, yellowKitchen, вкусные блюда, пицца, суши, ужин на заказ"
        />
        <meta
          property="og:title"
          content="Лучший ресторан в городе yellowKitchen — Вкусные блюда на заказ"
        />
        <meta
          property="og:description"
          content="Ищете вкусную еду на заказ? Мы предлагаем лучшие блюда с доставкой по городу. Заказывайте прямо на нашем сайте!"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <main className="main">
        <div className="container">
          <Preview navigate={navigate} />
          <div className="marquee">
            <div className="text">
              Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan
              cheese.
            </div>
            <div className="text">
              Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan
              cheese.
            </div>
          </div>

          <Products
            ref={productsRef}
            productsInView={productsInView}
            dishes={dishes}
            navigate={navigate}
          />
        </div>
        <Form ref={formRef} formInView={formInView} />
        <div className="container">
          <Info ref={infoRef} infoInView={infoInView} />
        </div>
      </main>
      <Footer />
    </>
  );
};

const styles = {
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #ccc",
    borderTop: "5px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

// CSS для спиннера
const globalStyle = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default HomePage;
