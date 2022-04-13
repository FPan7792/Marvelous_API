import { useEffect, useState } from 'react';
import SearchResult from '../SearchResult';

interface Datas {
   datas: any[];
   demand: string;
}
export const SearchBar = (Props: Datas) => {
   const { datas, demand } = Props;

   const [searchedValue, setSearchedValue] = useState('');
   let elemTab: any[] = [];

   useEffect(() => {
      // console.log(datas);

      datas.forEach((elem) => {
         elemTab.push({ name: elem.name, id: elem._id });
         elemTab.push({ title: elem.title, id: elem._id });
         // console.log(elem);
      });
   }, []);

   // let tab: any = [];
   // useEffect(() => {
   //    for (let name of datas) {
   //       let found: boolean;
   //       if (demand === 'characters') {
   //          found = name.name.toLowerCase().includes(inputValue);
   //          if (inputValue !== '' && found) {
   //             console.log(name.name);

   //             tab.push(name.name);
   //          }
   //       } else {
   //          found = name.title.toLowerCase().includes(inputValue);
   //          if (inputValue !== '' && found) {
   //             console.log(name.title);

   //             tab.push(name.title);
   //          }
   //       }

   //       // let found: boolean = name.name.toLowerCase().includes(inputValue);
   //    }
   // }, [inputValue]);

   return (
      <>
         <input
            className="border-2 border-black w-full h-14 rounded-xl shadow mt-2  "
            type="text"
            placeholder={`  Rechercher un ${
               demand === 'characters' ? 'héros' : 'comics'
            } `}
            onChange={(e) => {
               setSearchedValue(e.target.value);
            }}
         />

         <div className="flex flex-col">
            {elemTab.map((value: any, index: number) => {
               const found = value.name.tolowerCase().includes(searchedValue);
               console.log(value.name);

               return <SearchResult item={value} key={value.id} />;
            })}
         </div>
      </>
   );
};
export default SearchBar;
