export default function Sponsors() {
  return (
    <div className="flex w-full flex-col items-start gap-20 px-6 py-24 md:w-[1200px] md:px-0">
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 id="prizes" className="text-5xl font-bold text-white">
            Prizes
          </h3>
          <h6 className="text-lg font-light text-white md:text-3xl">
            We will announce lots of prizes soon!
          </h6>
        </div>
        <div className="flex w-full select-none flex-wrap items-center justify-between gap-14">
          <div className="flex h-[360px] w-[360px] rotate-1 flex-col gap-4 rounded bg-black bg-opacity-15 p-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-trophy text-2xl text-white" />
              <h3 className="text-2xl font-bold text-white">
                First Place Prize
              </h3>
            </div>
            <ul className="w-full list-inside list-disc text-xl text-white blur-md">
              <li>Haha nice try</li>
              <li>Get jebaited</li>
              <li>Trust me they will be</li>
              <li>worth the wait!</li>
              <li>Probably a decent chunk of cash</li>
              <li>and quite a few subscriptions tbh</li>
            </ul>
          </div>
          <div className="flex h-[360px] w-[360px] -rotate-2 flex-col gap-4 rounded bg-black bg-opacity-15 p-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-medal text-2xl text-white" />
              <h3 className="text-2xl font-bold text-white">
                Second Place Prize
              </h3>
            </div>
            <ul className="w-full list-inside list-disc text-xl text-white blur-md">
              <li>Haha nice try</li>
              <li>Get jebaited</li>
              <li>Trust me they will be</li>
              <li>worth the wait!</li>
              <li>Probably a decent chunk of cash</li>
              <li>and quite a few subscriptions tbh</li>
            </ul>
          </div>
          <div className="flex h-[360px] w-[360px] rotate-2 flex-col gap-4 rounded bg-black bg-opacity-15 p-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-image text-2xl text-white" />
              <h3 className="text-2xl font-bold text-white">
                Most On Theme Prize
              </h3>
            </div>
            <ul className="w-full list-inside list-disc text-xl text-white blur-md">
              <li>Haha nice try</li>
              <li>Get jebaited</li>
              <li>Trust me they will be</li>
              <li>worth the wait!</li>
              <li>Probably a decent chunk of cash</li>
              <li>and quite a few subscriptions tbh</li>
            </ul>
          </div>
          <div className="flex h-[360px] w-[360px] -rotate-2 flex-col gap-4 rounded bg-black bg-opacity-15 p-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-baby text-2xl text-white" />
              <h3 className="text-2xl font-bold text-white">
                Best Beginner Hack
              </h3>
            </div>
            <ul className="w-full list-inside list-disc text-xl text-white blur-md">
              <li>Haha nice try</li>
              <li>Get jebaited</li>
              <li>Trust me they will be</li>
              <li>worth the wait!</li>
              <li>Probably a decent chunk of cash</li>
              <li>and quite a few subscriptions tbh</li>
            </ul>
          </div>
          <div className="flex h-[360px] w-[360px] -rotate-2 flex-col items-center justify-center gap-4 rounded bg-black bg-opacity-15 p-6">
            <h3 className="text-center text-4xl font-bold leading-normal text-white">
              More Coming Soon!
            </h3>
          </div>
          <div className="w-[360px]" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 id="prizes" className="text-5xl font-bold text-white">
            Sponsors
          </h3>
          <h6 className="text-lg font-light text-white md:text-3xl">
            Thank you to our sponsors for making yvrHacks possible!
          </h6>
        </div>
        <div className="grid grid-cols-3 items-center gap-20">
          <a>
            <img src="/images/sponsors/hackclub.png" alt="Hack Club" />
          </a>
          <a>
            <img src="/images/sponsors/tks.png" alt="The Knowledge Society" />
          </a>
          <a>
            <img src="/images/sponsors/hcb.png" alt="Hack Club Bank" />
          </a>

          <a>
            <img src="/images/sponsors/codecrafters.png" alt="CodeCrafters" />
          </a>
          <a>
            <img src="/images/sponsors/axure.png" alt="Axure" />
          </a>
          <a>
            <img src="/images/sponsors/steves.png" alt="Steve's Poke Bar" />
          </a>
          <a>
            <img src="/images/sponsors/moodfit.png" alt="Moodfit" />
          </a>
        </div>
      </div>
    </div>
  );
}
