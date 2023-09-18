import { FC } from 'react';
import CardList from './CardList';
import { useWeather } from '../Store/WeatherStore';

import {
  CityProp,
  ContentProps,
  CurrentWeatherProps,
  ForecastProps,
} from '@/types/global';
import calculateIfDayTime from '../Utils/calculateIfDayTime';
import dayOfWeek from '../Utils/dayOfWeek';
import toggleCelsiusFahrenheit from '../Utils/toggleCelsiusFahrenheit';

const Content: FC<ContentProps<CurrentWeatherProps>> = ({
  currentWeather,
  cityName,
}) => {
  const { forecast, favorites, setFavorites, selectedCity, selectedTempUnit } =
    useWeather();
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

      const minTemperature =
        selectedTempUnit === 'C'
          ? forecastData.Temperature.Minimum.Value
          : toggleCelsiusFahrenheit({
              value: forecastData.Temperature.Minimum.Value,
              unit: forecastData.Temperature.Minimum.Unit,
            }).value;

      const maxTemperature =
        selectedTempUnit === 'C'
          ? forecastData.Temperature.Maximum.Value
          : toggleCelsiusFahrenheit({
              value: forecastData.Temperature.Maximum.Value,
              unit: forecastData.Temperature.Maximum.Unit,
            }).value;

      return {
        imageId: isDay ? forecastData.Day.Icon : forecastData.Night.Icon,
        imageAlt: isDay
          ? forecastData.Day.IconPhrase
          : forecastData.Night.IconPhrase,
        temperature: (
          <section className="flex flex-col gap-2 text-center">
            {day}
            <span>
              {`${minTemperature}°${selectedTempUnit} - ${maxTemperature}°${selectedTempUnit}`}
            </span>
          </section>
        ),
      };
    });

  return (
    <section className="bg-modeLightAccBg dark:bg-modeDarkAccBg flex grow flex-col rounded-lg p-3 opacity-80 shadow-2xl">
      <section className="flex justify-between">
        <div className="flex flex-col items-stretch">
          <span>{cityName}</span>
          <span>
            {selectedTempUnit === 'C'
              ? `${currentWeather?.Temperature.Metric.Value}°${currentWeather?.Temperature.Metric.Unit}`
              : `${currentWeather?.Temperature.Imperial.Value}°${currentWeather?.Temperature.Imperial.Unit}`}
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
