import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky mx-3 flex h-10 items-center justify-between">
      <h1>Weather Task</h1>
      <ul className="flex gap-2">
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
