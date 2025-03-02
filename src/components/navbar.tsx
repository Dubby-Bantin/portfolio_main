import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MailOpen, Menu } from "lucide-react";
import ContactButton from "./common/contact_button";
const Navbar = () => {
  return (
    <div className="text-sm flex justify-between items-center w-full backdrop-blur-lg p-1 top-0 z-50 sticky px-5">
      <div className="">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          height={50}
          width={50}
          className="rounded-full"
        />
      </div>
      <div className="md:flex items-center gap-5 hidden ">
        {navLinks.map(({ link, path }, i) => (
          <Link key={i} href={`#${path}`}>
            {link}
          </Link>
        ))}
      </div>{" "}
      <ContactButton size={"lg"} Icon={<MailOpen />} />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden shrink-0">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>
              {" "}
              <Link
                href="#"
                className="flex items-center gap-2 bg-dark rounded-md w-[3rem] h-[3rem] font-semibold text-lg"
              >
                <Image
                  alt="Logo"
                  src={"/images/logo.png"}
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              </Link>
            </SheetTitle>
            <SheetDescription>
              {navLinks.map(({ link, path }, i) => (
                <Link
                  key={i}
                  href={`#${path}`}
                  className="flex text-white items-center gap-4 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-xl transition-colors duration-200"
                >
                  {link}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
