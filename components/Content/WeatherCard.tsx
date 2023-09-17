import { FC } from 'react';
import Image from 'next/image';

import { WeatherCardProps, ForecastProps, CityProp } from '@/types/global';
import dayOfWeek from '../Utils/dayOfWeek';

const WeatherCard: FC<WeatherCardProps> = ({ weatherData }) => {
  if ('Day' in weatherData) {
    const forecastData = weatherData as ForecastProps;
    const day = dayOfWeek(forecastData.Date);
    return (
      <section className="flex h-60 w-60 flex-col items-center justify-evenly gap-4 rounded-lg bg-indigo-600 px-1">
        <Image src={forecastData.Day.Icon} alt={forecastData.Day.IconPhrase} />
        {/* <Image src="/images/cloudy.svg" alt="cloudy" width={130} height={130} /> */}
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
