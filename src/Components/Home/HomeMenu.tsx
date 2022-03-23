import HomeButton from '../HomeButton';
import { Link } from 'react-router-dom';

export const HomeMenu = () => {
   return (
      <div className=" absolute top-[50%] left-16 h-24 w-[30%] flex justify-around items-center">
         <Link to="characters">
            <HomeButton value={'Personnages'} />
         </Link>
         <Link to="comics">
            <HomeButton value={'Comics'} />
         </Link>
      </div>
   );
};
export default HomeMenu;
