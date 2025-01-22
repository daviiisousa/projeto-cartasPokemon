<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./src/pages/home/home"
import { Cartas } from "./src/pages/cartas/cartas"
import { CartasUsuarios } from "./src/pages/cartasUsuario/cartasUsuario"

export const RoutesApp =  () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cartas" element={<Cartas />} />
                <Route path="/cartas-usuario" element={<CartasUsuarios />} />
            </Routes>
        </BrowserRouter>
    )
}
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/pages/home/home";
import { Cartas } from "./src/pages/cartas/cartas";
import { CartasUsuarios } from "./src/components/layout/Header/cartasUsuario/cartasUsuario";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartas" element={<Cartas />} />
        <Route path="/cartas-usuario" element={<CartasUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
};
>>>>>>> c654a75cc526ab74ef6e3a1534947b40013d4117
