'use client';

import Link from 'next/link';
import { useWeather } from './Store/WeatherStore';
import DarkModeBtn from './Common/DarkModeBtn';
import NavbarButtonUI from './UI/NavbarButtonUI';

const Navbar: React.FC = () => {
  const { toggleTempUnit, selectedTempUnit } = useWeather();

  return (
    <nav className="sticky mx-3 flex h-12 items-center justify-between">
      <h1>Weather Task</h1>
      <ul className="flex gap-2">
        <li>
          <NavbarButtonUI>
            <button onClick={() => toggleTempUnit()}>{selectedTempUnit}</button>
          </NavbarButtonUI>
        </li>
        <li>
          <NavbarButtonUI>
            <DarkModeBtn />
          </NavbarButtonUI>
        </li>
        <li>
          <NavbarButtonUI>
            <Link href="/">Home</Link>
          </NavbarButtonUI>
        </li>
        <li>
          <NavbarButtonUI>
            <Link href="/favorites">Favorites</Link>
          </NavbarButtonUI>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
