'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

import {
  Props,
  CityProp,
  CurrentWeatherProps,
  ForecastProps,
  InitialStore,
  WeatherUnitProps,
  TempUnit,
} from '@/types/global';
import { toast } from 'react-toastify';
import toggleCelsiusFahrenheit from '@/components/Utils/toggleCelsiusFahrenheit';

const initialStore = {
  selectedCity: {
    Key: '215854',
    LocalizedName: 'Tel Aviv',
  },
  setSelectedCity: () => {},
  currentWeather: undefined,
  setCurrentWeather: () => {},
  forecast: [],
  favorites: [],
  setFavorites: () => {},
  toggleTempUnit: () => undefined,
  selectedTempUnit: 'C' as TempUnit,
};

const Context = createContext<InitialStore>(initialStore);

const Store = ({ children }: Props) => {
  const [selectedCity, setSelectedCity] = useState<CityProp>(
    initialStore.selectedCity
  );
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherProps>();
  const [forecast, setForecast] = useState<ForecastProps[]>([]);
  const [favorites, setFavorites] = useState<CityProp[]>(
    initialStore.favorites
  );
  const [selectedTempUnit, setSelectedTempUnit] = useState<TempUnit>('C');

  const toggleTempUnit = () => {
    if (selectedTempUnit === 'C') {
      setSelectedTempUnit('F');
    } else {
      setSelectedTempUnit('C');
    }
  };

  useEffect(() => {
    const citiesArr = localStorage['cities']
      ? JSON.parse(localStorage['cities'])
      : [];

    setFavorites(citiesArr);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const current = async (abortSignal: AbortSignal) => {
      try {
        const [currentWeatherResponse, forecastResponse] = await Promise.all([
          fetch(
            //`http://dataservice.accuweather.com/currentconditions/v1/${selectedCity.Key}?apikey=${process.env.NEXT_PUBLIC_WEATHER_API}`,
            'http://localhost:3001/tel-aviv-current',
            {
              signal: abortSignal,
            }
          ),
          fetch(
            //`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${selectedCity.Key}?apikey=${process.env.NEXT_PUBLIC_WEATHER_API}`
            'http://localhost:3001/tel-aviv-5',
            {
              signal: abortSignal,
            }
          ),
        ]);

        if (!currentWeatherResponse.ok) {
          toast('Error occured while fetching!');
          throw new Error(
            `currentWeatherResponse is not OK: ${currentWeatherResponse.status}, ${currentWeatherResponse.statusText}`
          );
        }
        if (!forecastResponse.ok) {
          toast('Error occured while fetching!');
          throw new Error(
            `forecastResponse is not OK: ${forecastResponse.status}, ${forecastResponse.statusText}`
          );
        }

        const rawCurrentWeatherData = await currentWeatherResponse.json();
        const rawForecastData = await forecastResponse.json();

        if (!Array.isArray(rawCurrentWeatherData)) {
          toast('Wrong data type!');
          throw new Error(
            `rawCurrentWeatherData is not of the expected type: ${rawCurrentWeatherData}`
          );
        }
        if (typeof rawForecastData !== 'object') {
          toast('Wrong data type!');
          throw new Error(
            `rawForecastData is not of the expected type: ${rawForecastData}`
          );
        }

        const CurrentWeatherData = rawCurrentWeatherData[0];
        setCurrentWeather({
          LocalObservationDateTime: CurrentWeatherData.LocalObservationDateTime,
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
        });

        const forecastData = rawForecastData.DailyForecasts.map(
          (forecastItem: any) => ({
            Date: forecastItem.Date,
            Temperature: {
              Minimum: {
                Value: forecastItem.Temperature.Minimum.Value,
                Unit: forecastItem.Temperature.Minimum.Unit,
              },
              Maximum: {
                Value: forecastItem.Temperature.Maximum.Value,
                Unit: forecastItem.Temperature.Maximum.Unit,
              },
            },
            Day: {
              Icon: forecastItem.Day.Icon,
              IconPhrase: forecastItem.Day.IconPhrase,
            },
            Night: {
              Icon: forecastItem.Night.Icon,
              IconPhrase: forecastItem.Night.IconPhrase,
            },
          })
        );

        setForecast(forecastData);
      } catch (err) {
        toast('Oops! unexpected error!');
        console.error('Unexpected error:', err);
      }
    };
    current(abortController.signal);

    return () => abortController.abort();
  }, [selectedCity.Key]);

  return (
    <Context.Provider
      value={{
        selectedCity,
        setSelectedCity,
        currentWeather,
        setCurrentWeather,
        forecast,
        favorites,
        setFavorites,
        toggleTempUnit,
        selectedTempUnit,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;

export const useWeather = () => useContext(Context);
