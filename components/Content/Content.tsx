import { useState, useEffect } from 'react';
import CardList from './CardList';

const weatherData = [
  { day: 'Sunday', temperature: '38°C' },
  { day: 'Monday', temperature: '36°C' },
  { day: 'Tuesday', temperature: '34°C' },
  { day: 'Wednesday', temperature: '35°C' },
  { day: 'Thursday', temperature: '37°C' },
];

interface CurrentProps {
  LocalObservationDateTime: string;
}

const Content: React.FC = () => {
  useEffect(() => {
    const currentWeather = async (city, abortSignal: AbortSignal) => {
      try {
        const response = await fetch(
          // `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.NEXT_PUBLIC_WEATHER_API}&q=${query}`,
          'http://localhost:3001/tel-aviv-current',
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

    return () => {};
  }, []);

  return (
    <section className="flex grow flex-col bg-white">
      <section className="flex justify-between">
        <div className="flex flex-col items-stretch">
          <span>Tel Aviv</span>
          <span>38C</span>
        </div>
        <button>ADD TO FAVORITES</button>
      </section>
      <section>
        <CardList weatherData={weatherData} />
      </section>
    </section>
  );
};

export default Content;
