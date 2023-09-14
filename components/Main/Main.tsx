const Main: React.FC = () => {
  return (
    <section className="flex grow items-start bg-white opacity-70">
      <section className="flex grow justify-between">
        <div className="flex flex-col items-stretch">
          <span>Tel Aviv</span>
          <span>38C</span>
        </div>
        <button>ADD TO FAVORITES</button>
      </section>
      <section></section>
    </section>
  );
};

export default Main;
