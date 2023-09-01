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
                        //../../../Food_Images/-bloody-mary-tomato-toast-with-celery-and-horseradish-56389813.jpg
                        return(
                            <Paper key={recipe.ID}>
                                <div className='recipe-card-container'>
                                    <div className='recipe-card'>
                                        <div className='recipe-detail'>
                                            <div className='recipe-image'>
                                                <img src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg" alt="Recipe picture" />
                                            </div>
                                            <div className='recipe-title'>
                                                <h4>{recipe.title}</h4>
                                                <h5>{recipe.Instructions}</h5>
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