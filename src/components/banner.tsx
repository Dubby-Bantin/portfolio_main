import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ContactButton from "./common/contact_button";
import { MailOpen } from "lucide-react";
import { Button } from "./ui/button";
import { IoIosCloudDownload } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center p-20 md:px-20 px-10 md:py-40 text-center gap-3">
      <Image
        src="/images/logo.png"
        alt="logo"
        height={250}
        width={250}
        className="rounded-full"
      />

      <small>Dynamic Web Magic with Next.js</small>
      <h1
        className={cn(
          "md:text-5xl font-semibold text_gradient lg:mx-50",
          montserrat.className
        )}
      >
        Transforming Concepts into Seamless User Experiences
      </h1>
      <p className="">
        Hi! I&apos;m Chidubem Desmond, a Next.js web developer based in Georgia.
      </p>
      <div className="flex items-center gap-5">
        <ContactButton size={"lg"} Icon={<MailOpen />} />
        <Button asChild variant={"outline"} size={"lg"}>
          <a href="/files/resume.pdf" download>
            {" "}
            Resume <IoIosCloudDownload />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Banner;

//

//
//
