import { Route, Routes } from "react-router-dom";
import Detalle from "./componentes/detalle/detalle";
import './componentes/estilo/estilo.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
