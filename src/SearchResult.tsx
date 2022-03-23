interface Item {
   item: string;
}

export const SearchResult = (Props: Item) => {
   const item = Props.item;

   return <div className="text-red-700 ">{item}</div>;
};
export default SearchResult;
