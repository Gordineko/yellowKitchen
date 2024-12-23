import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import Form from "../components/layout/Main/Form";
import Info from "../components/layout/Main/Info";
import Preview from "../components/layout/Main/Preview";
import Products from "../components/layout/Main/Products";
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

const HomePage = ({ dishes }) => {
  const router = useRouter();

  const navigate = ({ link }) => {
    // Навигация на страницу /about
    router.push(`${link}`);
  };
  return (
    <>
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
