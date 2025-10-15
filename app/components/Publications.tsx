export default function Publications(){
    return (
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
                <a target="_blank" href="https://ieeexplore.ieee.org/document/10169803">View full text here</a>
              </div>
            </div>
            <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[90%] m-auto rounded transition-all"></div>
          </div>

        </div>
      </section>

    );
}