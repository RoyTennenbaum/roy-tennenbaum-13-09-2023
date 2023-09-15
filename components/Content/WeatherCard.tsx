import Image from 'next/image';

interface WeatherCardProps {
  day: string;
  temperature: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ day, temperature }) => {
  return (
    <section className="flex h-60 w-60 flex-col items-center justify-evenly gap-4 rounded-lg bg-indigo-600 px-1">
      <Image src="/images/cloudy.svg" alt="cloudy" width={130} height={130} />
      <div className="flex flex-col gap-2 text-center">
        <span>{day}</span>
        <span>{temperature}</span>
      </div>
    </section>
  );
};

export default WeatherCard;
