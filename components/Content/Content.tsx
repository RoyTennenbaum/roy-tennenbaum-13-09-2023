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
  city: DataProp;
  CurrentWeatherProps?: T;
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

const Content: FC<ContentProps<CurrentWeatherProps>> = ({
  city,
  CurrentWeatherProps,
}) => {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherProps | null>(null);
  useEffect(() => {
    const current = async (abortSignal: AbortSignal) => {
      try {
        const response = await fetch(
          //`http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${process.env.NEXT_PUBLIC_WEATHER_API}`,
          'http://localhost:3001/tel-aviv-current',
          {
            signal: abortSignal,
          }
        );
        if (!response.ok) {
          throw new Error(
            `Response is not OK: ${response.status}, ${response.statusText}`
          );
        }

        const rawData = await response.json();
        if (!Array.isArray(rawData)) {
          throw new Error(
            `Response data is not of the expected type: ${rawData}`
          );
        }

        const data = rawData[0];

        setCurrentWeather({
          LocalObservationDateTime: data.LocalObservationDateTime,
          WeatherIcon: data.WeatherIcon,
          IsDayTime: data.IsDayTime,
          Temperature: {
            Metric: {
              Value: data.Temperature.Imperial.Value,
              Unit: data.Temperature.Imperial.Unit,
            },
            Imperial: {
              Value: data.Temperature.Metric.Value,
              Unit: data.Temperature.Metric.Unit,
            },
          },
        });
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    return () => {};
  }, [city.Key]);

  return (
    <section className="flex grow flex-col bg-white">
      <section className="flex justify-between">
        <div className="flex flex-col items-stretch">
          <span>{city.LocalizedName}</span>
          <span>
            {CurrentWeatherProps?.Temperature.Metric.Value}°
            {CurrentWeatherProps?.Temperature.Metric.Unit}
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
