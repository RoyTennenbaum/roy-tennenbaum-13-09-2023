import { DataProp } from '@/app/page';

interface DropdownProps {
  cities: DataProp[];
  onSelect: (city: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ cities, onSelect }) => {
  return (
    <div className="w-auto overflow-y-scroll rounded-lg bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <ul>
        {cities.map((city) => (
          <li key={city.Key} onClick={() => onSelect(city.LocalizedName)}>
            {city.LocalizedName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
