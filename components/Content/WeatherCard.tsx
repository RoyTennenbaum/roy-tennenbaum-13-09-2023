import { FC } from 'react';
import Image from 'next/image';

import { WeatherCardProps, ForecastProps, CityProp } from '@/types/global';
import dayOfWeek from '../Utils/dayOfWeek';
import iconImage from '../Utils/iconImage';
import calculateIfDayTime from '../Utils/calculateIfDayTime';

const WeatherCard: FC<WeatherCardProps> = ({ weatherData }) => {
  if ('Day' in weatherData) {
    const forecastData = weatherData as ForecastProps;
    const day = dayOfWeek(forecastData.Date);
    return (
      <section className="flex h-60 w-60 flex-col items-center justify-evenly gap-4 rounded-lg bg-indigo-600 px-1">
        {calculateIfDayTime(forecastData.Date) ? (
          <Image
            src={iconImage(forecastData.Day.Icon)}
            alt={forecastData.Day.IconPhrase}
            width={100}
            height={100}
          />
        ) : (
          <Image
            src={iconImage(forecastData.Night.Icon)}
            alt={forecastData.Night.IconPhrase}
            width={100}
            height={100}
          />
        )}
        <section className="flex flex-col gap-2 text-center">
          <span>{day}</span>
          <span>
            {forecastData.Temperature.Minimum.Value}°
            {forecastData.Temperature.Minimum.Unit} -{' '}
            {forecastData.Temperature.Maximum.Value}°
            {forecastData.Temperature.Maximum.Unit}
          </span>
        </section>
      </section>
    );
  }
};

export default WeatherCard;
