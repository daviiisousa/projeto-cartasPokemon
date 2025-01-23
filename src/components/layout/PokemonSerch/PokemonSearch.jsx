import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonSearch.css";

const tipoTraduzido = {
  electric: "elétrico",
  fire: "fogo",
  water: "água",
  grass: "grama",
  psychic: "psíquico",
  normal: "normal",
  bug: "inseto",
  poison: "veneno",
  fairy: "fada",
  fighting: "luta",
  dragon: "dragão",
  ghost: "fantasma",
  dark: "sombrio",
  steel: "aço",
  ice: "gelo",
  rock: "pedra",
  ground: "terra",
  flying: "voador",
};

const habilidadeTraduzida = {
  "static": "estático",
  "lightning-rod": "vara de raio",
  "overgrow": "crescimento excessivo",
  "blaze": "chama",
  "torrent": "torrent",
  "shield-dust": "poeira de escudo",
  "keen-eye": "olho de águia",
  // Adicione mais habilidades conforme necessário
};

const PesquisaPokemon = () => {
  const [nomePokemon, setNomePokemon] = useState("");
  const [dadosPokemon, setDadosPokemon] = useState(null);
  const [erro, setErro] = useState("");
  const [todosPokemons, setTodosPokemons] = useState([]); // Lista de todos os Pokémons

  // Função para buscar um Pokémon específico
  const buscarPokemon = async () => {
    setErro("");
    setDadosPokemon(null);
    if (!nomePokemon) {
      setErro("Por favor, insira o nome de um Pokémon.");
      return;
    }

    try {
      const resposta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`
      );
      setDadosPokemon(resposta.data);
    } catch (err) {
      setErro("Pokémon não encontrado. Tente outro nome.");
    }
  };

  // Função para buscar todos os Pokémons (limite de 50 como exemplo)
  const buscarTodosPokemons = async () => {
    try {
      const resposta = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      const resultados = resposta.data.results;

      // Fazer uma nova chamada para obter os detalhes de cada Pokémon
      const detalhesPokemons = await Promise.all(
        resultados.map((pokemon) => axios.get(pokemon.url))
      );

      setTodosPokemons(detalhesPokemons.map((res) => res.data));
    } catch (err) {
      setErro("Erro ao carregar os Pokémons.");
    }
  };

  // Carregar todos os Pokémons ao montar o componente
  useEffect(() => {
    buscarTodosPokemons();
  }, []);

  return (
    <div className="pokemon-search-container">
      <h2>Pesquise ou veja todos os Pokémons</h2>
      
      {/* Barra de pesquisa */}
      <input
        type="text"
        value={nomePokemon}
        onChange={(e) => setNomePokemon(e.target.value)}
        placeholder="Digite o nome do Pokémon"
      />
      <br />
      <button onClick={buscarPokemon}>BUSCAR</button>

      {/* Exibir erro se houver */}
      {erro && <p className="error-message">{erro}</p>}

      {/* Exibir informações do Pokémon pesquisado */}
      {dadosPokemon && (
        <div className="pokemon-info">
          <h3>{dadosPokemon.name.toUpperCase()}</h3>
          <img src={dadosPokemon.sprites.front_default} alt={dadosPokemon.name} />
          <p>
            <strong>Altura:</strong> {dadosPokemon.height / 10} m
          </p>
          <p>
            <strong>Peso:</strong> {dadosPokemon.weight / 10} kg
          </p>
          <p>
            <strong>Tipos:</strong>{" "}
            {dadosPokemon.types
              .map((type) => tipoTraduzido[type.type.name] || type.type.name)
              .join(", ")}
          </p>
          <p>
            <strong>Habilidades:</strong>{" "}
            {dadosPokemon.abilities
              .map((ability) => habilidadeTraduzida[ability.ability.name] || ability.ability.name)
              .join(", ")}
          </p>
        </div>
      )}

      {/* Lista de todos os Pokémons */}
      <div className="pokemon-list">
        <h3>Todos os Pokémons</h3>
        <div className="pokemon-grid">
          {todosPokemons.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <h4>{pokemon.name.toUpperCase()}</h4>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="pokemon-image"
              />
              <p>
                <strong>Altura:</strong> {pokemon.height / 10} m
              </p>
              <p>
                <strong>Peso:</strong> {pokemon.weight / 10} kg
              </p>
              <p>
                <strong>Tipos:</strong>{" "}
                {pokemon.types
                  .map((type) => tipoTraduzido[type.type.name] || type.type.name)
                  .join(", ")}
              </p>
              <p>
                <strong>Habilidades:</strong>{" "}
                {pokemon.abilities
                  .map((ability) => habilidadeTraduzida[ability.ability.name] || ability.ability.name)
                  .join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PesquisaPokemon;