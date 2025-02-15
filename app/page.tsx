import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <div className="lg:w-[75vw] md:mx-auto mt-24 sm:px-8 flex flex-col flex-nowrap rounded fade-in-up">
        <div className="w-full mx-3 mt-12 pt-12 pb-4 flex flex-row sm:justify-start md:justify-center items-center">
          <h1 className="text-5xl text-white font-semibold fade-in-up">Startup Founder's Assessment</h1>
        </div>
        <div className="w-full mx-3 mt-4 pt-8 pb-20 flex flex-row sm:justify-start md:justify-center items-center">
          <Link href="/form" className="text-xl tracking-wider bg-cyan-200 px-6 py-4 rounded-lg hover:bg-cyan-400 fade-in-up">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
