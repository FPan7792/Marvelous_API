import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

export const Loader = () => {
   return (
      <div className="h-screen w-full bg-red-500 flex justify-center items-center ">
         <FontAwesomeIcon
            className="icone"
            icon="mask"
            size="7x"
            color="orange"
            spin={true}
         />
      </div>
   );
};
export default Loader;
