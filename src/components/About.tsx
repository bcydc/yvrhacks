export default function About() {
  return (
    <div className="flex w-[1200px] flex-col items-center gap-20 py-24">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-white">
          Welcome to BC&apos;s Biggest Youth Hackathon
        </h2>
        <p className="max-w-5xl text-center text-4xl text-white text-opacity-80">
          yvrHacks is where beginners and young innovators come together to
          learn, collaborate, and create.
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-center gap-12 text-7xl font-black text-white">
          <h3>8 hours</h3>
          <h3>40+ students</h3>
          <h3>$500+ prizes</h3>
        </div>
        <img src="/images/science-world.svg" alt="Science World" />
      </div>
      <div className="flex items-center justify-between gap-20">
        <img
          src="/images/visst.svg"
          alt="Vancouver Independent School for Science and Technology"
        />
        <div className="flex flex-col gap-4 text-white">
          <h3 className="text-5xl font-bold text-white">
            <i className="fas fa-map-marker-alt" /> VISST
          </h3>
          <p className="text-lg font-light">
            Vancouver Independent School for Science and Technology is a
            non-profit high school offering rigorous STEM education through
            real-world applications.
          </p>
          <p className="text-lg font-light">
            They have generously offered their space as a venue for yvrHacks.
            VISST is accessible by rapid transit through the 99 B-Line.
          </p>
          <p className="text-lg font-light">
            VISST is accessible by rapid transit through the 99 B-Line.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-2">
        <h3 className="text-4xl font-bold text-white">Schedule</h3>
        <h6 className="text-2xl font-light text-white">
          Stay tuned for workshops, games, and activities throughout the
          hackathon!
        </h6>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex w-full flex-col gap-1 rounded bg-black bg-opacity-10 p-6 text-white">
            <h6 className="text-lg font-bold">Opening Ceremony</h6>
            <h6 className="text-4xl font-bold">10am</h6>
          </div>
          <div className="flex w-full flex-col gap-1 rounded bg-black bg-opacity-20 p-6 text-white">
            <h6 className="text-lg font-bold">Lunch Break</h6>
            <h6 className="text-4xl font-bold">1pm</h6>
          </div>
          <div className="flex w-full flex-col gap-1 rounded bg-black bg-opacity-30 p-6 text-white">
            <h6 className="text-lg font-bold">Submission</h6>
            <h6 className="text-4xl font-bold">5pm</h6>
          </div>
          <div className="flex w-full flex-col gap-1 rounded bg-black bg-opacity-40 p-6 text-white">
            <h6 className="text-lg font-bold">Closing Ceremony</h6>
            <h6 className="text-4xl font-bold">6pm</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
