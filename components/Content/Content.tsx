import { FC, useState, useEffect } from 'react';
import CardList from './CardList';
import { DataProp } from '@/app/page';

const weatherData = [
  { day: 'Sunday', temperature: '38°C' },
  { day: 'Monday', temperature: '36°C' },
  { day: 'Tuesday', temperature: '34°C' },
  { day: 'Wednesday', temperature: '35°C' },
  { day: 'Thursday', temperature: '37°C' },
];

interface ContentProps<T> {
  cityName: string;
  currentWeather: T;
}

export interface CurrentWeatherProps {
  LocalObservationDateTime: string;
  WeatherIcon: number;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
    };
    Imperial: {
      Value: number;
      Unit: string;
    };
  };
}

const Content: FC<ContentProps<CurrentWeatherProps>> = ({
  currentWeather,
  cityName,
}) => {
  return (
    <section className="flex grow flex-col bg-white">
      <section className="flex justify-between">
        <div className="flex flex-col items-stretch">
          <span>{cityName}</span>
          <span>
            {currentWeather?.Temperature.Imperial.Value}°
            {currentWeather?.Temperature.Imperial.Unit}
          </span>
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
