export default function Landing() {
  return (
    <div className="flex w-full flex-col items-center gap-6 px-6 py-10 md:w-[1200px] md:px-0 md:pt-20">
      <div className="flex flex-col items-center gap-4 md:items-start md:gap-0">
        <h1 className="font-cloudy title-shadow text-6xl font-bold text-white md:text-[9rem] md:leading-normal">
          yvrHacks
        </h1>
        <div className="flex flex-col gap-1 md:-mt-8 md:gap-0 md:pl-24">
          <p className="text-sm font-semibold text-white md:text-2xl">
            Sun, Sep 29 | BC&apos;s Biggest High School Hackathon
          </p>
          <p className="text-sm font-medium text-white text-opacity-80 md:text-2xl">
            <i className="fas fa-map-marker-alt" /> Vancouver Independent School
            for Science & Tech
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded bg-sky-500 px-6 py-2 md:px-8 md:py-3">
          <p className="text-lg font-medium text-white md:text-2xl">Sign up</p>
        </div>
        <div className="flex items-center gap-3 rounded bg-sky-700 px-6 py-2 md:px-8 md:py-3">
          <i className="fab fa-discord text-lg text-white md:text-2xl" />
          <p className="text-lg font-medium text-white md:text-2xl">
            Join our Discord
          </p>
        </div>
      </div>
    </div>
  );
}
