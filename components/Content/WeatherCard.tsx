import { FC, useState } from 'react';
import Image from 'next/image';

import { CityProp, WeatherCardProps } from '@/types/global';
import iconImage from '../Utils/iconImage';
import { useWeather } from '../Store/WeatherStore';
import { useRouter } from 'next/navigation';

const WeatherCard: FC<WeatherCardProps> = ({
  imageId,
  imageAlt,
  cityProp,
  temperature,
}) => {
  const { setSelectedCity } = useWeather();
  const router = useRouter();
  const handleSelectedFavoriteCity = (cityProp: CityProp) => {
    setSelectedCity(cityProp);
    router.push('/');
  };

  return (
    <section
      className={`flex h-60 w-36 min-w-fit flex-col items-center justify-evenly gap-4 rounded-lg bg-orange-300 px-1 shadow-md dark:bg-indigo-600 ${
        cityProp ? 'cursor-pointer' : ''
      }`}
      onClick={() => (cityProp ? handleSelectedFavoriteCity(cityProp) : '')}
    >
      {cityProp && <span>{cityProp.LocalizedName}</span>}
      <Image src={iconImage(imageId)} alt={imageAlt} width={100} height={100} />
      {temperature}
    </section>
  );
};
export default WeatherCard;
