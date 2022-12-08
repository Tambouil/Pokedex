import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pokemon } from '../interfaces';
import { background } from '../utils/BackgroundsByType';
import { addPokemon } from '../store/favoritesSlice';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const backgroundSelected = background[pokemon.types[0].type.name];
  const pokemonsLiked = useSelector((state: any) => state.favoritesPokemons.favoritesPokemons);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-[350px] rounded-lg shadow-sm flex flex-col hover:shadow-lg">
      <div
        style={{ borderColor: backgroundSelected }}
        className="flex flex-col rounded-lg shadow-sm border border-transparent border-b-0"
      >
        <span style={{ color: backgroundSelected }} className="text-end py-1 px-2">
          #{pokemon?.id}
        </span>
        <Link to={`/pokemon/${pokemon?.id}`}>
          {pokemon.sprites.front_default ? (
            <img
              src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-[90%] h-[140px] object-contain self-center py-2 px-4"
            />
          ) : (
            <div className="flex items-center justify-center h-[140px]">Loading</div>
          )}
          <div className="flex justify-center gap-2 py-2">
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                style={{ background: background[type.type.name] }}
                className="capitalize rounded-full px-2 py-1 text-sm"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </Link>

        <div
          style={{ background: backgroundSelected }}
          className="flex justify-between text-[16px] p-4 rounded-b-lg capitalize text-white"
        >
          {pokemon.name}
          <button
            onClick={() =>
              dispatch(
                addPokemon({
                  id: pokemon.id,
                  name: pokemon.name,
                  image: pokemon.sprites.other.dream_world.front_default,
                  types: pokemon.types,
                })
              )
            }
          >
            {pokemonsLiked.find((pokemonLiked: Pokemon) => pokemonLiked.id === pokemon.id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
