export const MenuFilterButton = (Props: {
   children: string;
   demand: string;
   topic: string;
   switchDemand: React.Dispatch<React.SetStateAction<string>>;
}) => {
   const { children, demand, topic, switchDemand } = Props;

   const selected = 'rounded px-1 mx-2 bg-white text-red-700 shadow ';
   const forgot = ' px-1 rounded mx-2 ';

   return (
      <button
         onClick={() => {
            switchDemand(topic);
         }}
         className={topic === demand ? selected : forgot}
      >
         {children}
      </button>
   );
};
export default MenuFilterButton;
