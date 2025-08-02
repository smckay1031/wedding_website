import hero from "../../photos/IMG_1844.jpeg";
import mouintains from "../../photos/watercolor_mountains.jpg";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <div className="relative">
      <div className=" top-0 w-full h- top-0 z-0">
        <Image
          src={hero}
          alt="Alana and Sean"
          className="w-full h-screen object-cover"
          width={1920}
          height={1080} 
          />
      </div>
      <div className=" relative sticky z-50 flex flex-col items-center justify-center min-h-screen w-full text-black bg-gradient-to-b from-slate-200 to- bg-opacity-5 bg-blur-md">
        <div>
          <h2 className="font-body text-6xl w-full text-center font-bold py-10 "> Date</h2>
          <h3 className="font-body text-6xl "> May 1st 2026</h3>
        </div>
        
      </div>
    </div>
    </>
  );
}
