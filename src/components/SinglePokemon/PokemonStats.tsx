import { HeightIcon, WeightIcon } from '../../assets/stats';
import { Pokemon } from '../../interfaces';

interface Props {
  pokemon?: Pokemon;
}

const PokemonStats = ({ pokemon }: Props) => {
  return (
    <div className="my-2 w-full flex justify-evenly">
      <div className="flex flex-col items-center gap-2">
        <WeightIcon />

        <span>{pokemon?.weight}</span>
        <p>Weight</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HeightIcon />
        <span>{pokemon?.height}</span>
        <p className="text-[#666666] text-sm">Height</p>
      </div>
    </div>
  );
};

export default PokemonStats;
