import logo from '/assets/logo-footer.svg';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { BsTwitter, BsPinterest, BsInstagram } from 'react-icons/bs';

import Button from '../components/Button';

const Footer = () => {
  return (
    <footer className="grid grid-cols-1  lg:grid-cols-4 justify-items-center items-center bg-primary text-slate-300 lg:p-20 py-14 px-6 ">
      <div className="pb-8 lg:pb-0">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="flex pt-8 justify-center gap-4 transition-all">
          <a href="#">
            <AiFillFacebook size={24} className="hover:fill-lime-green" />
          </a>
          <a href="#">
            <AiFillYoutube size={24} className="hover:fill-lime-green" />
          </a>
          <a href="#">
            <BsTwitter size={24} className="hover:fill-lime-green" />
          </a>
          <a href="#">
            <BsPinterest size={24} className="hover:fill-lime-green" />
          </a>
          <a href="#">
            <BsInstagram size={24} className="hover:fill-lime-green" />
          </a>
        </div>
      </div>
      <ul className="flex flex-col items-center gap-2">
        <li className="hover:text-lime-green ">
          <a href="#"> About Us</a>
        </li>
        <li className="hover:text-lime-green ">
          <a href="#">Contact </a>
        </li>
        <li className="hover:text-lime-green ">
          <a href="#"> Blog </a>
        </li>
      </ul>
      <ul className="flex flex-col items-center gap-2 pt-2 lg:pt-0">
        <li className="hover:text-lime-green ">
          <a href="#"> Careers </a>
        </li>
        <li className="hover:text-lime-green ">
          <a href="#"> Support </a>
        </li>
        <li className="hover:text-lime-green ">
          <a href="#"> Privacy Policy </a>
        </li>
      </ul>
      <div className="pt-8 flex flex-col items-center lg:items-end gap-4 lg:pt-0 lg:text-right">
        <a href="#">
          <Button type="button">Request Invite</Button>
        </a>
        <p className="text-secondary">&copy; EasyBank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
