import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, pokemonSlice } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);

  
  useEffect(() => {
    dispatch(getPokemons());
  }, []);



  return (
    <>
      <h1> Pokemon App </h1>
      <hr />
    {isLoading ?   <span>Cargando</span> : <span>Ya no carga</span> }
      <ul>
        {pokemons.map((e) => (
          <li key={e.name}>{e.name}</li>
        ))}
      </ul>
      <button disabled={isLoading}
      onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
