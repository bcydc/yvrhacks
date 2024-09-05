export default function Navbar() {
  return (
    <div
      id="navbar"
      className="flex w-full items-center justify-between px-6 py-4 md:w-[1200px] md:px-0 md:py-10"
    >
      <div className="flex items-center gap-3 text-xl text-white md:gap-6 md:text-3xl">
        <a href="#navbar">Home</a>
        <a href="#about">About</a>
        <a href="#prizes">Prizes</a>
        <a href="#sponsors" className="hidden md:inline">
          Sponsors
        </a>
        <a href="#team" className="hidden md:inline">
          Team
        </a>
        {/* <a href="#faq">FAQ</a> */}
      </div>
      <div className="flex items-center gap-2 text-xl text-white md:gap-4 md:text-3xl">
        <a href="https://discord.bcydc.ca/" target="_blank">
          <i className="fab fa-discord" />
        </a>
        <a href="https://instagram.com/bcydc" target="_blank">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  );
}
