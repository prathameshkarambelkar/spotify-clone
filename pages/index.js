import Head from "next/head";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <div className="bg-black h-screen overflow-hidden">

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
      </div>

    </>
  );
}
