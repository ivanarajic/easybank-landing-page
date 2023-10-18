import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.svg';
import Button from './Button';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'blog',
    title: 'Blog',
  },
  {
    id: 'careers',
    title: 'Careers',
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isNavOpen]);

  useEffect(() => {
    const handler = (event) => {
      if (!ref.current) {
        return;
      }
      if (!ref.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="relative py-5 px-6 lg:px-20 xl:px-36 bg-white w-full flex justify-between items-center lg:py-0">
      <a href="#" className="">
        <img src={logo} alt="logo" className="w-40 h-auto text-primary" />
      </a>

      {/* Desktop navigation */}
      <ul className="hidden lg:flex space-x-6 justify-center">
        {navLinks.map((nav) => (
          <li key={nav.id} className="text-secondary cursor-pointer lg:py-5 ">
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile navigation */}
      <div className="lg:hidden block cursor-pointer z-20">
        {isNavOpen ? (
          <AiOutlineClose
            size={24}
            onClick={handleToggle}
            className="fill-white "
          />
        ) : (
          <AiOutlineMenu
            size={24}
            onClick={handleToggle}
            className="fill-secondary "
          />
        )}

        <div
          ref={ref}
          className={`${
            isNavOpen ? 'block' : 'hidden'
          } absolute top-20 left-1/2 -translate-x-1/2 rounded-md w-11/12 bg-white py-10 text-center z-20 `}
        >
          <ul
            className="flex flex-col gap-4 
          "
          >
            {navLinks.map((nav) => (
              <li key={nav.id} className="text-primary cursor-pointer ">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isNavOpen && (
        <div className="absolute top-0 left-0 lg:hidden w-full h-screen  bg-primary/70" />
      )}

      <div className="hidden lg:block">
        <Button>Request a invite</Button>
      </div>
    </header>
  );
};

export default Navbar;
