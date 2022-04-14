import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import imageParDefaut from '../ressources/images/waldemar-brandt-eIOPDU3Fkwk-unsplash.jpg';
import { callDatas } from '../requests';
import FilterBar from '../Components/FilterBar';
import Loader from '../Components/Loader';
import ItemCard from '../Components/ItemCard';

interface Infos {
   propLimit?: number;
   propTotalItems?: number;
   propPage?: number;
   datas?: any;
}

export const Comics = (Props: Infos) => {
   const { propPage, propTotalItems, propLimit, datas } = Props;

   const [loader, setLoader] = useState(false);
   const [limit, setLimit] = useState<number>(25);
   const [page, setPage] = useState(1);
   const [comicsTable, setComicsTable] = useState<any>([]);
   const [totalItems, setTotalItems] = useState<number>(0);

   useEffect(() => {
      setLoader(true);
      let skip = limit * page - limit;

      const fillDatas = async () => {
         callDatas(
            `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=VpOLMrMWXOs2z6FI&limit=${limit}&skip=${skip}`,
            setComicsTable,
            setTotalItems
         );
      };

      fillDatas();
      setLoader(false);
   }, [limit, page, loader, totalItems]);

   return (
      <div>
         {loader ? (
            <Loader />
         ) : (
            <div>
               {!datas && (
                  <FilterBar
                     page={!propPage ? page : propPage}
                     setPage={setPage}
                     limit={!propLimit ? limit : limit}
                     setLimit={setLimit}
                     totalItems={!propTotalItems ? totalItems : propTotalItems}
                  />
               )}
               <div className=" flex flex-wrap justify-center bg-[#FFBA08] mx-10  rounded-xl ">
                  {datas
                     ? datas.comics.map((comic: any, index: number) => {
                          return (
                             <div>
                                <ItemCard
                                   item={comic}
                                   isImageAvailable={true}
                                   extension={'jpg'}
                                />
                             </div>
                          );
                       })
                     : comicsTable?.map((item: any) => {
                          const image: string[] =
                             item.thumbnail.path.split('/');
                          const isImageAvailable: boolean =
                             image[image.length - 1] !== 'image_not_available';

                          const extension: string = item.thumbnail.extension;

                          return (
                             <Card
                                key={item._id}
                                className=" transition-all duration-1000 ease-in-out hover:shadow-lg hover:shadow-black "
                                sx={{
                                   width: 300,
                                   height: 400,
                                   margin: 4,
                                   borderRadius: 10,
                                   backgroundColor: 'black',
                                   color: '#F48C06',
                                }}
                             >
                                <CardActionArea
                                   sx={{
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      textAlign: 'center',
                                      flexDirection: 'column',
                                      height: '100%',
                                   }}
                                >
                                   <CardMedia
                                      className=" transition-all duration-200 hover:opacity-100 ease-linear scale-90 hover:scale-105 "
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
                                      alt={`héros marvel ${item.title}`}
                                   />
                                   <CardContent>
                                      <Typography
                                         gutterBottom
                                         variant="body1"
                                         component="div"
                                         fontFamily={'PT Sans Narrow'}
                                         fontStyle="italic"
                                         fontWeight="thin"
                                         letterSpacing={4}
                                         className=" transition-all ease-linear hover:font-extrabold"
                                      >
                                         {item.title}
                                      </Typography>
                                      {/* <Typography variant="body2" color="text.secondary">
                              {item.description}
                           </Typography> */}
                                   </CardContent>
                                </CardActionArea>
                             </Card>
                          );
                       })}
               </div>
            </div>
         )}
      </div>
   );
};
export default Comics;
