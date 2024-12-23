import DishesList from "../components/layout/Dishes/DishesList";
import Sort from "../components/layout/Dishes/Sort";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/dishes");
  const dishes = await res.json();

  return {
    props: {
      dishes,
    },
  };
}

const products = (dishes) => {
  const router = useRouter();

  const navigate = ({ link }) => {
    // Навигация на страницу /about
    router.push(`${link}`);
  };
  return (
    <>
      <Header />
      <main className="main">
        <div className="dishes__container">
          <Sort />
          <DishesList navigate={navigate} dishes={dishes} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default products;
