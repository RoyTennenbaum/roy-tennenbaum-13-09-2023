'use client';

import { useState, useEffect } from 'react';
import { locations } from '../components/utils/locations';
import { city } from '../components/utils/locations';
import Search from '@/components/Search/Search';
import Main from '@/components/Main/Main';

interface DataProp {
  Key: string;
  LocalizedName: string;
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState<city[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    const autoCompleteLocation = async (abortSignal: AbortSignal) => {
      if (query.length === 0) return;
      try {
        const response = await fetch(
          // `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.NEXT_PUBLIC_WEATHER_API}&q=${query}`,
          'http://localhost:3001/cities',
          {
            signal: abortSignal,
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const data = (await response.json()) as DataProp[];

        setCities(data.filter((data) => data.LocalizedName.includes(query)));
      } catch (err) {
        console.log(err);
      }
    };
    autoCompleteLocation(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [query]);
  //console.log(cities);

  return (
    <main className="flex h-full flex-col px-4 md:px-20 lg:px-40 xl:px-60">
      <Search onSearch={(e) => setQuery(e)} />
      <Main />
    </main>
  );
}

//   // const handleSearch = (query: string) => {
//   //   setCities(locations.filter((city) => city.LocalizedName.includes(query)));
//   // };
//   // console.log(cities);

//   //   return (
//   //     <main className="flex h-full flex-col px-4 md:px-20 lg:px-40 xl:px-60">
//   //       <Search cities={cities} onSearch={handleSearch} />
//   //       <Main />
//   //     </main>
//   //   );
//   // }
