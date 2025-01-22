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
            Criar carta
          </Link>
          <Link className="link-metade " to={"/cartas"}>
            Cartas
          </Link>
          <Link className="link " to={"/cartas-usuario"}>
            Suas cartas
          </Link>
        </nav>
      </header>
    </>
  );
};
