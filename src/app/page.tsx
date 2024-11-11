import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import BCYDC from "@/components/BCYDC";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-screen flex-col items-center overflow-hidden bg-sky-600">
      <div className="flex w-full items-center justify-center bg-sky-100 px-4 py-4">
        <div className="flex flex-col items-center justify-between gap-2 md:w-[1200px] md:flex-row md:gap-0">
          <div className="flex flex-row items-center gap-4">
            <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded bg-sky-200 md:h-12 md:w-12">
              <i className="fas fa-sparkles text-lg text-sky-500 md:text-xl" />
            </div>
            <p className="text-xs font-medium text-sky-600 md:text-base">
              yvrHacks was hosted on September 29 at VISST! See photos,
              projects, finances, and more:
            </p>
          </div>
          <div className="flex w-full flex-row items-center justify-center gap-2 md:w-auto">
            <a
              target="_blank"
              href="https://bcydc.ca/program/yvrhacks"
              className="flex flex-1 transform items-center justify-center gap-3 rounded bg-sky-200 px-4 py-2 transition duration-200 hover:scale-[1.02] hover:bg-sky-300 md:flex-grow-0"
            >
              <p className="text-xs font-medium text-sky-600 md:text-base">
                Photos
              </p>
              <i className="fas fa-external-link-alt text-xs text-sky-600" />
            </a>
            <a
              target="_blank"
              href="https://yvrhacks.devpost.com/project-gallery"
              className="flex flex-1 transform items-center justify-center gap-3 rounded bg-sky-200 px-4 py-2 transition duration-200 hover:scale-[1.02] hover:bg-sky-300 md:flex-grow-0"
            >
              <p className="text-xs font-medium text-sky-600 md:text-base">
                Projects
              </p>
              <i className="fas fa-external-link-alt text-xs text-sky-600" />
            </a>
            <a
              target="_blank"
              href="https://hcb.hackclub.com/yvrhacks"
              className="flex flex-1 transform items-center justify-center gap-3 rounded bg-sky-200 px-4 py-2 transition duration-200 hover:scale-[1.02] hover:bg-sky-300 md:flex-grow-0"
            >
              <p className="text-xs font-medium text-sky-600 md:text-base">
                Finances
              </p>
              <i className="fas fa-external-link-alt text-xs text-sky-600" />
            </a>
          </div>
        </div>
      </div>
      <Navbar />
      <Landing />
      <img
        alt="Landing"
        src="/images/skyline.svg"
        className="left-0 mt-4 w-screen md:-mt-10"
      />
      <div className="flex w-screen flex-col items-center bg-sky-800">
        <About />
      </div>
      <div className="flex w-screen flex-col items-center bg-sky-900">
        <Sponsors />
      </div>
      <div className="flex w-screen flex-col items-center bg-sky-800">
        <FAQ />
      </div>
      <div className="flex w-screen flex-col items-center bg-sky-900">
        <Team />
      </div>
      <div className="flex w-screen flex-col items-center bg-sky-800">
        <BCYDC />
      </div>
    </div>
  );
}
