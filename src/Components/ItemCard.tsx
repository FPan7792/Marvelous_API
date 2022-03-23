import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import imageParDefaut from '../ressources/images/waldemar-brandt-eIOPDU3Fkwk-unsplash.jpg';

const ItemCard = (Props: {
   item: any;
   isImageAvailable: boolean;
   extension: string;
}) => {
   const { item, extension, isImageAvailable } = Props;

   return (
      <Card
         key={item._id}
         className=" transition-all ease-linear hover:shadow-xl hover:shadow-[#E85D04] hover:text-[#DC2F02] hover:font-extrabold "
         sx={{
            width: 280,
            height: 380,
            margin: 3,
            borderRadius: 10,
         }}
      >
         <CardActionArea
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               textAlign: 'center',
               flexDirection: 'column',
               height: '100%',
               // border: 'blue 2px solid',
            }}
         >
            <CardMedia
               className=" transition-all duration-200 hover:opacity-100 ease-linear hover:scale-105 "
               component="img"
               sx={{
                  height: 8 / 10,
                  opacity: '10%',
               }}
               image={
                  isImageAvailable && extension === 'jpg'
                     ? `${item.thumbnail.path}.${extension}`
                     : imageParDefaut
               }
               alt={`héros marvel ${item.name}`}
            />
            <CardContent>
               <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontFamily={'PT Sans Narrow'}
                  fontStyle="italic"
                  fontWeight="thin"
                  letterSpacing={4}
                  className="hover:font-extrabold"
               >
                  {item.name}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default ItemCard;
