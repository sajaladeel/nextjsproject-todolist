import Link from "next/link";

export default function Home() {
  return (

    <div className="main-bg h-[calc(100vh-60px)] flex flex-col
    justify-center  items-center gap-10">
      <h1 className="text-6xl font-bold text-white">
        My Todo Project 
      </h1>
      <h2 className="text-3xl font-bold text-white"> You can add Your Daily tasks here </h2>
      <Link className="bg-white
      p-1 rounded text-black text-2xl px-4
      hover:text-white
      hover:bg-gray-800 outline-double
      "href={'/todo'}>Get Started</Link>
    </div> 
  );
}
