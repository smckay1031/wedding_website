import Image from "next/image"; 
import mountains from "../photos/mountains.jpg";

export default function Footer() {
  return (
    <footer className="bg-transparent bg-backdrop-blur-md">
      <div className="">
      </div>
    <Image 
        src={mountains}
        alt="Mountains"
        className="w-full h-full object-cover opacity-50 px-10"
        width={1920}
        height={1080}
        />
    </footer>
  );
}