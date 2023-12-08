import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import NotFound from './components/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
        <Route 
        path='*'
        element={<NotFound />}
        />
      </Routes>
    </div>
  );
};
export default App;
