//React Router Dom foi a biblioteca utilizada para gerenciamento das rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import JavaScript from "./paginas/JavaScript";

function AppRoutes() {
  
  return (
    <BrowserRouter >
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobremim" element={<SobreMim />}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
        <Route path="/javascript" element={<JavaScript />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
