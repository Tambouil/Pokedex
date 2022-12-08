import { Pokemon } from '../../interfaces';

interface Props {
  pokemon?: Pokemon;
  backgroundSelected: string;
}
interface IObjectKeys {
  [key: string]: string;
}

const PokemonBaseStats = ({ pokemon, backgroundSelected }: Props) => {
  const maxStat = 255;

  const baseStatsNames: IObjectKeys = {
    hp: 'hp',
    attack: 'atk',
    defense: 'def',
    'special-attack': 'satk',
    'special-defense': 'sdef',
    speed: 'spd',
  };

  return (
    <div className="w-full flex flex-col my-2">
      {pokemon?.stats.map(({ base_stat, stat: { name } }) => {
        return (
          <div key={name} className="w-full flex">
            <span
              style={{ color: backgroundSelected }}
              className="font-bold text-sm uppercase text-right w-1/5 mx-4 pr-4 border-r border-[#e0e0e0]"
            >
              {baseStatsNames[name]}
            </span>
            <div className="w-3/5 flex items-center gap-4">
              <p className="w-[10%]">0{base_stat}</p>
              <div className="w-full relative">
                <div className="w-full h-[10px] opacity-50 rounded-lg" style={{ background: backgroundSelected }} />
                <div
                  className="absolute left-0 top-0 h-[10px] rounded-lg"
                  style={{
                    background: backgroundSelected,
                    opacity: '1',
                    width: `${(base_stat / maxStat) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonBaseStats;
