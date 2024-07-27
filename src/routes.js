//React Router Dom foi a biblioteca utilizada para gerenciamento das rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import JavaScript from "./paginas/JavaScript";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  
  return (
    <BrowserRouter >
      <ScrollToTop />
      <Menu />
      <Routes>
        {/*Rotas aninhadas (rota "pai" e seus "filhos") */}
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path="/sobremim" element={<SobreMim />}/>
          <Route path="/javascript" element={<JavaScript />}/>
        </Route>
        {/*:id significa que vai pegar o que o usuário degitar na url e atribuir ao objeto id*/}
        <Route path="/posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
