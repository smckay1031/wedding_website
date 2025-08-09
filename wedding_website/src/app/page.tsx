import hero from "../../photos/IMG_1844.jpeg"
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
      <div className=" relative sticky z-50 flex flex-col items-center justify-center min-h-screen w-full text-black px-30 py-48">
        <div className="flex items-center justify center flex-col">
          <h2 className="font-header text-6xl w-full text-center font-semibold py-8"> Sean McKay & <br></br>Alana Paris</h2>
          <h3 className="font-body text-4xl"> May 1st 2026</h3>
          <p className="font-body text-xl py-3"> Pigeon Forge TN</p>
        </div>
        <div className="flex justify-center items-center flex-col w-full mt-64">
          <h4 className="font-header font-semibold text-4xl">The Venue</h4>
          <div className="py-4 text-center">
            <p className="font-body text-2xl"> <a href="https://themagnoliavenue.com/" target="blank" className="hover:underline">The Magnolia</a></p>
            <p className="font-body text-2xl"> 1120 Eagle Point Way </p>
            <p className="font-body text-2xl"> Pigeon Forge, TN 37863</p>
          </div>
          <div className="flex justify-center items-center flex-col w-full mt-64">
            <h5 className="font-header font-semibold text-4xl pb-6">What to Expect</h5>
            <p className="font-body"> We invite you to join us for a truly memorable celebration as we exchange vows surrounded by the stunning Great Smokey Mountains. The fresh mountain air, panoramic views and open skies will provide a unique and unforgetable backdrop for our enchanted ceremony. Your presence will make this special day even more meaningful as we celebrate our love in a place that reflects the beauty of the joy that we feel.  </p>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
