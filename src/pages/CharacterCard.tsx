import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Comics from './Comics';

export const CharacterCard = () => {
   const { id } = useParams();
   const [datas, setDatas] = useState<any>();

   useEffect(() => {
      const callCharactersDatas = async () => {
         await fetch(
            `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=VpOLMrMWXOs2z6FI`
         )
            .then((response) => {
               return response.json();
            })
            .then((datas) => setDatas(() => datas))
            .catch((error) => {
               console.error(error);
            })
            .finally(() => console.log('OVER'));
      };

      callCharactersDatas();
      console.log(datas);
   }, [id]);

   return (
      <>
         <p className="bg-[#FFBA08] text-black m-auto my-10 w-96 rounded p-5 text-center text-4xl ">
            {datas?.name}
         </p>
         <Comics
            propTotalItems={datas?.comics?.length}
            propPage={1}
            propLimit={datas?.comics?.length}
            datas={datas}
         />
      </>
   );
};
export default CharacterCard;
