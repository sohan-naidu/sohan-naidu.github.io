"use client";

import { motion } from "framer-motion";
import { fadeInVariant } from "./Animations";

export default function About() {
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
        I&apos;m an incoming Software Engineer Intern at Uber Freight, currently pursuing my Master&apos;s in Computer Science at the University of Illinois Chicago with a 4.0 GPA.
        I completed my Bachelor&apos;s in Computer Science at PES University, Bangalore, and bring 1.5 years of industry experience as a Software Engineer at SenseHQ.
      </motion.p>

      {/* Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent mt-12">

        <motion.div 
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Incoming Software Engineer Intern at Uber Freight</div>
              <time className="font-caveat font-medium text-indigo-500">June 2025 - Aug. 2025</time>
            </div>
          </div>
        </motion.div>



        <motion.div 
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Master of Science in Computer Science at University of Illinois, Chicago</div>
              <time className="font-caveat font-medium text-indigo-500">Aug. 2024 - Expected: May 2026</time>
            </div>
          </div>
        </motion.div>


        <motion.div 
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Software Engineer at SenseHQ</div>
              <time className="font-caveat font-medium text-indigo-500">July 2023 - July 2024</time>
            </div>
          </div>
        </motion.div>


                <motion.div 
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Software Engineer Intern at SenseHQ</div>
              <time className="font-caveat font-medium text-indigo-500">Jan. 2023 - June 2023</time>
            </div>
          </div>
        </motion.div>


        <motion.div 
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
        <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">Bachelor of Technology, PES University</div>
            <time className="font-caveat font-medium text-indigo-500">Aug. 2019 - May 2023</time>
        </div>
        </div>

        </motion.div>



      </div>
    </section>
  );
}
