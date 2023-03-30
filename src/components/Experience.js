import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

//component
const Details = ({ position, company, companyLink, time, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            target="_blank"
            href={companyLink}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="CS Tutor"
            company="UTRGV"
            time="2021-2022"
            companyLink="https://www.utrgv.edu/"
            work=" Taught computer science fundamentals to entering freshman and
            sophmores one on one or in small groups. My responsibilities include
            identifying and addressing areas where students may be struggling,
            answering questions, providing examples and exercises to reinforce
            key concepts, and helping students prepare for exams and
            assignments."
          />
          <Details
            position="IT Tech Lead"
            company="UTRGV"
            time="2018-2021"
            companyLink="https://www.utrgv.edu/"
            work="My job was to provide technical support and leadership to my team of student workers who assist with IT tasks on campus. I was responsible for overseeing the day-to-day operations of the team, delegating tasks, and ensuring that all work is completed efficiently and accurately. Additionally, I served as the liason between students and technicians for advanced issues including troubleshooting hardware and software issues, managing network and system configurations, and providing guidance on best practices for using various technology tools."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
