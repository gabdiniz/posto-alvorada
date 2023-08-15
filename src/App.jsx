import { Header } from './components/Header/Header';
import { Sobre } from './components/Sobre/Sobre';
import { ComoChegar } from './components/ComoChegar/ComoChegar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Servicos } from './components/Servicos/Servicos';
import IrParaInicio from './components/IrParaInicio/IrParaInicio';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Sobre />
      <Servicos />
      <ComoChegar />
      <Footer />
      <IrParaInicio />
    </div>
  );
}

export default App;
