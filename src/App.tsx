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
                  <Route path="/characters/:id" element={<CharacterCard />} />
                  <Route path="/characters" element={<Characters />} />
                  <Route path="/comics" element={<Comics />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/*" element={<NotFound />} />
               </Routes>
            </div>
         )}
      </>
   );
}

export default App;
