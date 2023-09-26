import React from 'react';
import {useState,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';

const AddNewRecipe = () => {
    const [selectedFile,setSelectedFile] = useState(null);
    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }
     
    const submitRecipe = async(e) => {
        e.preventDefault();
        
        try{
            const response = await api.post("api/v1/recipes",{reviewBody:rev.value,ID:recipeId});
            console.log(response.data);
            const updatedRecipes = [...recipes,{body:rev.value}];
            //setReviews(updatedReviews);
        }catch(err){
        }
    }
    return(
        <div>
            <h3>AddNewRecipe</h3>
            <Form>
                <Label>Title of the recipe:</Label>
                <input type="text"/><br/>
                <Label>Write down each ingredient of the recipe. Please note that After adding one ingredient, move to the secobd line to add another:</Label>
                <input type="textarea"/><br/>
                <Label>Instructions:</Label>
                <input type="text"/><br/>
                <Label>Write down the image's name that you are going to upload:</Label>
                <input type="text"/><br/>

                <Label>Upload recipe picture:</Label>
                <input type="file" onChange={onFileChange}/><br/>
            <Button variant="info">Submit</Button>
        </Form>
        </div>
    )
}

export default AddNewRecipe;