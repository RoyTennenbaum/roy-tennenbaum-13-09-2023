import CardList from '@/components/Main/CardList';

const weatherData = [
  { day: 'Sunday', temperature: '28°C' },
  { day: 'Monday', temperature: '26°C' },
  { day: 'Tuesday', temperature: '24°C' },
  { day: 'Wednesday', temperature: '25°C' },
  { day: 'Thursday', temperature: '27°C' },
];

const Favorites = () => {
  return (
    <div>
      <CardList weatherData={weatherData} />
    </div>
  );
};

export default Favorites;
