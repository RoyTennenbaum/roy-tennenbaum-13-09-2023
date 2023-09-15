import { Dispatch, SetStateAction } from 'react';

import Image from 'next/image';
import { city } from '../utils/locations';

// interface searchProps {
//   cities: string[];
//   onSearch: Dispatch<SetStateAction<string>>;
// }

interface searchProps {
  onSearch: (city: string) => void;
}

const Search: React.FC<searchProps> = ({ onSearch }) => {
  return (
    <section className="flex justify-center">
      <label
        htmlFor="search"
        className="flex rounded-md border border-green-400 bg-gray-50 py-3 pl-3 text-gray-500 focus-within:border-indigo-600"
      >
        <Image
          src="./images/search.svg"
          alt="Search Icon"
          width={36}
          height={36}
        />
        <input
          id="search"
          type="text"
          placeholder="Search by location..."
          className="outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
      </label>
    </section>
  );
};

export default Search;
