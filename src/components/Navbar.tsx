export default function Navbar() {
  return (
    <div
      id="navbar"
      className="flex w-full items-center justify-between px-6 py-8 md:w-[1200px] md:px-0"
    >
      <div className="flex items-center gap-4 text-xl text-white md:gap-6 md:text-2xl">
        <a href="#navbar">Home</a>
        <a href="#about">About</a>
        <a href="#prizes">Prizes</a>
        <a href="#sponsors" className="hidden md:inline">
          Sponsors
        </a>
        <a href="#team" className="hidden md:inline">
          Team
        </a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="flex items-center gap-6 text-xl text-white md:gap-3 md:text-2xl">
        <i className="fab fa-discord" />
        <i className="fab fa-instagram" />
      </div>
    </div>
  );
}
