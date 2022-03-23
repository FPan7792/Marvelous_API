import { useState, useEffect } from 'react';

export const ItemDetailsModale = (Props: {
   itemId: string;
   setItemId: React.Dispatch<React.SetStateAction<string>>;
   item: any;
}) => {
   const { itemId, setItemId, item } = Props;
   const [appearance, setAppearance] = useState('');

   useEffect(() => {
      itemId === item._id
         ? setAppearance(
              ' fixed z-10 top-0 left-0 h-screen w-screen bg-black opacity-90 text-white flex justify-center items-center'
           )
         : setAppearance(
              ' hidden fixed z-10 top-0 left-0 h-screen w-screen bg-black opacity-90 text-white flex justify-center items-center'
           );
   }, [itemId, item]);

   const closeModale = () => {
      setAppearance(
         ' hidden fixed z-10 top-0 left-0 h-screen w-screen bg-black opacity-90 text-white flex justify-center items-center'
      );
      setItemId('');
      console.log('ITZMID', itemId);
   };

   return (
      <div className={appearance} onClick={() => closeModale()}>
         <div className="h-[70%] w-[80%] bg-white opacity-100 ">
            <h1>Je suis un composant</h1>
         </div>
      </div>
   );
};

export default ItemDetailsModale;
