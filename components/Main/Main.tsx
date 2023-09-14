import CardList from './CardList';

const weatherData = [
  { day: 'Sunday', temperature: '38°C' },
  { day: 'Monday', temperature: '36°C' },
  { day: 'Tuesday', temperature: '34°C' },
  { day: 'Wednesday', temperature: '35°C' },
  { day: 'Thursday', temperature: '37°C' },
];

const Main: React.FC = () => {
  return (
    <section className="flex grow flex-col bg-white opacity-70">
      <section className="flex justify-between">
        <div className="flex flex-col items-stretch">
          <span>Tel Aviv</span>
          <span>38C</span>
        </div>
        <button>ADD TO FAVORITES</button>
      </section>
      <section>
        <CardList weatherData={weatherData} />
      </section>
    </section>
  );
};

export default Main;
