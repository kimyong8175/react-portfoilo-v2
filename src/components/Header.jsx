import { navItems } from "../constants";

const Header = () => {
  return (
    <header className="px-2 sm:px-6 lg:px-8 py-4 sticky top-0 bg-gradient-to-r from-midnight to-black shadow-md">
      <nav className="container mx-auto flex items-center text-white">
        <div className="flex-1 text-3xl font-semibold ">
          Yong<span className="text-sm text-green">.dev</span>
        </div>
        <ul className="flex flex-1 justify-center gap-6">
          {navItems.map((item) => (
            <a key={item.id} href={item.to}>
              <li className="logo-item">{item.name}</li>
            </a>
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

export default Header;
