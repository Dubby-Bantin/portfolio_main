import Link from "next/link";
import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { montserrat } from "@/lib/fonts";
import axios from "axios";
import { log, error } from "console";
import ContactFomrButton from "./submit_button";

const Contact = () => {
  return (
    <section
      id="contact"
      className={cn(
        "flex flex-col justify-center items-center px-4 lg:px-8 py-16 lg:py-24 w-full",
        montserrat.className
      )}
    >
      <div className="mb-12 max-w-2xl text-center">
        <h1 className="mb-4 font-bold text-4xl">Contact me</h1>
        <p className="text-gray-600 text-lg">
          I&apos;d love to hear from you! Please reach out with any
          questions,proposals, suggestions, or feedback.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-start gap-12 lg:gap-16 w-full max-w-3xl">
        <div className="flex-1 space-y-6 w-full sm:w-fit">
          <form
            action={async (formData: FormData) => {
              "use server";

              const name = formData.get("name") as string;
              const email = formData.get("email") as string;
              const subject = formData.get("subject") as string;
              const message = formData.get("message") as string;

              try {
                const res = await axios.post(
                  "https://api.web3forms.com/submit",
                  {
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    name,
                    email,
                    subject,
                    message,
                  }
                );

                log(res.data);

                if (res.data.success) {
                  log("✅ Message sent successfully!");
                } else {
                  error("Error sending message:", res.data.message);
                }
              } catch (error) {
                console.error("API Error:", error);
              }
            }}
            className="space-y-4"
          >
            <Input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full"
              required
            />
            <Input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full"
            />
            <Textarea
              placeholder="Message"
              className="w-full h-40 resize-none"
              required
              name="message"
              id="message"
            />

            <ContactFomrButton />
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="font-semibold text-2xl">Get in Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out to me through any of the channels below.
          </p>
          <div className="space-y-2">
            <p className="text-gray-600">
              <strong>Email:</strong> cyberdez10@gmail.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1 404-839-4533
            </p>
          </div>

          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <Link
              href="#"
              aria-label="WhatsApp"
              className="hover:text-gray-400"
            >
              <FaWhatsapp size={24} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
