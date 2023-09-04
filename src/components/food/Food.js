import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import './Food.css';

const Food = ({recipes}) => {
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
                                            <div className='recipe-ingredients'>
                                                <h4>{recipe.ingredients}</h4>
                                            </div>
                                            <div className='recipe-instructions'>
                                                <h4>{recipe.instructions}</h4>
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