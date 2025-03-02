import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});

export { poppins, montserrat };
