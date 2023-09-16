interface Props {
  children: ReactNode | ReactNode[];
}

interface CityProp {
  Key: string;
  LocalizedName: string;
}

interface ContentProps<T> {
  cityName: string;
  currentWeather: T;
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
  forecast: any[];
  favorites: CityProp[];
  setFavorites: Dispatch<SetStateAction<CityProp[]>>;
}

export {
  Props,
  CityProp,
  ContentProps,
  CurrentWeatherProps,
  ForecastProps,
  InitialStore,
};
