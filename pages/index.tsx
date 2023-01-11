import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-[#8a6109] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-orange scrollbar-thumb-[#f7abba]/40 scrollbar-thumb-rounded-lg">
      <Head>
        <title>Gunter's Portfolio</title>
      </Head>
      <main>{/* <h1 className="text-blue-800">Web Portfolio</h1> */}</main>
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start"></section>
      <Contact />
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <picture className="flex items-center justify-center">
              <source
                srcSet="https://haluskua.github.io/mywebsite/img/room5-small.jpg"
                type="image/webp"
              />
              <img
                className=" object-cover rounded-full border-border-[#f4faff] w-12 h-14 md:w-20 md:h-20 xl:w-28 xl:h-28 border-2 filter group-hover:grayscale transition duration-300 ease-in-out"
                src="https://haluskua.github.io/mywebsite/img/room5-small.jpg"
                alt="Landscape picture"
                width={100}
                height={50}
              />
            </picture>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
