import WeatherCard from './WeatherCard';

interface WeatherData {
  day: string;
  temperature: string;
}

interface WeatherCardListProps {
  weatherData: WeatherData[];
}

const CardList: React.FC<WeatherCardListProps> = ({ weatherData }) => {
  return (
    <div className="w-full">
      <div className="flex min-w-full gap-3 overflow-x-auto px-5">
        {weatherData.map((data) => (
          <WeatherCard
            key={data.day}
            day={data.day}
            temperature={data.temperature}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
