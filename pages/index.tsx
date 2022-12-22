import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-cyan-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Skills */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
