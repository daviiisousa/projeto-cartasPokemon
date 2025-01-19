import { useState } from "react";
import { Header } from "../../components/layout/Header/header";

import './home.css'
import { BtnCriar } from "../../components/butoes/btnCriar/btnCriar";

export const Home = () => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [classe, setClasse] = useState("");

  async function alimentarApi() {
    const payload = {
      nome,
      classe,
      tipo,
    };

    try {
      const result = await fetch("https://678d4297f067bf9e24e9cec3.mockapi.io/cartas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!result.ok) {
        throw new Error("Erro ao enviar os dados para a API");
      }

      const data = await result.json();
      console.log("Sucesso:", data);

      alert('carta criada')

      // Limpa os campos após o envio
      setNome("");
      setTipo("");
      setClasse("");
    } catch (error) {
      console.error("Erro:", error.message);
    }
  }

  return (
    <>
      <Header />
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alimentarApi();
          }}
        >
          <div className="divForm">
              <label htmlFor="nome">Nome:</label>
              <input
                placeholder="digite o nome do seu pokemon"
                type="text"
                name="nome"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
          </div>
          <div className="divForm">
              <label htmlFor="tipo">Tipo:</label>
              <input
                placeholder="Digite o tipo do seu pokemon"
                type="text"
                name="tipo"
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              />
          </div>
          <div className="divForm">
              <label htmlFor="classe">Classe:</label>
              <input
                placeholder="digite a classe do seu pokemon"
                type="text"
                name="classe"
                id="classe"
                value={classe}
                onChange={(e) => setClasse(e.target.value)}
                required
              />
          </div>
          <BtnCriar>CRIAR</BtnCriar>
        </form>
      </main>
    </>
  );
};
