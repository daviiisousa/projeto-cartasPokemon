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
        alert("Erro na requisição da API");
      }
      const data = await result.json();
      setCartas(data);
    } catch (error) {
      alert("Erro no servidor: ", error);
    }
  }

  async function deletarCarta(id) {
    try {
      const result = await fetch(
        `https://678d4297f067bf9e24e9cec3.mockapi.io/cartas/${id}`,
        { method: "DELETE" }
      );
      if (!result.ok) {
        alert("Erro na requisição da API");
      }
      // Atualiza a lista de cartas após a exclusão
      setCartas(cartas.filter((carta) => carta.id !== id));
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
              <div key={carta.id} className="carta">
                <h2 className="nomeCarta">{carta.nome}</h2>
                <span className="imgCarta">
                  <img src={ditto} alt="ditto" />
                </span>
                <p>
                  <span className="descricaoCarta">Tipo: </span>
                  {carta.tipo}
                </p>
                <p>
                  <span className="descricaoCarta">Classe:</span> {carta.classe}
                </p>
                <button onClick={() => deletarCarta(carta.id)}>Deletar</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="pAlert">Você não tem cartas</p>
        )}
      </main>
    </>
  );
};
