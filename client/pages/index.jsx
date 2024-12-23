import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import Form from "../components/layout/Main/Form";
import Info from "../components/layout/Main/Info";
import Preview from "../components/layout/Main/Preview";
import Products from "../components/layout/Main/Products";
import { useRouter } from "next/router";
import Head from "next/head";

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
  const router = useRouter();

  const navigate = ({ link }) => {
    // Навигация на страницу /about
    router.push(`${link}`);
  };
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
          <div class="marquee">
            <div class="text">
              Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan
              cheese.
            </div>
            <div class="text">
              Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan
              cheese.
            </div>
          </div>

          <Products dishes={dishes} navigate={navigate} />
        </div>
        <Form />
        <div className="container">
          <Info />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
