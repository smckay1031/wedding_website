import hero from "../../photos/IMG_1844.jpeg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="">
        <div>
          <div className=" absolute top-0 w-full h-screen top-0 z-0">
            <Image
              src={hero}
              alt="Alana and Sean"
              className="w-full h-auto object-cover"
              width={1920}
              height={1080} 
              />
            </div>
        </div>
    </div>
  );
}
