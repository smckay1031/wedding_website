import Link from "next/link";
import "./nav.css"

export default function Nav() {
  return (
  <>
    <div className="flex justify-between items-center z-100 text-cyan-950 bg-slate-50/30 bg-blur-md w-full overflow-hidden px-4 py-12">
      <div className="font-header w-80 text-center z-100">
        <p className="text-2xl font-semibold z-100"> Sean & Alana</p>
      </div>
      <ul className=" flex space-x-3 font-body w-full flex justify-center text-sm font-semibold z-100">
        <li className="relative">
          <Link href="/" className="navLink">Home</Link>
        </li>
        <li>
          <Link href="/travel" className="navLink">Travel</Link>
        </li>
         <li>
            <Link href="https://themagnoliavenue.com/faqs" target="blank" className="navLink">FAQs</Link>
         </li>
         <li>
            <Link href="/to_do" className="navLink">Things To Do</Link>
         </li>
         <li>
            <Link href="/rsvp" className="navLink">RSVP</Link>
         </li>

      </ul>
    </div>
  </>
  );
}
