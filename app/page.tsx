import NavBar from "./components/NavBar";
import GreetingTypewriter from "./components/Typewriter";
import About from "./components/About";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <NavBar />

      <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex flex-row gap-4 items-center">
            <GreetingTypewriter />
            <h1 className="text-[clamp(40px,8vw,90px)] font-bold">I&apos;m Sohan.</h1>
          </div>
          <p className="self-center text-lg text-gray-400">I build stuff (occasionally) and can Google effectively.</p>
        </main>
      </section>

      <About />

      <section id="projects" className="py-20 px-4 sm:px-20 text-center text-white">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 place-items-center">

          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[#7E3AF2] shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="z-10 absolute w-full h-full peer"></div>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#9967F3] transition-all duration-500"></div>
            <div className="absolute -bottom-32 -right-16 w-36 h-44 rounded-full bg-[#9967F3] transition-all duration-500 peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full"></div>
            <div className="w-full h-full flex items-center justify-center text-white transition-all duration-300 peer-hover:opacity-0">
              Finora
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white text-lg p-4 bg-[#7E3AF2] opacity-0 translate-y-full transition-all duration-500 peer-hover:opacity-100 peer-hover:translate-y-0">
              An ML-powered stock analysis platform with real-time prediction.
            </div>
          </div>

          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-blue-500 shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="z-10 absolute w-full h-full peer"></div>
            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-blue-400 transition-all duration-500"></div>
            <div className="absolute -bottom-32 -right-16 w-36 h-44 rounded-full bg-blue-400 transition-all duration-500 peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full"></div>
            <div className="w-full h-full flex items-center justify-center text-white transition-all duration-300 peer-hover:opacity-0">
              Movie Recommendation System
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white text-lg p-4 bg-blue-500 opacity-0 translate-y-full transition-all duration-500 peer-hover:opacity-100 peer-hover:translate-y-0">
              A system that fetches data from a Kafka stream and serves recommendations based on the movies a user has watched so far.
            </div>
          </div>


        </div>
      </section>


      <section id="publications" className="py-20 px-8 sm:px-20 text-center">
        <h2 className="text-4xl font-bold">Publications</h2>
        <div className="grid grid-cols-1 gap-8 mt-8">

          <div className="card m-auto text-gray-300 w-[clamp(260px,90%,1200px)] max-w-screen-lg hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
            <div className="px-8 py-10">
              <div className="font-bold text-xl pb-8">
                Exploring Artificial Neural Networks in Virtual Reality: A Unity and Leap Motion-Based Visualization of ONNX Models
              </div>
              <div className="text-gray-300 tracking-widest">
                There is a rapidly increasing need for learning resources in the field of Artificial Intelligence aimed at newcomers.
                To this end, we have attempted to make an intuitive visualization of Artificial Neural Networks in Virtual Reality,
                while trying to make it as general and extensible as possible to allow for future work to build upon it to create a
                series of highly intuitive and interactive learning resources. Our implementation results in a framework built using
                careful design considerations that we think results in a solid building block for work that aims to interactively educate
                individuals in fields such as Artificial Intelligence and other such algorithms.
              </div>
              <div className="text-gray-400 mt-8">
                <p className="font-bold">Published in IEEE: 2023 9th International Conference on Virtual Reality (ICVR)</p>
                <a target="_blank" href="https://ieeexplore.ieee.org/document/10169803/citations">View full text here</a>
              </div>
            </div>
            <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[90%] m-auto rounded transition-all"></div>
          </div>

        </div>
      </section>

      {/* <section id="resume" className="py-20 px-8 sm:px-20 text-center">
        <h2 className="text-4xl font-bold">Resume</h2>
        <p className="mt-4">
          Download my <a href="/resume.pdf" className="text-blue-500 underline">resume here</a>.
        </p>
      </section> */}

      <section id="contact" className="py-20 px-8 sm:px-20 text-center">
        <h2 className="text-4xl font-bold pb-16">Contact</h2>
        <Socials />
      </section>
    </div>
  );
}
