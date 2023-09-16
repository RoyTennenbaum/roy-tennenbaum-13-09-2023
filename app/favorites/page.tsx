'use client';

import CardList from '@/components/Content/CardList';
import { useWeather } from '@/components/Store/WeatherStore';
import { useEffect } from 'react';

const weatherData = [
  { day: 'Sunday', temperature: '28°C' },
  { day: 'Monday', temperature: '26°C' },
  { day: 'Tuesday', temperature: '24°C' },
  { day: 'Wednesday', temperature: '25°C' },
  { day: 'Thursday', temperature: '27°C' },
];

export default function Favorites() {
  const { favorites } = useWeather();

  useEffect(() => {
    // const favoritesWeather = favorites.map(({ LocalizedName, Key }) => {
    //   fetch('');
    // });
  }, [favorites]);

  return (
    <div>
      <CardList weatherData={weatherData} />
    </div>
  );
}
