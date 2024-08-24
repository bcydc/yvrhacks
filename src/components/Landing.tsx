export default function Landing() {
  return (
    <div className="flex w-[1200px] flex-col items-center gap-6 pt-20">
      <div className="flex flex-col items-start">
        <h1 className="font-cloudy title-shadow text-[9rem] font-bold text-white">
          yvrHacks
        </h1>
        <div className="flex flex-col pl-24">
          <p className="text-2xl font-semibold text-white">
            Sun, Sep 29 | BC’s Biggest High School Hackathon
          </p>
          <p className="text-2xl font-medium text-white text-opacity-80">
            <i className="fas fa-map-marker-alt" /> Vancouver Independent School
            for Science & Tech
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded bg-sky-500 px-8 py-3">
          <p className="text-2xl font-medium text-white">Sign up</p>
        </div>
        <div className="flex items-center gap-3 rounded bg-sky-700 px-8 py-3">
          <i className="fab fa-discord text-2xl text-white" />
          <p className="text-2xl font-medium text-white">Join our Discord</p>
        </div>
      </div>
    </div>
  );
}
