import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pokemon, removePokemon, State } from '../store/favoritesSlice';
import { background } from '../utils/BackgroundsByType';

const FavoritesPokemons = () => {
  const pokemons = useSelector((state: any) => state.favoritesPokemons.favoritesPokemons);
  const dispatch = useDispatch();
  return (
    <div className="w-full mt-8">
      <h1 className="text-2xl font-bold text-center">My favorites Pokemons</h1>
      {pokemons.length === 0 ? (
        <div className="flex items-center justify-center h-[140px]">No favorites pokemons yet, try to add some!</div>
      ) : (
        <div className="max-w-[1200px] mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 py-8">
          {pokemons.map((pokemon: Pokemon) => (
            <div key={pokemon.id} className="w-full max-w-[350px] rounded-lg shadow-sm flex flex-col hover:shadow-lg">
              <div
                style={{ borderColor: background[pokemon.types[0].type.name] }}
                className="flex flex-col rounded-lg shadow-sm border border-transparent border-b-0"
              >
                <span style={{ color: background[pokemon.types[0].type.name] }} className="text-end py-1 px-2">
                  #{pokemon?.id}
                </span>
                <Link to={`/pokemon/${pokemon?.id}`}>
                  {pokemon.image ? (
                    <img
                      src={pokemon.image}
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
                  style={{ background: background[pokemon.types[0].type.name] }}
                  className="flex justify-between text-[16px] p-4 rounded-b-lg capitalize text-white"
                >
                  {pokemon.name}
                  <button onClick={() => dispatch(removePokemon(pokemon))}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPokemons;
