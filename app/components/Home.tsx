"use client";

import GreetingTypewriter from "./Typewriter";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home(){
    const [index, setIndex] = useState(0);
    const subtexts = ["I build stuff (occasionally) and can Google effectively.", "Versatile. Adaptive. Impactful."];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % subtexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return(
        <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="flex flex-row gap-4 items-center">
                    <GreetingTypewriter />
                    <h1 className="text-[clamp(40px,8vw,90px)] font-bold">I&apos;m Sohan.</h1>
                </div>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={subtexts[index]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="self-center text-lg text-gray-400"
                    >
                        {subtexts[index]}
                    </motion.p>
                </AnimatePresence>
            </main>
        </section>
    );
}