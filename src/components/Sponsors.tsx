export default function Sponsors() {
  return (
    <div className="flex w-full flex-col items-start gap-12 px-6 py-24 md:w-[1200px] md:gap-40 md:px-0">
      <div className="flex w-full flex-col gap-8 md:gap-14">
        <div className="flex flex-col items-center gap-2">
          <h3 id="prizes" className="text-4xl font-bold text-white md:text-7xl">
            Prizes
          </h3>
          <h6 className="text-center text-lg font-light text-white md:text-3xl">
            We will announce lots of prizes soon!
          </h6>
        </div>
        <div className="flex w-full select-none flex-wrap items-center justify-between gap-14">
          <Prize
            icon="fas fa-medal"
            title="First Place Prize"
            prizes={[
              "Haha nice try",
              "Get jebaited",
              "Trust me they will be",
              "worth the wait!",
              "Probably a decent chunk of cash",
              "and quite a few subscriptions tbh",
            ]}
            rotate="rotate-1"
          />
          <Prize
            icon="fas fa-medal"
            title="Second Place Prize"
            prizes={[
              "Haha nice try",
              "Get jebaited",
              "Trust me they will be",
              "worth the wait!",
              "Probably a decent chunk of cash",
              "and quite a few subscriptions tbh",
            ]}
            rotate="-rotate-2"
          />
          <Prize
            icon="fas fa-image"
            title="Most On Theme Prize"
            prizes={[
              "Haha nice try",
              "Get jebaited",
              "Trust me they will be",
              "worth the wait!",
              "Probably a decent chunk of cash",
              "and quite a few subscriptions tbh",
            ]}
            rotate="rotate-2"
          />
          <Prize
            icon="fas fa-baby"
            title="Best Beginner Hack"
            prizes={[
              "Haha nice try",
              "Get jebaited",
              "Trust me they will be",
              "worth the wait!",
              "Probably a decent chunk of cash",
              "and quite a few subscriptions tbh",
            ]}
            rotate="-rotate-2"
          />
          <div className="flex h-[360px] w-full -rotate-2 flex-col items-center justify-center gap-4 rounded bg-black bg-opacity-15 p-6 md:w-[360px]">
            <h3 className="text-center text-4xl font-bold leading-normal text-white">
              More Coming Soon!
            </h3>
          </div>
          <div className="w-[360px]" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 md:gap-14">
        <div className="flex flex-col items-center gap-2">
          <h3
            id="sponsors"
            className="text-4xl font-bold text-white md:text-7xl"
          >
            Sponsors
          </h3>
          <h6 className="text-center text-lg font-light text-white md:text-3xl">
            Thank you to our sponsors for making yvrHacks possible!
          </h6>
        </div>
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-3">
          <a target="_blank" href="https://hackclub.com/">
            <img src="/images/sponsors/hackclub.png" alt="Hack Club" />
          </a>
          <a target="_blank" href="https://tks.world/">
            <img src="/images/sponsors/tks.png" alt="The Knowledge Society" />
          </a>
          <a target="_blank" href="https://www.eimtechnology.com/">
            <img src="/images/sponsors/eim.png" alt="EIM Technology" />
          </a>
          <a target="_blank" href="https://gen.xyz/">
            <img src="/images/sponsors/xyz.png" alt=".xyz Domains" />
          </a>
          <a target="_blank" href="https://stevespokebar.ca/">
            <img src="/images/sponsors/steves.png" alt="Steve's Poke Bar" />
          </a>
          <a target="_blank" href="https://codecrafters.io/">
            <img src="/images/sponsors/codecrafters.png" alt="CodeCrafters" />
          </a>
          <a target="_blank" href="https://axure.com/">
            <img src="/images/sponsors/axure.png" alt="Axure" />
          </a>
          <a target="_blank" href="https://getmoodfit.com/">
            <img src="/images/sponsors/moodfit.png" alt="Moodfit" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Prize({
  icon,
  title,
  prizes,
  rotate,
}: {
  icon: string;
  title: string;
  prizes: string[];
  rotate: string;
}) {
  return (
    <div
      className={`flex h-[360px] w-full transform flex-col gap-4 rounded bg-black bg-opacity-15 p-6 duration-300 hover:scale-[1.02] md:w-[360px] ${rotate}`}
    >
      <div className="flex items-center gap-2">
        <i className={`${icon} text-2xl text-white`} />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <ul className="w-full list-inside list-disc text-xl text-white blur-md">
        {prizes.map((prize, index) => (
          <li key={index}>{prize}</li>
        ))}
      </ul>
    </div>
  );
}
