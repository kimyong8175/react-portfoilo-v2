// import Layout from "../layout/Layout";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="w-8/12 py-3 px-10 ">
        <p className="text-green">🤚 Hi, my name is</p>
        <p className="text-primary font-bold text-8xl tracking-wider mt-4">
          Yonghyun Kim
        </p>
        <p className="text-secondary text-5xl mt-4 font-semibold">
          Full-stack Developer
        </p>
        <div className="text-secondary mt-4 w-8/12 text-md font-normal tracking-widest leading-loose">
          As a Full-stack developer, my ambition is to enhance user experiences
          and build innovative web interfaces that make the web more convenient
          for people.
        </div>
        <button className=" opacity-100 px-16 py-5 border-4 border-green mt-8 rounded-xl text-green text-lg">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
