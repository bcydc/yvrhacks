export default function Navbar() {
  return (
    <div className="flex w-[1200px] items-center justify-between py-8">
      <div className="flex items-center gap-6 text-2xl text-white">
        <a>Home</a>
        <a>About</a>
        <a>Sponsors</a>
        <a>Team</a>
        <a>FAQ</a>
      </div>
      <div className="flex items-center gap-3 text-2xl text-white">
        <i className="fab fa-discord" />
        <i className="fab fa-instagram" />
      </div>
    </div>
  );
}
