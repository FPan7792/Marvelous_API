import HeaderNavButton from './HeaderNavButton';
import { Link } from 'react-router-dom';

export const Header = () => {
   return (
      <nav className="h-10 bg-[#D00000] font-Cabin font-bold flex justify-end pr-8 ">
         <Link to="/characters">
            <HeaderNavButton value="Personnages" />
         </Link>
         <Link to="/comics">
            <HeaderNavButton value="Comics" />
         </Link>
      </nav>
   );
};
export default Header;
