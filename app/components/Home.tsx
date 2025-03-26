import GreetingTypewriter from "./Typewriter";

export default function Home(){
    return(
        <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className="flex flex-row gap-4 items-center">
            <GreetingTypewriter />
            <h1 className="text-[clamp(40px,8vw,90px)] font-bold">I&apos;m Sohan.</h1>
            </div>
            <p className="self-center text-lg text-gray-400">I build stuff (occasionally) and can Google effectively.</p>
        </main>
        </section>
    );
}
