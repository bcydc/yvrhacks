import About from "@/components/About";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-screen flex-col items-center bg-sky-600">
      <Navbar />
      <Landing />
      <img
        alt="Landing"
        src="/images/skyline.svg"
        className="left-0 -mt-10 w-screen"
      />
      <div className="flex w-screen flex-col items-center bg-sky-800">
        <About />
      </div>
    </div>
  );
}
