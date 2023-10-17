// import { navItems } from "../constants";
import PropTypes from "prop-types";

const Header = ({
  onAboutClick,
  onSkillClick,
  onProjectClick,
  onHeroClick,
  onContactClick,
}) => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      to: "intro",
      fn: onHeroClick,
    },
    {
      id: 2,
      name: "About",
      to: "about",
      fn: onAboutClick,
    },
    {
      id: 3,
      name: "Skills",
      to: "skills",
      fn: onSkillClick,
    },
    {
      id: 4,
      name: "Projects",
      to: "projects",
      fn: onProjectClick,
    },

    {
      id: 5,
      name: "Contact",
      to: "contact",
      fn: onContactClick,
    },
  ];
  return (
    <header className="px-2 sm:px-6 lg:px-8 py-4 sticky top-0 bg-gradient-to-r from-midnight to-black shadow-md z-50">
      <nav className="container mx-auto flex items-center text-white">
        <div className="flex-1 text-3xl font-semibold ">
          Yong<span className="text-sm text-green">.dev</span>
        </div>
        <ul className="flex flex-1 justify-center gap-6">
          {navItems.map((item) => (
            <button key={item.id} onClick={item.fn} className="logo-item">
              {item.name}
            </button>
          ))}
        </ul>
        <div className="flex-1 items-center flex justify-end ">
          <button className="border border-green text-green rounded-xl px-5 py-2">
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  onAboutClick: PropTypes.func,
  onSkillClick: PropTypes.func,
  onProjectClick: PropTypes.func,
  onHeroClick: PropTypes.func,
  onContactClick: PropTypes.func,
};

export default Header;
