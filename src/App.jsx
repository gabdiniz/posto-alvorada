import { Navegacao } from './components/Navegacao/Navegacao';
import { Sobre } from './components/Sobre/Sobre';
import { ComoChegar } from './components/ComoChegar/ComoChegar';
import { Footer } from './components/Footer/Footer';
import { Banner } from './components/Banner/Banner';
import { Servicos } from './components/Servicos/Servicos';
import IrParaInicio from './components/IrParaInicio/IrParaInicio';

function App() {
  return (
    <div>
      <Navegacao />
      <Banner />
      <Sobre />
      <Servicos />
      <ComoChegar />
      <Footer />
      <IrParaInicio />
    </div>
  );
}

export default App;
