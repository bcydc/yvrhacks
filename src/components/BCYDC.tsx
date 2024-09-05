export default function BCYDC() {
  return (
    <div className="flex flex-col items-center gap-8 px-6 py-24 md:gap-20 md:px-0">
      <div className="flex flex-col items-center gap-2">
        <h3
          id="prizes"
          className="text-center text-4xl font-bold text-white md:text-7xl"
        >
          About BCYDC
        </h3>
        <h6 className="text-center text-lg font-light text-white md:text-3xl">
          The British Columbia Youth Developer Collective
        </h6>
      </div>
      <img
        src="/images/group.png"
        className="w-full"
        alt="British Columbia Youth Developer Collective"
      />
      <div className="flex flex-col items-center gap-20 md:flex-row">
        <img
          src="/images/bcydc.svg"
          className="order-2 h-32 w-32 md:order-1 md:h-64 md:w-64"
          alt="BCYDC"
        />
        <div className="order-1 flex flex-col items-center gap-8 md:order-2">
          <p className="max-w-3xl text-center text-xl font-light text-white md:text-3xl">
            yvrHacks is organized by BCYDC. We are a collective of over 200 high
            school students with a shared passion for computer science, software
            development, robotics, and technology.
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <a
              target="_blank"
              href="https://bcydc.ca"
              className="flex items-center rounded bg-sky-500 px-4 py-2 transition duration-300 hover:bg-sky-600 md:px-8 md:py-3"
            >
              <p className="select-none whitespace-nowrap text-base font-medium text-white md:text-2xl">
                Visit our Website
              </p>
            </a>
            <a
              target="_blank"
              href="https://discord.bcydc.ca/"
              className="flex items-center gap-3 rounded bg-sky-600 px-4 py-2 transition duration-300 hover:bg-sky-700 md:px-8 md:py-3"
            >
              <i className="fab fa-discord select-none text-base text-white md:text-2xl" />
              <p className="select-none whitespace-nowrap text-base font-medium text-white md:text-2xl">
                Join our Discord
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
