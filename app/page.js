import Image from "next/image";
import Hero from "app/components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Feature from "./components/Feature";
import Disclaimer from "./components/Disclaimer";
import TechStack from "./components/TechStack";
import Banner from "./components/Banner";
import StateLesson from "./components/StateLesson";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <main className="bg-white">
      <Banner />
      <Hero />
      <Feature />

      {/* <div id="usestate" className="relative overflow-hidden py-24 sm:py-32">
        <div className="max-w-3xl mx-auto">
          <Divider />
        </div>
        <StateLesson />
        <div className="max-w-3xl mx-auto">
          <Divider />
        </div>
      </div> */}

      {/* story: we're introducing a brand-new car: Almost-There 500! We're still optimizing for great customer experience. */}
      {/* Ranger - you're not going anywhere */}
      {/*  <Header
        title="Almost-There 500"
        description="For those who ponder the meaning of life in traffic. Features include a philosophical GPS voice that asks, Where are we really going?"
      /> */}

      {/* <div className="mx-auto max-w-5xl">
        <TechStack />
      </div> */}

      <Disclaimer />
      <Footer />
    </main>
  );
}
