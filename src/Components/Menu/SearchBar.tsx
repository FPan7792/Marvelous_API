import { useEffect, useState } from 'react';
import SearchResult from '../../SearchResult';

interface Datas {
   datas: any[];
   demand: string;
}
export const SearchBar = (Props: Datas) => {
   // const [datasTable, setDatasTable] = useState<any[]>([]);

   const { datas, demand } = Props;

   // let tableau: any = [];

   const [inputValue, setInputValue] = useState('');

   let tab: any = [];
   useEffect(() => {
      for (let name of datas) {
         let found: boolean;
         if (demand === 'characters') {
            found = name.name.toLowerCase().includes(inputValue);
            if (inputValue !== '' && found) {
               console.log(name.name);

               tab.push(name.name);
            }
         } else {
            found = name.title.toLowerCase().includes(inputValue);
            if (inputValue !== '' && found) {
               console.log(name.title);

               tab.push(name.title);
            }
         }

         // let found: boolean = name.name.toLowerCase().includes(inputValue);
      }
   }, [inputValue]);

   return (
      <>
         <form className="  ">
            <input
               className="border-2 border-red-300 w-full h-14 rounded  "
               type="text"
               placeholder={`Rechercher un ${
                  demand === 'characters' ? 'héros' : 'comics'
               } `}
               value={inputValue}
               onChange={(e) => {
                  setInputValue(e.target.value);
               }}
            />
         </form>

         <div className="flex flex-col">
            {tab.map((value: any, index: number) => {
               return <SearchResult item={value} key={index} />;
            })}
         </div>
      </>
   );
};
export default SearchBar;
