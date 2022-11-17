import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gunter's Portfolio</title>
      </Head>
      <main>{/* <h1 className="text-blue-800">Web Portfolio</h1> */}</main>
      {/* Header */}
      <Header />
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
