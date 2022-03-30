import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import FoodRecipe from './Components/FoodRecipe/FoodRecipe';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/foodrecipe' element={<FoodRecipe />} />
        <Route path='/foodrecipe/:foodId' element={<FoodDetails/>}/>
        <Route path='/about' element={<About />} />
        <Route path='*' element={ <NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
