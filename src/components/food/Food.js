import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import './Food.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import Reviews from '../reviews/Reviews';


const Food = ({recipes,getRecipeData,recipe,reviews,setReviews,recipeId}) => {
    const currentRecipe = recipe;

    return (
        <div className='recipe-carousel-container'>
            <Carousel autoPlay={false} height={700} indicators={false} navButtonsAlwaysVisible={true}>
                {
                    recipes.map((recipe) => {
                        return(
                            <div key={recipe.id}>
                                <div className='recipe-card-container'>
                                    <div className='recipe-card'>
                                        <div className='recipe-image'>
                                            <img src={require('../../Food_Images/'+recipe.image_Name+'.jpg')} />
                                        </div>
                                        <div className='recipe-title'>
                                            <h4>{recipe.title}</h4>
                                        </div>
                                        <div className='recipe-detail'>
                                            <Tabs  defaultIndex={0}>
                                                <TabList>
                                                <Tab>Ingredients</Tab>
                                                <Tab>Recipe Instructions</Tab>
                                                <Tab>Write a Review</Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <div className='recipe-ingredients'>
                                                        <ul>
                                                            {recipe.ingredients}
                                                        </ul>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className='recipe-instructions'>
                                                        <p>{recipe.instructions}</p>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="movie-review-button-container">
                                                        <Reviews getRecipeData={getRecipeData} recipe={currentRecipe} reviews={reviews} setReviews={setReviews} recipeId={recipe.id} />
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
export default Food;