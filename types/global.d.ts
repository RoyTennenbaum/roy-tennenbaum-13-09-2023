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
  weatherData: ForecastProps[] | CityProp[];
}

interface WeatherCardProps {
  weatherData: ForecastProps | CityProp;
}

interface CurrentWeatherProps {
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

interface ForecastProps {
  Date: string;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
    };
    Maximum: {
      Value: number;
      Unit: string;
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
  setCurrentWeather: Dispatch<SetStateAction<CurrentWeatherProps>>;
  forecast: ForecastProps[];
  favorites: CityProp[];
  setFavorites: Dispatch<SetStateAction<CityProp[]>>;
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
};
