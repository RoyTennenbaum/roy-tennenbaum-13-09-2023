'use client';

import CardList from '@/components/Content/CardList';
import { useWeather } from '@/components/Store/WeatherStore';
import { CityProp } from '@/types/global';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Favorites() {
  const [updatedFavorites, setUpdatedFavorites] = useState<CityProp[]>();
  const [isLoading, setIsLoading] = useState(true);
  const { favorites } = useWeather();

  useEffect(() => {
    if (!Array.isArray(favorites) || favorites.length === 0)
      return setIsLoading(false);
    const abortController = new AbortController();
    setIsLoading(true);
    const fetchFavoritesWeather = async () => {
      const updatedFavoritesWeather: CityProp[] = [];
      await Promise.all(
        favorites.map(async ({ Key, LocalizedName }, i) => {
          try {
            const response = await fetch(
              //`http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${process.env.NEXT_PUBLIC_WEATHER_API}`,
              'http://localhost:3001/tel-aviv-current',
              {
                signal: abortController.signal,
              }
            );
            if (!response.ok) {
              toast('Error occured while fetching!');
              throw new Error(
                `Response is not OK: ${response.status}, ${response.statusText}`
              );
            }
            const rawCurrentWeatherData = await response.json();
            if (!Array.isArray(rawCurrentWeatherData)) {
              toast('Wrong data type!');
              throw new Error(
                `rawCurrentWeatherData is not of the expected type: ${rawCurrentWeatherData}`
              );
            }
            const CurrentWeatherData = rawCurrentWeatherData[0];
            const CurrentWeather = {
              LocalObservationDateTime:
                CurrentWeatherData.LocalObservationDateTime,
              WeatherIcon: CurrentWeatherData.WeatherIcon,
              WeatherText: CurrentWeatherData.WeatherText,
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
            };

            updatedFavoritesWeather.push({
              Key,
              LocalizedName,
              CurrentWeather,
            });
          } catch (err) {
            toast('Oops! unexpected error!');
            console.error('Unexpected error:', err);
          }
        })
      );
      updatedFavoritesWeather &&
        setUpdatedFavorites(
          updatedFavoritesWeather.filter(
            (favorite) => typeof favorite !== 'undefined'
          )
        );
    };
    fetchFavoritesWeather();
    setIsLoading(false);
    return () => abortController.abort();
  }, [favorites]);

  const normalizeFavorites = (favorites: CityProp[]) =>
    favorites.map((favorite) => ({
      imageId: favorite.CurrentWeather?.WeatherIcon ?? 0,
      imageAlt: favorite.CurrentWeather?.WeatherText ?? 'Image Alt',
      temperature: `${favorite.CurrentWeather?.Temperature.Imperial.Value}°${favorite.CurrentWeather?.Temperature.Imperial.Unit}`,
      cityProp: favorite,
    }));

  return (
    <>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          {updatedFavorites && updatedFavorites.length > 0 ? (
            <CardList weatherData={normalizeFavorites(updatedFavorites)} />
          ) : (
            <p className="text-center">Nothing was added to favorites</p>
          )}
        </>
      )}
    </>
  );
}
