'use client';

import Link from 'next/link';
import { useWeather } from './Store/WeatherStore';
import DarkModeBtn from './Common/DarkModeBtn';

const Navbar: React.FC = () => {
  const { toggleTempUnit, selectedTempUnit } = useWeather();

  return (
    <nav className="sticky mx-3 flex h-12 items-center justify-between">
      <h1>Weather Task</h1>
      <ul className="flex gap-2">
        <li>
          <button onClick={() => toggleTempUnit()}>{selectedTempUnit}</button>
        </li>
        <li>
          <DarkModeBtn />
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
