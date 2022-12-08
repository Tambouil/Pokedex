import { Pokemon } from '../../interfaces';
import { background } from '../../utils/BackgroundsByType';
import Header from './Header';
import PokemonBaseStats from './PokemonBaseStats';
import PokemonStats from './PokemonStats';
import PokemonTypes from './PokemonTypes';
import Title from './Title';

interface Props {
  pokemon?: Pokemon;
}

const SinglePokemon = ({ pokemon }: Props) => {
  if (!pokemon) {
    return <div>loading...</div>;
  }
  const backgroundSelected = background[pokemon?.types[0].type.name];

  return (
    <div
      className="min-h-screen relative flex flex-col justify-between items-center"
      style={{ background: backgroundSelected }}
    >
      <Header pokemon={pokemon} />
      <div className="max-w-[650px] w-[95%] bg-white h-[65vh] bottom-0 relative mb-4 rounded-lg flex flex-col items-center">
        <img
          src={pokemon?.sprites.other.dream_world.front_default || pokemon?.sprites.front_default}
          alt={pokemon?.name}
          className="absolute mx-auto mt-[-200px] w-[275px] h-[275px] object-contain"
        />
        <PokemonTypes pokemon={pokemon} />
        <Title content="About" backgroundSelected={backgroundSelected} />
        <PokemonStats pokemon={pokemon} />
        <Title content="Base Stats" backgroundSelected={backgroundSelected} />
        <PokemonBaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} />
      </div>
    </div>
  );
};

export default SinglePokemon;
