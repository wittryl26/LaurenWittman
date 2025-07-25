import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui/button";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-30 p-4 md:p-8 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/images/sothebys-logo-white.png"
          alt="Sotheby's Logo"
          width={150}
          height={40}
        />
      </Link>
      <nav className="hidden md:flex gap-8 items-center text-white">
        <Link href="/listings">Listings</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Button variant="outline">Sign In</Button>
      </nav>
      <div className="md:hidden">
        <Button variant="outline">Menu</Button>
      </div>
    </header>
  );
}
