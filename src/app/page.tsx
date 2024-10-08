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
