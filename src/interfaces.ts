export interface MarvelHeros {
   count: number;
   limit: number;
   results: {
      thumbnail: {
         path: string;
         extension: string;
      };
      name: string;
      description: string;
      comics: string;
      __v: number;
      _id: string;
   }[];
}

export interface MarvelComics {
   count: number;
   limit: number;
   results: {
      thumbnail: {
         path: string;
         extension: string;
      };
      title: string;
      description: string;
      comics: [string];
      __v: number;
      _id: string;
   }[];
}
