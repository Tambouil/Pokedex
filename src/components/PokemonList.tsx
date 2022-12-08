import { Pokemon } from '../interfaces';
import PokemonCard from './PokemonCard';

interface Props {
  pokemons: Pokemon[];
}

const PokemonList = ({ pokemons }: Props) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center">All Pokemons from first generation</h2>
      <div className="max-w-[1200px] mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 py-8">
        {pokemons.map((pokemons, index) => (
          <PokemonCard key={index} pokemon={pokemons} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
