import { useEffect, useState } from "react";
import { Header } from "../Header/header";

import "./CartasUsuarios.css";

export const CartasUsuarios = () => {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    async function fetchCartas() {
      try {
        const result = await fetch(
          "https://678d4297f067bf9e24e9cec3.mockapi.io/cartas"
        );
        if (!result.ok) {
          throw new Error("Erro ao buscar as cartas");
        }
        const data = await result.json();
        setCartas(data);
      } catch (error) {
        console.error("Erro:", error.message);
      }
    }

    fetchCartas();
  }, []);

  return (
    <>
      <Header />
      <main>
     
        <div className="cartas-container">
          {cartas.map((carta) => (
            <div className="carta" key={carta.id}>
              <img
                src={carta.imagem}
                alt={carta.nome}
                className="carta-imagem"
              />
              <h2>{carta.nome}</h2>
              <p>
                <strong>Tipo:</strong> {carta.tipo}
              </p>
              <p>
                <strong>Classe:</strong> {carta.classe}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};