import { cn } from "@/lib/utils";
import { montserrat } from "@/lib/fonts";
import { Button } from "../ui/button";
import Link from "next/link";
import { ReactNode } from "react";
const ContactButton = ({
  Icon,
  size,
}: {
  Icon: ReactNode;
  size: "sm" | "lg" | "icon";
}) => {
  return (
    <Button
      className="text-sm md:flex hidden"
      asChild
      variant={"outline"}
      size={size}
    >
      <Link
        className={
          (cn("flex items-center justify-center gap-3"), montserrat.className)
        }
        href={"#contact"}
      >
        Contact {Icon}
      </Link>
    </Button>
  );
};

export default ContactButton;
