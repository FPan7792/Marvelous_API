import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect } from 'react';

interface Commands {
   page: number;
   setPage: React.Dispatch<React.SetStateAction<number>>;
   limit: number;
   setLimit: React.Dispatch<React.SetStateAction<number>>;
   totalItems: number;
}
export const FilterBar = (Props: Commands) => {
   const { limit, setLimit, page, setPage, totalItems } = Props;

   useEffect(() => {}, [limit, page, totalItems]);

   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
   };

   const handleLimit = (event: Event, newValue: number | number[]) => {
      setLimit(newValue as number);
   };
   return (
      <div>
         <p className="text-center font-PTSans font-extrabold my-3">
            {' '}
            Total : {totalItems}
         </p>

         <Stack className=" flex items-center my-5 ">
            <Pagination
               count={Math.round(totalItems / limit)}
               variant="outlined"
               shape="rounded"
               page={page}
               onChange={handleChange}
               color="secondary"
            />
         </Stack>

         <Box
            sx={{
               width: 300,
               margin: '0 auto',
            }}
         >
            <Slider
               defaultValue={50}
               onChange={handleLimit}
               step={25}
               marks
               min={25}
               max={100}
               color="secondary"
            />
         </Box>
      </div>
   );
};
export default FilterBar;
