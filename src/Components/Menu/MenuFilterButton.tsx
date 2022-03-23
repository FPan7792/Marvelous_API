import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const MenuFilterButton = (Props: {
   children: string;
   demand: string;
   topic: string;
   switchDemand: React.Dispatch<React.SetStateAction<string>>;
}) => {
   const { children, demand, topic, switchDemand } = Props;

   return (
      <Stack spacing={2} direction="row" color="secondary">
         {/* <Button variant="text">Text</Button> */}

         <Button
            onClick={() => {
               switchDemand(topic);
            }}
            variant={topic === demand ? 'contained' : 'outlined'}
         >
            {children}
         </Button>
      </Stack>
   );
};
export default MenuFilterButton;
