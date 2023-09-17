'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

const DarkModeBtn = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="inset-0 m-0 h-6 w-6 cursor-pointer border-none bg-transparent p-0"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme === 'dark' ? (
        <Image
          src={'/images/lightMode.svg'}
          alt="lightModeSwitch"
          className="h-[26px] w-[26px] stroke-white stroke-2 hover:stroke-green-200 hover:transition hover:duration-300 hover:ease-in-out"
          width={24}
          height={24}
          onClick={() => {
            setTheme('light');
          }}
        />
      ) : (
        <Image
          src={'/images/darkMode.svg'}
          alt="darkModeSwitch"
          className="h-6 w-6 stroke-black stroke-2 hover:stroke-purple-500 hover:transition hover:duration-300 hover:ease-in-out"
          width={24}
          height={24}
          onClick={() => {
            setTheme('dark');
          }}
        />
      )}
    </button>
  );
};

export default DarkModeBtn;
