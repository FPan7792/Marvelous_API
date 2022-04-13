import { MarvelComics, MarvelHeros } from './interfaces';
export const callDatas = async (
   url: string,
   action: React.Dispatch<React.SetStateAction<MarvelComics | MarvelHeros[]>>,
   action2?: React.Dispatch<React.SetStateAction<number>>
) => {
   await fetch(url)
      .then((response) => {
         if (response.ok) {
            return response.json();
         }
         throw response;
      })
      .then(async (datas) => {
         await action(datas.results);

         if (action2) {
            await action2(datas.count);
         }
      })
      .catch((error) => {
         console.error('Error fetching datas : ', error);
      })
      .finally(() => {
         console.log('Operation terminée');
      });
};
