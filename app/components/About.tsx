"use client";

import { motion } from "framer-motion";
import { fadeInVariant } from "./Animations";
import { TimelineEvent } from "../types/TimelineEvent";

export default function About() {

  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      title: "Bachelor of Technology, PES University",
      startDate: "Aug. 2019",
      endDate: "May 2023",
      logo: {
        src: "PES.jpg",
        alt: "PES University logo",
        width: 60
      }
    },
    {
      id: 2,
      title: "Software Engineer Intern at SenseHQ",
      startDate: "Jan. 2023",
      endDate: "June 2023",
      logo: {
        src: "Sense.jpg",
        alt: "SenseHQ logo",
        width: 60
      }
    },
    {
      id: 3,
      title: "Software Engineer at SenseHQ",
      startDate: "July 2023",
      endDate: "June 2024",
      logo: {
        src: "Sense.jpg",
        alt: "SenseHQ logo",
        width: 60
      }
    },
    {
      id: 4,
      title: "Master of Science in Computer Science, University of Illinois, Chicago",
      startDate: "August 2024",
      endDate: "Expected: May 2026",
      logo: {
        src: "UIC.jpg",
        alt: "University of Illinois Chicago logo",
        width: 60
      }
    },
    {
      id: 5,
      title: "Software Engineer Intern at Uber Freight",
      startDate: "June 2025",
      endDate: "August 2025",
      logo: {
        src: "UF.jpg",
        alt: "Uber Freight logo",
        width: 60
      }
    },
    {
      id: 6,
      title: "Graduate Assistant at UIC Technology Solutions",
      startDate: "Sept. 2025",
      endDate: "Present",
      logo: {
        src: "UICTS.jpg",
        alt: "UIC Technology Solutions Logo",
        width: 60
      }
    }, 
  ]

  return (
    <section id="about" className="py-20 px-8 sm:px-20 text-center">
      <motion.h2 
        className="text-4xl font-bold"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        About Me
      </motion.h2>

      <motion.p 
        className="max-w-2xl mx-auto mt-4"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        I&apos;m currently pursuing my Master&apos;s in Computer Science at the University of Illinois Chicago with a 4.0 GPA. 
        I have ~2 years of experience building cloud-native applications that reduce errors, cut costs, and accelerate delivery through robust, scalable systems.
      </motion.p>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent mt-12">
        {timelineEvents.reverse().map(event => (
          <motion.div 
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          key={event.id}
          >
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <img src={event.logo.src} alt={event.logo.alt} width={event.logo.width}></img>
              <div className="font-bold text-slate-900">{event.title}</div>
              <div className="font-caveat font-medium text-indigo-500">{event.startDate} - {event.endDate}</div>
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
