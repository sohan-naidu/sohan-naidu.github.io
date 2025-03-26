export default function Projects(){
    return(
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
    );
}