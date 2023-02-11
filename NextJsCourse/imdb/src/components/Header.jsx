import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoSquareFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
const Header = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="flex gap-5">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsInfoSquareFill} />
      </div>
      <div className="flex gap-2 items-center">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
