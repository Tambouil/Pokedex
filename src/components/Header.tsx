import { Link } from 'react-router-dom';
import { PokeballIconSmall } from '../assets/pokeball';

interface Props {
  setSearch: (search: string) => void;
}

const Title = ({ setSearch }: Props) => {
  return (
    <header>
      <Link className="flex items-center justify-center py-4 gap-4" to="/">
        <PokeballIconSmall />
        <span className="text-[#212121] text-2xl font-bold">Pokedex</span>
      </Link>
      <div className="flex justify-center">
        <input
          className="w-[90%] max-w-[350px] h-10 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#212121] focus:border-transparent"
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Title;
