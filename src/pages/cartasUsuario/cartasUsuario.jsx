import { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header/header";
import "./cartasUsuario.css";

import ditto from "../../assets/pokemon/ditto.jpeg";

export const CartasUsuarios = () => {
  const [cartas, setCartas] = useState([]);

  async function getCartas() {
    try {
      const result = await fetch(
        "https://678d4297f067bf9e24e9cec3.mockapi.io/cartas"
      );
      if (!result.ok) {
        alert("Erro na requisao da api");
      }
      const data = await result.json();
      setCartas(data);
    } catch (error) {
      alert("Erro no servidor: ", error);
    }
  }
  useEffect(() => {
    getCartas();
  }, []);

  return (
    <>
      <Header />
      <main className="cartasUsuario">
        {cartas.length ? (
          <div className="cartas">
            {cartas.map((carta) => (
              <>
                <div className="carta">
                  <h2 className="nomeCarta">{carta.nome}</h2>
                  <span className="imgCarta">
                    <img src={ditto} alt="ditto" />
                  </span>
                  <p>
                    <span className="descricaoCarta">Tipo: </span>
                    {carta.tipo}
                  </p>
                  <p>
                    <span className="descricaoCarta">Classe:</span>{" "}
                    {carta.classe}{" "}
                  </p>
                </div>
              </>
            ))}
          </div>
        ) : (
          <p className="pAlert">Voce nao tem cartas</p>
        )}
      </main>
    </>
  );
};
