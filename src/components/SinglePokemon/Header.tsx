import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '../../assets/arrows';
import { PokeballIconBig } from '../../assets/pokeball';
import { Pokemon } from '../../interfaces';

interface Props {
  pokemon?: Pokemon;
}

const Header = ({ pokemon }: Props) => {
  const navigate = useNavigate();

  return (
    <header className="relative max-w-[650px] flex justify-between items-center w-full p-8 text-white">
      <PokeballIconBig className="h-fit absolute top-0 right-0 mr-4 mt-4 w-[250px]" />
      <div className="flex items-center gap-4 cursor-pointer">
        <ArrowLeftIcon onClick={() => navigate('/')} />

        <span className="font-bold capitalize text-3xl">{pokemon?.name}</span>
      </div>
      <p className="font-bold text-[16px]">#{pokemon?.id}</p>
    </header>
  );
};

export default Header;
