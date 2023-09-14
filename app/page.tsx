import Search from '@/components/Search/Search';
import Main from '@/components/Main/Main';

export default function Home() {
  return (
    <main className="flex h-full flex-col px-4 md:px-20 lg:px-40 xl:px-60">
      <Search />
      <Main />
    </main>
  );
}
