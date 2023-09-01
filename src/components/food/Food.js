import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import './Food.css';

const Food = ({recipes}) => {
    return (
        <div>
            <Carousel>
                {
                    recipes.map((recipe) => {
                        console.log(recipe.title);
                        //"../../Food_Images/{recipe.image_Name}.jpg"
                        return(
                            <Paper>
                                <div className='recipe-card-container'>
                                    <div className='recipe-card'>
                                        <div className='recipe-detail'>
                                            <div className='recipe-image'>
                                                <img src="-bloody-mary-tomato-toast-with-celery-and-horseradish-56389813.jpg" alt="Recipe picture" />
                                            </div>
                                            <div className='recipe-title'>
                                                <h4>{recipe.title}</h4>
                                            </div>
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