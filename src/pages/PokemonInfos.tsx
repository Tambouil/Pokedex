import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePokemon from '../components/SinglePokemon/SinglePokemon';
import { Pokemon } from '../interfaces';

const PokemonInfos = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { pokemonId } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemon(data);
    };
    getPokemon();
  }, [pokemonId]);

  return <SinglePokemon pokemon={pokemon} />;
};

export default PokemonInfos;
