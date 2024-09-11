export default function Team() {
  return (
    <div className="flex w-full flex-col items-center gap-20 px-6 py-24 md:w-[1200px] md:px-0">
      <div className="flex flex-col items-center gap-2">
        <h3
          id="team"
          className="text-center text-4xl font-bold text-white md:text-7xl"
        >
          The Team
        </h3>
        <h6 className="text-center text-lg font-light text-white md:text-3xl">
          Leading the British Columbia Youth Developer Collective
        </h6>
      </div>
      <div className="flex w-full flex-col gap-10 md:gap-20">
        <div className="flex w-full flex-col items-center justify-around gap-10 md:flex-row md:gap-0">
          <Member
            name="Kevin Thomas"
            image="kevin.png"
            role="President"
            href="https://kevinjosethomas.com/"
          />
          <Member
            name="Vuk Tacic"
            image="vuk.png"
            role="Vice President"
            href="https://www.linkedin.com/in/vuktacic/"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-around gap-10 md:flex-row md:gap-0">
          <Member
            name="Ethan Jin"
            image="ethan.png"
            role="Marketing Lead"
            href="https://www.linkedin.com/in/ethan-jin-0743722ab/"
          />
          <Member name="Shanvanth A" image="shaun.png" role="Logistics" />
          <Member
            name="Johnny Dong"
            image="johnny.png"
            role="Logistics & Treasury"
            href="https://www.linkedin.com/in/johnny-dong2007/"
          />
          <Member name="Simon Wong" image="simon.png" role="Sponsorship" />
        </div>
        <div className="flex w-full flex-col items-center justify-around gap-10 md:flex-row md:gap-0">
          <Member name="Carol Wu" image="carol.png" role="Logistics & Food" />
          <Member name="Freddie Zhang" image="freddie.png" role="Marketing" />
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
  href,
}: {
  name: string;
  image: string;
  role: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={`/images/team/${image}`} alt={name} className="w-56" />
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold text-white">{name}</p>
          {href && (
            <a href={href} target="_blank">
              <i className="fas fa-external-link-alt text-2xl text-white" />
            </a>
          )}
        </div>
        <p className="text-xl text-white">{role}</p>
      </div>
    </div>
  );
}
