import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(20,20,20)] text-gray-300 h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Mario's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Let's Work */}

    </div>
  )
}

export default Home
