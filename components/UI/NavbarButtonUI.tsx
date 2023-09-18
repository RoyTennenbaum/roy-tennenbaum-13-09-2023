'use client';

import { Props } from '@/types/global';

const NavbarButtonUI = ({ children }: Props) => {
  return (
    <div className="rounded-lg bg-indigo-400 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600">
      {children}
    </div>
  );
};

export default NavbarButtonUI;
