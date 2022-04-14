import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Loader from './Components/Loader';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import NotFound from './pages/NotFound';
import { callDatas } from './requests';
import CharacterCard from './pages/CharacterCard';

function App() {
   const [loader, setLoader] = useState(true);

   const [datas, setDatas] = useState<any>([]);
   const [demand, setDemand] = useState<string>('characters');
   useEffect(() => {
      const Appear = () => {
         setTimeout(() => {
            setLoader(false);
         }, 3000);
      };

      callDatas(
         `https://lereacteur-marvel-api.herokuapp.com/${demand}?apiKey=VpOLMrMWXOs2z6FI`,
         setDatas
      );

      Appear();
   }, [demand]);

   return (
      <>
         {loader ? (
            <Loader />
         ) : (
            <div className=" relative font-Andika bg-[whitesmoke] ">
               <Header />
               <Menu datas={datas} switchDemand={setDemand} demand={demand} />
               <Routes>
                  <Route
                     path="/FPan7792/Marvelous_API/characters/:id"
                     element={<CharacterCard />}
                  />
                  <Route
                     path="/FPan7792/Marvelous_API/characters"
                     element={<Characters />}
                  />
                  <Route
                     path="/FPan7792/Marvelous_API/comics"
                     element={<Comics />}
                  />
                  <Route path="/FPan7792/Marvelous_API" element={<Home />} />
                  <Route
                     path="/FPan7792/Marvelous_API/*"
                     element={<NotFound />}
                  />
               </Routes>
            </div>
         )}
      </>
   );
}

export default App;
