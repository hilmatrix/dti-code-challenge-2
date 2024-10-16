"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Header() {
    const pathname = usePathname();
    
    return (
        <header className="bg-black h-28 md:h-16 flex justify-center items-center relative flex-col md:flex-row">
          <div className='md:absolute left-4'>
            <Image src="/Logo-Numinus-Artspace.jpg" alt="logo-numinus-artspace" width={140} height={60}></Image>
          </div>  
          <nav className={`w-[80%] md:w-[40%]`}>
            <ul className="flex text-white justify-around">
                <li><Link href="/" className={pathname === "/" ? "underline" : ""}>Home</Link></li>
                <li><Link href="/about-us" className={pathname === "/about-us" ? "underline" : ""}>About Us</Link></li>
                <li><Link href="/services" className={pathname === "/services" ? "underline" : ""}>Services</Link></li>
                <li><Link href="/teams" className={pathname === "/teams" ? "underline" : ""}>Teams</Link></li>
            </ul>
          </nav>
        </header>
    );
}

