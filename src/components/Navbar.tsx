export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-[1200px] py-8">
      <div className="flex items-center text-2xl text-white gap-6">
        <a>Home</a>
        <a>About</a>
        <a>Sponsors</a>
        <a>Team</a>
        <a>FAQ</a>
      </div>
      <div className="text-2xl text-white gap-3 flex items-center">
        <i className="fab fa-discord" />
        <i className="fab fa-instagram" />
      </div>
    </div>
  );
}
