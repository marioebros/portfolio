import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(20,20,20)] text-gray-300 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#FFCC00]/80'>
      <Head>
        <title>Mario's Portfolio</title>
      </Head>

      <Header />

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

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0" 
              src="" 
              alt="" />
          </div>
          <div>
            <a target="_blank" href="https://icons8.com/icon/20909/html-5">Html 5</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home
