export default function Landing() {
  return (
    <div className="flex items-center flex-col w-[1200px] pt-20 gap-6">
      <div className="flex flex-col items-start">
        <h1 className="text-white font-bold text-[9rem] font-cloudy title-shadow">
          yvrHacks
        </h1>
        <div className="flex flex-col pl-24">
          <p className="text-white text-2xl font-semibold">
            Sun, Sep 29 | BC’s Biggest High School Hackathon
          </p>
          <p className="text-white text-2xl text-opacity-80 font-medium">
            <i className="fas fa-map-marker-alt" /> Vancouver Independent School
            for Science & Tech
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center px-8 py-3 rounded bg-sky-500">
          <p className="text-2xl text-white font-medium">Sign up</p>
        </div>
        <div className="flex items-center px-8 py-3 rounded bg-sky-700 gap-3">
          <i className="fab fa-discord text-2xl text-white" />
          <p className="text-2xl text-white font-medium">Join our Discord</p>
        </div>
      </div>
    </div>
  );
}
