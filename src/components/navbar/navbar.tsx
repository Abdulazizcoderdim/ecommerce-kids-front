import { Search } from 'lucide-react';
import { AiOutlineMessage } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FaInstagram, FaTelegram } from 'react-icons/fa';
import { FaVk } from 'react-icons/fa6';
import { IoIosHeartEmpty, IoLogoYoutube } from 'react-icons/io';
import { RxPerson } from 'react-icons/rx';
import { SlHandbag } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import DropDown from '../drop-down';
import MaxWidth from '../max-width';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <header>
      <MaxWidth className="flex bg-[#F7F8F7] items-center justify-between gap-3 py-2">
        <p className="flex items-center gap-2 font-normal text-sm">
          <CiLocationOn width={16} height={16} /> Шоурум: Москва, ул. Малая
          Филевская, д. 8, корп. 1
          <span className="text-[#99969A]">c 10:00 до 20:00</span>
        </p>
        <div className="flex items-center gap-2 font-normal text-sm">
          <RxPerson />
          <Link to="/login">Вход</Link>|
          <Link to="/register" className="text-[#0CA145]">
            Регистрация
          </Link>
        </div>
      </MaxWidth>
      <MaxWidth>
        <div className="flex items-center justify-between border-b">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Link to="#">
                <FaInstagram />
              </Link>
              <Link to="#">
                <IoLogoYoutube />
              </Link>
              <Link to="#">
                <FaVk />
              </Link>
              <Link to="#">
                <FaTelegram />
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-base text-[#221A25]">
                +7 (495) 788-77-50
              </p>
              <p className="text-[#99969A] flex items-center gap-1">
                <span className="text-[10px] font-normal">
                  или напишите нам{' '}
                </span>
                <AiOutlineMessage className="text-[#55C380]" /> +7 (495)
                788-77-50
              </p>
            </div>
          </div>
          <div className="-translate-y-5">
            <img src="/logo.png" alt="" className="w-[284px]" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border-b-2 border-[#99969A] pb-1">
              <Search className="w-4 h-4" />
              <input
                type="text"
                placeholder="Я ищу"
                className="placeholder:text-[#99969A] outline-none border-none font-normal text-sm"
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant={'ghost'} size={'icon'}>
                <IoIosHeartEmpty className="w-8 h-8" />
              </Button>
              <Button variant={'ghost'} size={'icon'}>
                <SlHandbag className="w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>
      </MaxWidth>
      <div className="flex items-center justify-center py-2">
        <DropDown />
      </div>
    </header>
  );
};

export default Navbar;
