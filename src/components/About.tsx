export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center gap-16 px-6 py-16 md:w-[1200px] md:gap-20 md:px-0 md:py-24"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold text-white md:text-4xl">
          Welcome to BC&apos;s Biggest Youth Hackathon
        </h2>
        <p className="text-center text-lg text-white text-opacity-80 md:max-w-5xl md:text-4xl">
          yvrHacks is where beginners and young innovators come together to
          learn, collaborate, and create.
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-center gap-2 text-3xl font-black text-white md:gap-12 md:text-7xl">
          <h3>8 hours</h3>
          <h3>40+ students</h3>
          <h3>$500+ prizes</h3>
        </div>
        <img
          src="/images/science-world.svg"
          alt="Science World"
          className="h-40 md:h-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-20">
        <img
          src="/images/visst.svg"
          alt="Vancouver Independent School for Science and Technology"
        />
        <div className="flex flex-col gap-4 text-white">
          <h3 className="text-3xl font-bold text-white md:text-5xl">
            <i className="fas fa-map-marker-alt" /> VISST
          </h3>
          <p className="text-2xl font-light">
            Vancouver Independent School for Science and Technology is a
            not-for-profit high school offering rigorous STEM education through
            real-world applications.
          </p>
          <p className="text-2xl font-light">
            They have generously offered their space as a venue for yvrHacks.
            VISST is accessible by rapid transit through the 99 B-Line.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-white md:text-5xl">
            Schedule
          </h3>
          <h6 className="text-lg font-light text-white md:text-3xl">
            Stay tuned for workshops, games, and activities throughout the
            hackathon!
          </h6>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row">
          <div className="flex w-full flex-col gap-1 rounded bg-black bg-opacity-10 p-6 text-white">
            <h6 className="text-xl font-bold">Opening Ceremony</h6>
            <h6 className="text-4xl font-bold">10am</h6>
          </div>
          <div className="flex w-full flex-col gap-1 rounded bg-black bg-opacity-20 p-6 text-white">
            <h6 className="text-xl font-bold">Lunch Break</h6>
            <h6 className="text-4xl font-bold">1pm</h6>
          </div>
          <div className="flex w-full flex-col gap-1 rounded bg-black bg-opacity-30 p-6 text-white">
            <h6 className="text-xl font-bold">Submission</h6>
            <h6 className="text-4xl font-bold">5pm</h6>
          </div>
          <div className="flex w-full flex-col gap-1 rounded bg-black bg-opacity-40 p-6 text-white">
            <h6 className="text-xl font-bold">Closing Ceremony</h6>
            <h6 className="text-4xl font-bold">6pm</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
