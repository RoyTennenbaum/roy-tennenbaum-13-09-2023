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
    <div className="w-full max-w-full overflow-x-auto">
      <div className="grid-cols-auto-fit-5 grid gap-3 px-5 ">
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
