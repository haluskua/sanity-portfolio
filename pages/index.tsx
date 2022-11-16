import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gunter's Portfolio</title>
      </Head>
      <main>
        <h1 className="text-blue-800">Web Portfolio</h1>
      </main>
    </div>
  );
};

export default Home;
