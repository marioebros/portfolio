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
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSocial } from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experience, projects, skills, socials}: Props) => {
  return (
    <div className='bg-[rgb(20,20,20)] text-gray-300 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#FFCC00]/80'>
      <Head>
        <title>Mario's Portfolio</title>
      </Head>

      <Header socials={socials} />

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
        </footer>
      </Link>
    </div>
  );
};

export default Home;

 export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in 
    // - At most once every 10 seconds
    revalidate: 10,
   };  
}; 
