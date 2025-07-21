import Link from "next/link";
import "./nav.css"

export default function Nav() {
  return (
    <nav className="flex justify-between items-center z-100 bg-gray-900/0 rounded-sm w-full overflow-hidden px-4">
      <div className="font-header w-80 text-center z-100">
        <p className="text-2xl font-semibold z-100"> Alana & Sean</p>
      </div>
      <ul className="flex space-x-3 font-body w-full flex justify-center text-sm font-semibold z-100">
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