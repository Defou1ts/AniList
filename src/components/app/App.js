import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../../pages/MainPage";

const App = () => {
   return (
      <Router>
         <div className="app">
            <Header />
            <div className="container">
               <Routes>
                  <Route path='/' element={<MainPage />}></Route>
               </Routes>
            </div>
         </div>
      </Router>
   )
}

export default App;