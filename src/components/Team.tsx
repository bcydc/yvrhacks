export default function Team() {
  return (
    <div className="flex w-full flex-col items-center gap-20 px-6 py-24 md:w-[1200px] md:px-0">
      <div className="flex flex-col items-center gap-2">
        <h3 id="prizes" className="text-5xl font-bold text-white">
          The Team
        </h3>
        <h6 className="text-lg font-light text-white md:text-3xl">
          Leading the British Columbia Youth Developer Collective
        </h6>
      </div>
      <div className="flex w-full flex-col gap-20">
        <div className="flex w-full items-center justify-around">
          <Member name="Kevin Thomas" image="kevin.png" role="President" />
          <Member name="Vuk Tacic" image="vuk.png" role="Vice President" />
        </div>
        <div className="flex w-full items-center justify-around">
          <Member name="Ethan Jin" image="ethan.png" role="Marketing Lead" />
          <Member name="Shanvanth A" image="shaun.png" role="Logistics" />
          <Member
            name="Johnny Dong"
            image="johnny.png"
            role="Logistics & Treasury"
          />
          <Member name="Simon Wong" image="simon.png" role="Sponsorship" />
        </div>
        <div className="flex w-full items-center justify-around">
          <Member name="Freddie Zhang" image="freddie.png" role="Marketing" />
          <Member name="Carol Wu" image="carol.png" role="Logistics & Food" />
          <Member name="Shlok Shah" image="shlok.png" role="Marketing" />
        </div>
      </div>
    </div>
  );
}

function Member({
  name,
  image,
  role,
}: {
  name: string;
  image: string;
  role: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={`/images/team/${image}`} alt={name} className="w-56" />
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold text-white">{name}</p>
        <p className="text-xl text-white">{role}</p>
      </div>
    </div>
  );
}
