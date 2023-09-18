import { CityProp } from '@/types/global';

interface DropdownProps {
  cities: CityProp[];
  onSelect: (city: CityProp) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ cities, onSelect }) => {
  const height = cities.length < 5 ? 'h-10' : 'h-40';
  return (
    <div
      className={`${height} w-auto overflow-y-scroll rounded-lg bg-neutral-500 px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300`}
    >
      <ul>
        {cities.map((city) => (
          <li
            key={city.Key}
            className="cursor-pointer hover:bg-gray-300"
            onClick={() => onSelect(city)}
          >
            {city.LocalizedName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
