import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen items-center bg-sky-600">
      <Navbar />
      <Landing />
      <img
        alt="Landing"
        src="/images/skyline.svg"
        className="w-screen left-0 -mt-10"
      />
    </div>
  );
}
