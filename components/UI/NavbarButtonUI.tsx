'use client';

import { Props } from '@/types/global';

const NavbarButtonUI = ({ children }: Props) => {
  return (
    <div className="flex justify-center truncate rounded-lg bg-orange-300 px-4 py-2 transition duration-300 ease-in-out hover:bg-orange-400 dark:bg-indigo-500 dark:hover:bg-indigo-600">
      {children}
    </div>
  );
};

export default NavbarButtonUI;
