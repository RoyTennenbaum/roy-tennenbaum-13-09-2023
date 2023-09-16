'use client';

import { useState, useEffect } from 'react';

import Content from '@/components/Content/Content';
import Search from '@/components/Search/Search';
import Dropdown from '@/components/Search/Dropdown';

export interface DataProp {
  Key: string;
  LocalizedName: string;
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState<DataProp[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState<DataProp>({
    Key: '215854',
    LocalizedName: 'Tel Aviv',
  });

  useEffect(() => {
    const abortController = new AbortController();

    const autoCompleteLocation = async (abortSignal: AbortSignal) => {
      if (query.length === 0) {
        setShowDropdown(false);
        setCities([]);
        return;
      }

      try {
        const response = await fetch(
          // `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.NEXT_PUBLIC_WEATHER_API}&q=${query}`,
          'http://localhost:3001/cities',
          {
            signal: abortSignal,
          }
        );
        if (!response.ok) {
          throw new Error(
            `Response is not OK: ${response.status}, ${response.statusText}`
          );
        }

        const rawData = await response.json();
        if (!Array.isArray(rawData)) {
          throw new Error(
            `Response data is not of the expected type: ${rawData}`
          );
        }

        const data: DataProp[] = rawData.map((city: any) => ({
          Key: city.Key,
          LocalizedName: city.LocalizedName,
        }));

        setCities(
          data.filter((data) =>
            data.LocalizedName.toLowerCase().includes(query)
          )
        );
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };
    autoCompleteLocation(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [query]);

  const handleSearch = (value: string) => {
    setQuery(value);
    setShowDropdown(!!value.trim().length);
  };

  const handleSelectCity = (city: DataProp) => {
    setSelectedCity(city);
    setQuery('');
    setShowDropdown(false);
  };

  return (
    <main className="flex h-full flex-col px-4 md:px-20 lg:px-40 xl:px-60">
      <Search onSearch={handleSearch} />
      {showDropdown && (
        <Dropdown cities={cities} onSelect={(city) => handleSelectCity(city)} />
      )}
      <Content city={selectedCity} />
    </main>
  );
}
