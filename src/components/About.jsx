import Title from "./Title";
import AVATAR from "../assets/images/avatar.png";
import { BiSolidRightArrow } from "react-icons/bi";

const About = () => {
  return (
    <div className="container mx-auto min-h-screen py-2">
      <div className="flex-col items-center justify-center ">
        <div className="flex justify-center">
          <Title emoji={"👨‍💻"} no={"01"} content={"About Me"} />
        </div>
        <div className="flex justify-center gap-6 h-96 items-end">
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
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
