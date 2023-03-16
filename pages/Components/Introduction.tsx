
export default function Introduction(){
    return(
        <div className="bg-white mx-auto p-10 border-blue rounded-3xl border-[3px] shadow-2xl w-[30rem] h-[42rem] flex-row flex-shrink-0 border-[#0ea5e9] mb-10">
        <img
          className="h-[150px] w-[150px] rounded-full"
          src="/Resources/profileSohaib.png"
          alt="Profile"
        ></img>
        <div className="left-0 text-slate-900 text-xl font-thin mx-0 mt-7 text-left">
          Hi, My name is
        </div>
        <div className="left-0 text-[#0ea5e9] font-extrabold text-6xl mx-0 my-0 text-left">
          Sohaib Basit
        </div>
        <div className="left-0 text-slate-900 text-2xl font-thin bg-yellow-200 mx-0 my-5 text-left">
          I love building software products
        </div>
        <div className="left-0 text-slate-900 text-[18px] font-thin mx-0 my-5 text-left">
          I’m a software engineer and building software products is my jam!
          Whether it’s for a startup or a big fancy enterprise, I love taking on
          the challenge of creating solutions that tackle real-world problems.
        </div>
        <div className="left-0 text-slate-900 text-[18px] font-thin mx-0 my-5 text-left">
          I have the experience of building Mobile Apps
        </div>
        <div className="h-[3rem] w-full bg-white border-t-[1px] mb-0 mt-10 flex">
          <div className="text-slate-900 text-[18px] font-thin mt-4">
            @me on
          </div>
          <button className="relative group h-6 w-6 ml-2 mt-4">
            <img
              className="h-full w-full "
              src="/Resources/linkedin.png"
              alt="LinkedIn"
            ></img>
          </button>
          <button className="relative group h-6 w-6 ml-4 mt-4">
            <img
              className="h-full w-full "
              src="/Resources/github.png"
              alt="GitHub"
            ></img>
          </button>
          <button className="relative group h-6 w-6 ml-4 mt-4">
            <img
              className="h-full w-full"
              src="/Resources/stackoverflow.png"
              alt="StackOverFlow"
            ></img>
          </button>
        </div>
      </div>
    );
}