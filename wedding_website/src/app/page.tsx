import hero from "../../photos/IMG_1844.jpeg";
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
      <div className="sticky z-50 flex flex-col items-center justify-center h-screen w-full text-black">
        <p> some text</p>
      </div>
    </div>
    </>
  );
}
