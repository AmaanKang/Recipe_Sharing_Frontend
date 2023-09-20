import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import './Food.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';

const Food = ({recipes}) => {

    const navigate = useNavigate();
    function reviews(recipeId){
        navigate(`/Reviews/${recipeId}`);
    }

    return (
        <div className='recipe-carousel-container'>
            <Carousel>
                {
                    recipes.map((recipe) => {
                        return(
                            <Paper key={recipe.id}>
                                <div className='recipe-card-container'>
                                    <div className='recipe-card'>
                                        <div className='recipe-detail'>
                                            <div className='recipe-image'>
                                                <img src={require('../../Food_Images/'+recipe.image_Name+'.jpg')} />
                                            </div>
                                            <div className='recipe-title'>
                                                <h4>{recipe.title}</h4>
                                            </div>
                                            <Tabs>
                                                <TabList>
                                                <Tab>Ingredients</Tab>
                                                <Tab>Recipe Instructions</Tab>
                                                <Tab>Write a Review</Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <div className='recipe-ingredients'>
                                                        <p>{recipe.ingredients}</p>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className='recipe-instructions'>
                                                        <p>{recipe.instructions}</p>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="movie-review-button-container">
                                                        <Button variant="info" onClick={() => reviews(recipe.id)}>Reviews</Button>
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
export default Food;