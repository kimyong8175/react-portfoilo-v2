import { HiOutlineBadgeCheck } from "react-icons/hi";

import Title from "./Title";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div className="container mx-auto min-h-screen py-2">
      <div className="flex-col items-center justify-center ">
        <div className="flex justify-center">
          <Title no={"02"} emoji={"🛠"} content={"Skills & Technologies"} />
        </div>
        <div className="flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 mt-20">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full mt-3">
              <div className=" bg-midnight flex p-6 h-full items-center rounded-md gap-4">
                <HiOutlineBadgeCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4 text-green" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
