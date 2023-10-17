import Title from "./Title";
import AVATAR from "../assets/images/avatar.png";
import { BiSolidRightArrow } from "react-icons/bi";

const About = () => {
  return (
    <div className="container mx-auto pt-18 pb-20">
      <div className="flex-col items-center justify-center ">
        <div className="flex justify-center">
          <Title emoji={"👨‍💻"} no={"01"} content={"About Me"} />
        </div>
        <div className="flex justify-center gap-6 h-96 items-end ">
          <div className="w-3/12">
            <img src={AVATAR} alt="avatar" className="h-72 max-w-lg" />
          </div>
          <div className="w-96 flex flex-col gap-10 text-secondary">
            <div>
              <ul>
                <li className="flex items-center gap-4">
                  <BiSolidRightArrow className="text-green" />
                  Name: Yonghyun Kim
                </li>
                <li className="flex items-center gap-4">
                  <BiSolidRightArrow className="text-green" />
                  Age: 27
                </li>
                <li className="flex items-center gap-4">
                  <BiSolidRightArrow className="text-green" />
                  Position: Full-stack Developer
                </li>
              </ul>
            </div>
            <div>
              I am a full-stack developer who prioritizes a focus on
              fundamentals and aims for gradual skill improvement and
              problem-solving ability rather than mere repetition. I strive to
              enhance my overall understanding of programming through continuous
              learning, including project experiences. My goal is to build a
              strong foundation and problem-solving skills
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
