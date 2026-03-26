export default function Publications(){
    return (
        <section id="publications" className="py-20 px-8 sm:px-20 text-center">
        <h2 className="text-4xl font-bold">Publications</h2>
        <div className="grid grid-cols-1 gap-8 mt-8">

          <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-white [box-shadow:var(--shadow)] max-w-screen-lg m-auto">
            <div className="flex flex-col pt-9 px-8 pb-10 relative">
              <h2 className="text-xl font-bold mb-8 text-black">
                Doremi: Designing a Piano Bot
              </h2>
              <p className="text-black tracking-widest">
                Home piano practice is vital for early music learning, yet it often depends on a child’s intrinsic motivation. This paper introduces DoReMi, a piano peer-bot designed as an expressive, encouraging companion for young beginners. Through animated responses, colorful feedback, and an approachable social presence, DoReMi supports children as they practice and interact with the instrument. We have designed different feedback styles and timing strategies to further shape a child’s perception of the robot, and their motivation to continue learning.
              </p>
              <div className="text-black mt-8 mb-12">
                <p className="font-bold">HRI Companion '26: Companion Proceedings of the 21st ACM/IEEE International Conference on Human-Robot Interaction</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-black">Published: 16th March 2026</p>
                <a target="_blank" href="https://dl.acm.org/doi/10.1145/3776734.3794611">
                  <button className="font-semibold cursor-pointer py-2 px-8 w-max text-sm rounded-lg transition-colors text-white bg-black hover:bg-blue-500" type="button">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-white [box-shadow:var(--shadow)] max-w-screen-lg m-auto">
            <div className="flex flex-col pt-9 px-8 pb-10 relative">
              <h2 className="text-xl font-bold mb-8 text-black">
                Exploring Artificial Neural Networks in Virtual Reality: A Unity and Leap Motion-Based Visualization of ONNX Models
              </h2>
              <p className="text-black tracking-widest">
                There is a rapidly increasing need for learning resources in the field of Artificial Intelligence aimed at newcomers.
                To this end, we have attempted to make an intuitive visualization of Artificial Neural Networks in Virtual Reality,
                while trying to make it as general and extensible as possible to allow for future work to build upon it to create a
                series of highly intuitive and interactive learning resources. Our implementation results in a framework built using
                careful design considerations that we think results in a solid building block for work that aims to interactively educate
                individuals in fields such as Artificial Intelligence and other such algorithms.
              </p>
              <div className="text-black mt-8 mb-12">
                <p className="font-bold">2023 9th International Conference on Virtual Reality (ICVR)</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-black">Published: 12th May 2023</p>
                <a target="_blank" href="https://ieeexplore.ieee.org/document/10169803">
                  <button className="font-semibold cursor-pointer py-2 px-8 w-max text-sm rounded-lg transition-colors text-white bg-black hover:bg-blue-500" type="button">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
}