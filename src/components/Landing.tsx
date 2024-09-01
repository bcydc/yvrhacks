export default function Landing() {
  return (
    <div className="flex w-full flex-col items-center gap-6 px-6 py-10 md:w-[1200px] md:px-0 md:pt-20">
      <div className="flex flex-col items-center gap-4 md:items-start md:gap-0">
        <h1 className="font-cloudy title-shadow text-6xl font-bold text-white md:text-[11rem] md:leading-normal">
          yvrHacks
        </h1>
        <div className="flex flex-col gap-2 md:-mt-8 md:pl-32">
          <p className="text-sm font-semibold text-white md:text-3xl">
            Sunday, Sep 29 | BC&apos;s Biggest High School Hackathon
          </p>
          <p className="text-sm font-medium text-white text-opacity-80 md:text-3xl">
            <i className="fas fa-map-marker-alt" /> Vancouver Independent School
            for Science & Technology
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a className="flex items-center rounded bg-sky-400 px-6 py-2 transition duration-300 hover:bg-sky-500 md:px-8 md:py-5">
          <p className="select-none text-lg font-medium text-white md:text-3xl">
            Sign up
          </p>
        </a>
        <a
          target="_blank"
          href="https://discord.bcydc.ca/"
          className="flex items-center gap-3 rounded bg-sky-700 px-6 py-2 transition duration-300 hover:bg-sky-800 md:px-12 md:py-5"
        >
          <i className="fab fa-discord select-none text-lg text-white md:text-2xl" />
          <p className="select-none text-lg font-medium text-white md:text-3xl">
            Join our Discord
          </p>
        </a>
      </div>
    </div>
  );
}
