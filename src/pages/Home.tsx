import { useEffect, useState } from 'react';
import FavoritesPokemons from '../components/FavoritesPokemons';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';
import { Pokemon } from '../interfaces';

interface Pokemons {
  name: string;
  url: string;
}

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      const pokemons = await Promise.all(
        data.results.map(async (pokemon: Pokemons) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return data;
        })
      );
      setPokemons(pokemons);
      setIsLoading(false);
    };
    getPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="bg-gray-100">
      <Header setSearch={setSearch} />
      <FavoritesPokemons />
      {isLoading ? (
        <div className="flex items-center justify-center h-[140px]">Loading</div>
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </div>
  );
};

export default Home;
