import Image from 'next/image';

import searchIcon from './search.svg';

const Search: React.FC = () => {
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
        />
      </label>
    </section>
  );
};

export default Search;
