
import './App.css';
import api from './api/axiosConfig.js';
import {useState,useEffect} from 'react';
import Layout from './components/layout.js';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './components/home/Home.js';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import AddNewRecipe from './components/addNewRecipe/AddNewRecipe';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  const [token, setToken] = useState();
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
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipes();
  },[]);

  if(!token) {
    return(
      <div className="App">
          <Routes>
            <Route path="/register" element={<Register />}>Register</Route>
            <Route path="/" element={<Login setToken={token} />}>Login</Route>
            <Route path="/login" element={<Login setToken={token} />}>Login</Route>
          </Routes>
      </div>
    );
  }else{
    return (
      <div className="App">
        <Header/>
        
        <Routes>
          <Route path="/" element={<Home recipes={recipes} getRecipeData={getRecipeData} recipe={recipe} reviews={reviews} setReviews={setReviews}/>}>Home</Route>
          <Route path="/add-new-recipe" element={<AddNewRecipe/>}>Add New recipe</Route>
        </Routes>
      </div>
    );
  }
  
}
//Reviews/:recipeId
//<Route path="/" element={<Reviews getRecipeData={getRecipeData} recipe={recipe} reviews={reviews} setReviews={setReviews} />}>Reviews</Route>
export default App;
