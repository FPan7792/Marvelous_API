interface Value {
   value: string;
}

export const HomeButton = (Props: Value) => {
   const { value } = Props;

   return (
      <button className=" transition-all duration-100 ease-linear font-PTSans hover:shadow-inner hover:shadow-black font-bold text-lg h-14 px-12 rounded-3xl bg-gradient-to-br from-[#6a040f] to-[#d00000] text-white hover:bg-[#DC2F02] hover:text-[#F48C06] hover:animate-pulse ">
         {value}
      </button>
   );
};
export default HomeButton;
