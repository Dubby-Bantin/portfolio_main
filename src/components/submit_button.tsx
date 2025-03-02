"use client"
import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { LuLoader } from "react-icons/lu";

const ContactFomrButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      variant="outline"
      className="w-full lg:w-auto cursor-pointer"
    >
      {pending ? <LuLoader className="animate-spin" /> : "Send Message"}
    </Button>
  );
};

export default ContactFomrButton;
