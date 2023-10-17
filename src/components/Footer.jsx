import {
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="container w-4/5 mx-auto flex justify-center border-t border-white p-4 text-white gap-2 items-center">
      <BiLogoInstagram className="w-8 h-8" />
      <BiLogoLinkedinSquare className="w-8 h-8" />
      <BiLogoFacebookSquare className="w-8 h-8" />
    </div>
  );
};

export default Footer;
