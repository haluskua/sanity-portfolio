import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-cyan-800 text-white">
      <Head>
        <title>Gunter's Portfolio</title>
      </Head>
      <main>{/* <h1 className="text-blue-800">Web Portfolio</h1> */}</main>
      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
