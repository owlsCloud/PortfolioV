import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project4Pic from "../../public/images/projects/emailPic.jpg";
import project3Pic from "../../public/images/projects/hbomax.jpg";
import project2Pic from "../../public/images/projects/portfolioV1.jpg";
import project1Pic from "../../public/images/projects/portfolioV2.jpg";
import project6pic from '../../public/images/projects/promptopia.jpg';
import project5Pic from "../../public/images/projects/spotify.jpg";
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} unoptimized alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Check it out!
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} unoptimized alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Gerardo | Projects Page</title>
        {/* SEO */}
        <meta name="description" content="web portfolio" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 ">
              <FeaturedProject
                title="Promptopia"
                link="https://promptopia-five-ruby.vercel.app/"
                github="https://github.com/owlsCloud/Promptopia"
                summary="A Fullstack project created with NextJS as both front end and backend as well as MongoDB to Implement CRUD operations."
                img={project6Pic}
                type="Fullstack"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Spotify Clone"
                link="https://spotifydashboard.netlify.app/"
                github="https://github.com/owlsCloud/spotifyclone-frontend"
                img={project5Pic}
                type="Portfolio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio v2"
                link="https://gerardogrz.netlify.app"
                github="https://github.com/owlsCloud/gerardogarza"
                img={project1Pic}
                type="Portfolio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Modern Email Template"
                link="https://genuine-fox-b10aad.netlify.app/"
                github="https://github.com/owlsCloud/Modern-Email-Template"
                img={project4Pic}
                type="Email"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="HBOmax Redux"
                link="https://hbomax-clone.netlify.app/"
                github="https://github.com/owlsCloud/hbomax-clone"
                img={project3Pic}
                type="Frontend w/ API"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio v1"
                link="https://merry-mochi-1fa419.netlify.app/"
                github="https://github.com/owlsCloud/portfolio"
                img={project2Pic}
                type="Portfolio"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title=""
                link=""
                github=""
                img={}
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
