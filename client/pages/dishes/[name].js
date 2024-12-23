import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

export async function getServerSideProps(context) {
  const { name } = context.query; // Извлекаем параметр 'id' из query

  if (!name) {
    return {
      notFound: true, // Если id отсутствует, возвращаем ошибку 404
    };
  }

  // Пример запроса к API или базе данных, чтобы получить список всех товаров
  const res = await fetch("http://localhost:3001/dishes");
  const dishes = await res.json(); // Получаем все блюда

  // Фильтруем товар по id
  const dish = dishes.find((d) => d.name === name); // Предполагаем, что у каждого блюда есть свой id

  // Если товар не найден, возвращаем ошибку 404
  if (!dish) {
    return {
      notFound: true,
    };
  }

  // Возвращаем данные в компонент страницы
  return {
    props: {
      dish,
    },
  };
}

const product = ({ dish }) => {
  return (
    <>
      <Head>
        <title>{dish.name} — Заказать с доставкой | Ваш ресторан</title>
        <meta name="description" content={dish.description} />
        <meta
          name="keywords"
          content={` ${dish.name}, доставка еды, ресторан`}
        />
        <meta property="og:title" content={dish.name} />
        <meta property="og:description" content={dish.description} />
        <meta property="og:image" content={dish.image} />

        <meta property="og:type" content="product" />
      </Head>
      ;
      <Header style={{ height: "10vh" }} />
      <main className="main" style={{ height: "55vh" }}>
        <div className="container">
          <div className="product">
            <Image src={dish.image} alt="404" width={296} height={184} />
            <div className="product__content">
              <h2 className="product__item__name">{dish.name}</h2>
              <p className="product__item__price">{dish.price}</p>
              <p className="product__item__description">{dish.description}</p>
              <button className="dishes__sort__list__btn">Buy</button>
            </div>
          </div>
        </div>
      </main>
      <Footer style={{ height: "45vh" }} />
    </>
  );
};

export default product;
