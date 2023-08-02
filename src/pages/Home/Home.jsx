import { ComoChegar } from "../../components/ComoChegar/ComoChegar";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sobre } from "../../components/Sobre/Sobre";
import "./Home.css";

export function Home() {

  return (
    <>
      <div className="div-maior-home d-flex flex-column justify-content-between">
        <Header />
        <Sobre />
        <ComoChegar />
        <Footer />
      </div>
    </>
  );
};