
import './App.css';
import api from './api/axiosConfig.js';
import {useState,useEffect} from 'react';
import Layout from './components/layout.js';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home/Home.js';

function App() {
  const [recipes,setRecipes] = useState();
  const getRecipes = async() =>{
    try{
      const response = await api.get("api/v1/recipes");
      console.log(response.data);
      setRecipes(response.data);
    }catch(err){
      console.log(err);
    }
    
  }
  useEffect(() => {
    getRecipes();
  },[]);
  return (
    <div className="App">
      {console.log(recipes.length)}
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/" element={<Home recipes={recipes}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
