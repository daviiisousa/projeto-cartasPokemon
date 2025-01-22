import { Link } from "react-router-dom";
import pokemonFoto from "../../../assets/PokemonLogo.png";
import "./header.css";

export const Header = () => {
  return (
    <>
      <header>
        <img src={pokemonFoto} alt="pokemon logo" />
        <nav>
          <Link className="link principal" to={"/"}>
<<<<<<< HEAD
            criar carta
          </Link>
          <Link className="link" to={"/cartas"}>
            Cartas
          </Link>
          <Link className="link" to={"/cartas-usuario"}>
=======
            Criar carta
          </Link>
          <Link className="link-metade " to={"/cartas"}>
            Cartas
          </Link>
          <Link className="link " to={"/cartas-usuario"}>
>>>>>>> c654a75cc526ab74ef6e3a1534947b40013d4117
            Suas cartas
          </Link>
        </nav>
      </header>
    </>
  );
};
