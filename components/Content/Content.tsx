import { FC } from 'react';
import CardList from './CardList';
import { useWeather } from '../Store/WeatherStore';

import { ContentProps, CurrentWeatherProps } from '@/types/global';

const weatherData = [
  { day: 'Sunday', temperature: '38°C' },
  { day: 'Monday', temperature: '36°C' },
  { day: 'Tuesday', temperature: '34°C' },
  { day: 'Wednesday', temperature: '35°C' },
  { day: 'Thursday', temperature: '37°C' },
];

const Content: FC<ContentProps<CurrentWeatherProps>> = ({
  currentWeather,
  cityName,
}) => {
  const { forecast } = useWeather();

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
        {forecast.length > 0 && <CardList weatherData={forecast} />}
      </section>
    </section>
  );
};

export default Content;
