'use client';

import CardList from '@/components/Content/CardList';
import { useWeather } from '@/components/Store/WeatherStore';
import { useEffect } from 'react';

export default function Favorites() {
  const { favorites, currentWeather, setCurrentWeather } = useWeather();

  useEffect(() => {
    const fetchFavoritesWeather = async () => {
      const updateFavorites = await Promise.all(
        favorites.map(async ({ Key }, i) => {
          try {
            const abortController = new AbortController();
            const response = await fetch(
              //`http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${process.env.NEXT_PUBLIC_WEATHER_API}`,
              'http://localhost:3001/tel-aviv-current',
              {
                signal: abortController.signal,
              }
            );
            if (!response.ok) {
              throw new Error(
                `Response is not OK: ${response.status}, ${response.statusText}`
              );
            }
            const rawCurrentWeatherData = await response.json();
            if (!Array.isArray(rawCurrentWeatherData)) {
              throw new Error(
                `rawCurrentWeatherData is not of the expected type: ${rawCurrentWeatherData}`
              );
            }

            const CurrentWeatherData = rawCurrentWeatherData[0];
            setCurrentWeather({
              LocalObservationDateTime:
                CurrentWeatherData.LocalObservationDateTime,
              WeatherIcon: CurrentWeatherData.WeatherIcon,
              IsDayTime: CurrentWeatherData.IsDayTime,
              Temperature: {
                Metric: {
                  Value: CurrentWeatherData.Temperature.Imperial.Value,
                  Unit: CurrentWeatherData.Temperature.Imperial.Unit,
                },
                Imperial: {
                  Value: CurrentWeatherData.Temperature.Metric.Value,
                  Unit: CurrentWeatherData.Temperature.Metric.Unit,
                },
              },
            });

            favorites[i].CurrentWeather = currentWeather;
          } catch (err) {
            console.error('Unexpected error:', err);
          }
        })
      );
    };
    fetchFavoritesWeather();
  }, [favorites, currentWeather, setCurrentWeather]);
  return (
    <>
      {favorites.length > 0 ? (
        <CardList weatherData={favorites} />
      ) : (
        <p className="text-center">Nothing was added to favorites</p>
      )}
    </>
  );
}
