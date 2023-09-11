
import './App.css';
import api from './api/axiosConfig.js';
import {useState,useEffect} from 'react';
import Layout from './components/layout.js';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './components/home/Home.js';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';

function App() {


  const [recipes,setRecipes] = useState([]);
  const [recipe,setRecipe] = useState();
  const [reviews,setReviews] = useState([]);

  const getRecipes = async() =>{
    try{
      const response = await api.get("api/v1/recipes");
      console.log(response.data);
      setRecipes(response.data);
    }catch(err){
      console.log(err);
    }
    
  }

  const getRecipeData = async(recipeId) =>{
    try{
      const response = await api.get(`api/v1/recipes/${recipeId}`);
      const singleRecipe = response.data;
      setRecipe(singleRecipe);
      setReviews(singleRecipe.reviewIds);

    }catch(error){

    }
  }

  useEffect(() => {
    getRecipes();
  },[]);
  return (
    <div className="App">
      <Header/>
      <Link to="/home">Home</Link>
      <Routes>
        <Route path="/" element={<Layout/>}>Layout</Route>
        <Route path="/home" element={<Home recipes={recipes}/>}>Home</Route>
        <Route path="/Reviews/:recipeId" element={<Reviews getRecipeData={getRecipeData} recipe={recipe} reviews={reviews} setReviews={setReviews} />}>Reviews</Route>
      </Routes>
    </div>
  );
}

export default App;
