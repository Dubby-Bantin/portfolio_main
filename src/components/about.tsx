import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center w-full">
      <h1 className={cn("text_gradient text-3xl font-bold", montserrat.className)}>About me</h1>
      Hi, I’m Nwobodo Chidubem Desmond, a dedicated front-end web developer
      focused on creating clean and user-friendly web applications. I started
      coding in November 2024 and have developed skills in various technologies.
      I’m always learning and enjoy exploring new frameworks and sharing
      knowledge through TipVault, where I contribute programming tips. When I’m
      not coding, I love staying updated on tech trends, playing football, and
      working on side projects.
    </div>
  );
};

export default About;
