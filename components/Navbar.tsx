'use client';

import Link from 'next/link';
import { useWeather } from './Store/WeatherStore';
import DarkModeBtn from './Common/DarkModeBtn';
import NavbarButtonUI from './UI/NavbarButtonUI';

const Navbar: React.FC = () => {
  const { toggleTempUnit, selectedTempUnit } = useWeather();

  return (
    <nav className="sticky flex h-12 items-center justify-between bg-modeLightAccBg p-3 shadow-xl dark:bg-modeDarkAccBg">
      <h1 className="text-2xl font-black">Weather Task</h1>
      <ul className="flex gap-1">
        <li>
          <NavbarButtonUI>
            <button onClick={() => toggleTempUnit()}>
              View: {selectedTempUnit}°
            </button>
          </NavbarButtonUI>
        </li>
        <li className="mr-2">
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
