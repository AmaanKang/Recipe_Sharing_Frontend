import React from 'react';
import Food from '../food/Food.js';

const Home = ({recipes,getRecipeData,recipe,reviews,setReviews}) => {
    return (
    <div>
        <Food recipes={recipes} getRecipeData={getRecipeData} recipe={recipe} reviews={reviews} setReviews={setReviews}/>
    </div>
    )
}
export default Home;