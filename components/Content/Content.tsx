import { FC } from 'react';
import CardList from './CardList';
import { useWeather } from '../Store/WeatherStore';

import {
  CardListProps,
  CityProp,
  ContentProps,
  CurrentWeatherProps,
  ForecastProps,
} from '@/types/global';
import calculateIfDayTime from '../Utils/calculateIfDayTime';
import dayOfWeek from '../Utils/dayOfWeek';

const Content: FC<ContentProps<CurrentWeatherProps>> = ({
  currentWeather,
  cityName,
}) => {
  const { forecast, favorites, setFavorites, selectedCity } = useWeather();
  const isExists = !favorites.some((city) => city.Key === selectedCity.Key);
  const toggleFavorites = (selectedCity: CityProp) => {
    let updatedFavorites = isExists
      ? [...favorites, selectedCity]
      : [...favorites.filter((city) => city.Key !== selectedCity.Key)];

    localStorage['cities'] = JSON.stringify(updatedFavorites);
    setFavorites(updatedFavorites);
  };

  const normalizeForecast = (forecast: ForecastProps[]) =>
    forecast.map((forecastData) => {
      const isDay = calculateIfDayTime(forecastData.Date);
      const day = dayOfWeek(forecastData.Date);
      return {
        imageId: isDay ? forecastData.Day.Icon : forecastData.Night.Icon,
        imageAlt: isDay
          ? forecastData.Day.IconPhrase
          : forecastData.Night.IconPhrase,
        temperature: `<span>${day}</span>
        <span>
          ${forecastData.Temperature.Minimum.Value}°${forecastData.Temperature.Minimum.Unit} - 
          ${forecastData.Temperature.Maximum.Value}°${forecastData.Temperature.Maximum.Unit}
        </span>`,
      };
    });

  return (
    <section className="flex grow flex-col rounded-lg bg-gray-700 p-3 opacity-60">
      <section className="flex justify-between">
        <div className="flex flex-col items-stretch">
          <span>{cityName}</span>
          <span>
            {currentWeather?.Temperature.Imperial.Value}°
            {currentWeather?.Temperature.Imperial.Unit}
          </span>
        </div>
        <button onClick={() => toggleFavorites(selectedCity)}>
          {`${isExists ? 'ADD TO' : 'REMOVE FROM'} FAVORITES`}
        </button>
      </section>
      <section>
        {forecast.length > 0 && (
          <CardList weatherData={normalizeForecast(forecast)} />
        )}
      </section>
    </section>
  );
};

export default Content;
