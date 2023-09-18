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
  LocalObservationDateTime: string | undefined;
  WeatherIcon: number | undefined;
  WeatherText: string | undefined;
  IsDayTime: boolean | undefined;
  Temperature: {
    Metric: {
      Value: number | undefined;
      Unit: string | undefined;
    };
    Imperial: {
      Value: number | undefined;
      Unit: string | undefined;
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

interface InitialStore {
  selectedCity: CityProp;
  setSelectedCity: Dispatch<SetStateAction<CityProp>>;
  currentWeather?: CurrentWeatherProps;
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeatherProps | undefined>>;
  forecast: ForecastProps[];
  favorites: CityProp[];
  setFavorites: Dispatch<SetStateAction<CityProp[]>>;
  toggleTempUnit: () => void;
  selectedTempUnit: TempUnit;
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
