import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FoodRecipe from './Components/FoodRecipe/FoodRecipe';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/foodrecipe' element={<FoodRecipe />}/>
        <Route path='/about' element={<About />}/>
     </Routes>
    </div>
  );
}

export default App;
