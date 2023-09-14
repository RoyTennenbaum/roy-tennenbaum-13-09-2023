import { Dispatch, SetStateAction } from 'react';

import Image from 'next/image';
import searchIcon from './search.svg';

interface searchProps {
  cities: string[];
  setLocation: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<searchProps> = ({ cities, setLocation }) => {
  return (
    <section className="flex justify-center">
      <label
        htmlFor="search"
        className="flex rounded-md border border-green-400 bg-gray-50 py-3 pl-3 text-gray-500 focus-within:border-indigo-600"
      >
        <Image src={searchIcon} alt="Search Icon" width={36} height={36} />
        <input
          id="search"
          type="text"
          placeholder="Search by location..."
          className="outline-none"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
    </section>
  );
};

export default Search;
