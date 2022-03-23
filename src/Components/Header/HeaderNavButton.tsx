interface Value {
   value: string;
}

export const HeaderNavButton = (Props: Value) => {
   const { value } = Props;

   return (
      <div className=" inline-block -skew-x-12 border-2 border-[#DC2F02] h-full transition-all ease-in text-[whitesmoke] hover:bg-[whitesmoke] hover:border-opacity-100 hover:border-[whitesmoke] hover:border-4 hover:text-[#E85D04] ">
         <button className="uppercase px-12 flex justify-center items-center h-full text-sm font-bold ">
            {value}
         </button>
      </div>
   );
};
export default HeaderNavButton;
