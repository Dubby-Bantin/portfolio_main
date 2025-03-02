// import About from "@/components/about";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import WorkApproach from "@/components/work_approach";

export default function Home() {
  return (
    <>
      <Banner />
      {/* <About /> */}
      <WorkApproach />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
