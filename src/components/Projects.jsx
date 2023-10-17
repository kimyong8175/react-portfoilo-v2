import { forwardRef } from "react";
import Title from "./Title";
import { projects } from "../constants";
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi";

const Projects = forwardRef(function Projects(props, ref) {
  return (
    <div ref={ref} className="container mx-auto min-h-screen py-20">
      <div className="flex-col items-center justify-center ">
        <div className="flex justify-center">
          <Title no={"02"} emoji={"💻"} content={"Projects I've built"} />
        </div>
        <div className="flex justify-center mt-36 ">
          <div className="w-10/12 flex flex-wrap justify-center">
            {projects.map((project, index) => (
              <div key={index} className="sm:w-1/2 w-100 p-4 group">
                <div className="flex relative rounded-md group-hover:text-opacity-100 ">
                  <img
                    alt="gallery"
                    className=" absolute inset-0 w-full  h-60 object-fill object-center rounded-md group-hover:blur-sm"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full  border-2 opacity-0 hover:opacity-100 group-hover:border-none ">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 text-darkblue">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed max-h-20">
                      {project.description}
                    </p>
                    <div className="flex justify-start gap-2 pt-2 text-darkblue">
                      <a href={project.link}>
                        <BiLogoGithub className="w-6 h-6" />
                      </a>
                      <a href={project.demo}>
                        <BiLogoGoogle className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
