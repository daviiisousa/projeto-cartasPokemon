import { Header } from "../../components/layout/Header/header";
import React from "react";
import PokemonSearch from "../../components/layout/Header/PokemonSearch";

export const Cartas = () => {
  return (
    <>
      <Header />
      <div>
        <PokemonSearch />
      </div>
    </>
  );
};
