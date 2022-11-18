import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Resultado from "./pages/Resultado";

const App = () => {
   return(
       <>
        <Route element={ <Home />}  path="/" />
        <Route element={ <Resultado /> }  path="/resultado" />
       </>
   )
}

export default App;