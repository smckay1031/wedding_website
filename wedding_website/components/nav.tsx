import Link from "next/link";
import "./nav.css"

export default function Nav() {
  return (
    <nav className="p-6 bg-background shadow">
      <div className="text-black font-header w-full py-4 text-center">
        <p className="text-5xl font-semibold"> Alana & Sean</p>
      </div>
      <ul className="flex space-x-4 font-body w-full flex justify-center text-md font-semibold">
        <li className="relative">
          <Link href="/" className="navLink">Home</Link>
        </li>
        <li>
          <Link href="/schedule" className="navLink">Schedule</Link>
        </li>
        <li>
          <Link href="/travel" className="navLink">Travel</Link>
        </li>
        <li>
            <Link href="/gallery" className="navLink">Gallery</Link>
        </li>
        <li>
            <Link href="/registry" className="navLink">Registry</Link>
         </li>
         <li>
            <Link href="/faqs" className="navLink">FAQs</Link>
         </li>
         <li>
            <Link href="/to_do" className="navLink">Things To Do</Link>
         </li>
         <li>
            <Link href="/rsvp" className="navLink">RSVP</Link>
         </li>

      </ul>
    </nav>
  );
}