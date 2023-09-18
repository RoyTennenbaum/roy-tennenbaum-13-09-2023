import { Dispatch, SetStateAction } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

interface CityProp {
  Key: string;
  LocalizedName: string;
  CurrentWeather?: CurrentWeatherProps;
}

interface ContentProps<T> {
  cityName: string;
  currentWeather: T;
}

interface CardListProps {
  weatherData: WeatherCardProps[];
}

interface WeatherCardProps {
  imageId: number;
  imageAlt: string;
  temperature: JSX.Element;
  cityProp?: CityProp;
}

interface CurrentWeatherProps {
  LocalObservationDateTime: string;
  WeatherIcon: number;
  WeatherText: string;
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

interface ForecastProps {
  Date: string;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: TempUnit;
    };
    Maximum: {
      Value: number;
      Unit: TempUnit;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
  };
}

type TempUnit = 'C' | 'F';
interface WeatherUnitProps {
  value: number;
  unit: TempUnit;
}

export {
  Props,
  CityProp,
  ContentProps,
  CardListProps,
  WeatherCardProps,
  CurrentWeatherProps,
  ForecastProps,
  InitialStore,
  TempUnit,
  WeatherUnitProps,
};
