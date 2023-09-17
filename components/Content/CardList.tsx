import { FC } from 'react';
import WeatherCard from './WeatherCard';

import { CardListProps } from '@/types/global';

const CardList: FC<CardListProps> = ({ weatherData }) => {
  return (
    <div className="w-full">
      <div className="flex min-w-full gap-3 overflow-x-auto px-5">
        {weatherData.map((data, index) => (
          <WeatherCard
            key={index}
            imageId={data.imageId}
            imageAlt={data.imageAlt}
            cityProp={data.cityProp}
            temperature={data.temperature}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
