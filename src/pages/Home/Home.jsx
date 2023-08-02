import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./Home.css";

export function Home() {

  return (
    <>
      <div className="div-maior-home d-flex flex-column justify-content-between">
        <Header />
        <Footer />
      </div>
    </>
  );
};