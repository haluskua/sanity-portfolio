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
    <div className="bg-[#4f6294] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin  scrollbar-thumb-[#58494c]/40 scrollbar-thumb-rounded-lg ">
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

      <footer className="flex flex-row justify-end sticky bottom-5 w-screen ">
        <div className="flex justify-self-end w-auto mr-10">
          <Link href="#hero">
            <picture className="cursor-pointer flex items-center justify-center">
              <source
                srcSet="https://haluskua.github.io/mywebsite/img/room5-small.jpg"
                type="image/webp"
              />
              <img
                className=" object-cover rounded-full border-border-[#f4faff] w-12 h-12  border-2 filter group-hover:grayscale transition duration-300 ease-in-out"
                src="https://haluskua.github.io/mywebsite/img/room5-small.jpg"
                alt="Landscape picture"
                width={80}
                height={30}
              />
            </picture>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// Getting static props
