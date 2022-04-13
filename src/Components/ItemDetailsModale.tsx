import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';

export const ItemDetailsModale = (Props: {
   itemId: string | null;
   setItemId: React.Dispatch<React.SetStateAction<string | null>>;
   item: any;
}) => {
   const { itemId, setItemId, item } = Props;
   const [appearance, setAppearance] = useState(
      // ' fixed top-0 left-0 h-screen w-screen bg-black opacity-1 text-white flex justify-center items-center'
      ' hidden'
   );

   useEffect(() => {
      if (itemId === item._id) {
         setAppearance(
            ` z-10 fixed top-0 left-0 h-screen w-screen opacity-1 flex justify-center items-center bg-black bg-opacity-80`
         );
      }
      return () => setItemId('');
   }, [itemId, item._id]);

   const closeModale = () => {
      setAppearance('hidden');
      console.log('modale');
   };

   const description = item.description;

   return (
      <div className={appearance}>
         <div className=" relative overflow-hidden flex items-center justify-center p-44 h-[90%] w-[90%] rounded-3xl bg-white opacity-1   ">
            <span
               onClick={closeModale}
               className="absolute top-5 right-8 cursor-pointer z-50 "
            >
               <CancelIcon />
            </span>
            <img
               className="absolute  left-0 w-screen -z-1 opacity-60"
               src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
               alt=""
            />
            <div className=" z-0 text-[#D00000] text-center p-20 rounded-3xl bg-white shadow-xl border-2 flex flex-col ">
               {description ? (
                  <>
                     <h1 className="underline font-extrabold ">
                        {' '}
                        Informations
                     </h1>
                     <br />
                     {description}
                  </>
               ) : (
                  'Aucune information sur ce personnage'
               )}
               <Link to={`/characters/${item._id}`}>
                  <button className="text-[whitesmoke] bg-[#D00000] rounded py-2 px-6 mt-5 transition-all duration-100 ease-in hover:scale-105 hover:text-[#DC2F02] hover:bg-[#370617] ">
                     Afficher le profil
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ItemDetailsModale;
