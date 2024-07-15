//React Router Dom foi a biblioteca utilizada para gerenciamento das rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import JavaScript from "./paginas/JavaScript";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Naruto from "paginas/Naruto";

function AppRoutes() {
  
  return (
    <BrowserRouter >
      <Menu />
      <Routes>
        {/*Rotas aninhadas (rota "pai" e seus "filhos") */}
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path="/sobremim" element={<SobreMim />}/>
          <Route path="/javascript" element={<JavaScript />}/>
        </Route>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
