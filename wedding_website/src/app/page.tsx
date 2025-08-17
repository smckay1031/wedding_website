
import Image from "next/image";

import painting from "../../photos/mountain-road-paint.jpg"

export default function Home() {
  return (
    <>
    <div className="relative">
      <div className=" min-h-screen w-full font-header flex flex-col items-center justify-center h-full text-center text-cyan-950 tracking-widest leading-loose px-12 py-24 text-4xl md:text-5xl lg:text-6xl font-semibold"> 
        <h1> Sean McKay
          <br />
          &
          <br />
           Alana Paris
        </h1>
        <h2 className="text-2xl md:text-3xl font-normal mt-8 py-6">
          May 1st, 2025
        </h2>
        <p className="text-xl font-normal leading-normal tracking-normal"> Pigeon Forge TN</p>
      </div>
    </div>
    </>
  );
}
