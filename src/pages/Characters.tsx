import { useEffect, useState } from 'react';

import FilterBar from '../Components/FilterBar';

import { callDatas } from '../requests';
import Loader from '../Components/Loader';
import ItemCard from '../Components/ItemCard';
import ItemDetailsModale from '../Components/ItemDetailsModale';

export const Characters = () => {
   const [loader, setLoader] = useState(false);
   const [limit, setLimit] = useState<number>(50);
   const [page, setPage] = useState(1);
   const [charactersTable, setCharactersTable] = useState<any>();
   const [totalItems, setTotalItems] = useState<number>(1);

   const [itemId, setItemId] = useState<string | null>(null);

   useEffect(() => {
      setLoader(true);
      let skip = limit * page - limit;

      callDatas(
         `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.REACT_APP_API_KEY}&limit=${limit}&skip=${skip}`,
         setCharactersTable,
         setTotalItems
      );

      setLoader(false);
   }, [limit, page, loader, totalItems, itemId]);

   return (
      <div>
         {loader ? (
            <Loader />
         ) : (
            <div>
               <FilterBar
                  page={page}
                  setPage={setPage}
                  limit={limit}
                  setLimit={setLimit}
                  totalItems={totalItems}
               />
               <div className=" flex flex-wrap justify-center bg-[#370617] border-[#03071E] rounded-xl shadow-white m-5 ">
                  {charactersTable?.map((item: any, index: number) => {
                     let image: string[] = item.thumbnail.path.split('/');
                     const isImageAvailable: boolean =
                        image[image.length - 1] !== 'image_not_available';
                     const extension: string = item.thumbnail.extension;

                     return (
                        <div key={index}>
                           <ItemCard
                              item={item}
                              setItemId={setItemId}
                              isImageAvailable={isImageAvailable}
                              extension={extension}
                           />

                           <ItemDetailsModale
                              item={item}
                              itemId={itemId}
                              setItemId={setItemId}
                           />
                        </div>
                     );
                  })}
               </div>
            </div>
         )}
      </div>
   );
};
export default Characters;
