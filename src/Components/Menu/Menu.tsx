import SearchBar from './SearchBar';
import logoMarvel from '../../ressources/images/langfr-1920px-MarvelLogo.svg_uw9pi8.png';
import { Link } from 'react-router-dom';
import MenuFilterButton from './MenuFilterButton';

interface Settings {
   datas: any[];
   demand: string;
   switchDemand: React.Dispatch<React.SetStateAction<string>>;
}

export const Menu = (Props: Settings) => {
   const { datas, switchDemand, demand } = Props;

   return (
      <div className="h-36 px-16 flex items-center bg-[#FAA307] rounded m-1 mt-0 ">
         <Link to="/">
            <img className=" h-24 " src={logoMarvel} alt="logo marvel" />
         </Link>
         <div className=" ml-24 w-[70%] ">
            <div className=" flex items-center ">
               <p>Recherche par :</p>
               {/* 
               <HeaderNavButton value="Personnages" />

               <HeaderNavButton value="Comics" /> */}

               <MenuFilterButton
                  demand={demand}
                  switchDemand={switchDemand}
                  topic={'characters'}
               >
                  Héros
               </MenuFilterButton>
               <MenuFilterButton
                  demand={demand}
                  switchDemand={switchDemand}
                  topic={'comics'}
               >
                  Comics
               </MenuFilterButton>
            </div>
            <SearchBar datas={datas} demand={demand} />
         </div>
      </div>
   );
};
export default Menu;
