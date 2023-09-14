import { useState, useEffect } from 'react';

import Search from '@/components/Search/Search';
import Main from '@/components/Main/Main';

export default function Home() {
  const [location, setLocation] = useState('');
  const [cities, setCities] = useState([]);
  useEffect(() => {
    if (!location) return setCities([]);

    const loadCities = async () => {
      const data = await (
        await fetch('https://jsonplaceholder.typicode.com/todos/1', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: location,
        })
      ).json();
      setCities(data);
    };
    const timeout = setTimeout(loadCities, 200);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <main className="flex h-full flex-col px-4 md:px-20 lg:px-40 xl:px-60">
      <Search cities={cities} setLocation={setLocation} />
      <Main />
    </main>
  );
}
