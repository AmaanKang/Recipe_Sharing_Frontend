import React from 'react';
import Food from '../food/Food.js';

const Home = ({recipes}) => {
    return (
    <div>
        <Food recipes = {recipes} />
    </div>
    )
}
export default Home;