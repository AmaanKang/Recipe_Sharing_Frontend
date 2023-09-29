import React from 'react';
import {useState,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import './AddNewRecipe.css';

const AddNewRecipe = () => {
    const [selectedFile,setSelectedFile] = useState(null);
    const [_title,set_title] = useState("");
    const [_ingredients,set_ingredients] = useState("");
    const [_instructions,set_instructions] = useState("");
    const [_image_Name,set_image_Name] = useState("");

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }
    
    const ontitleChange = (e) => {
        set_title(e.target.value);
    }

    const oningredientsChange = (e) => {
        set_ingredients(e.target.value);
    }

    const oninstructionsChange = (e) => {
        set_instructions(e.target.value);
    }

    const onimageChange = (e) => {
        set_image_Name(e.target.value);
    }

    const submitRecipe = async(e) => {
        e.preventDefault();
        console.log(_title);
        console.log(_ingredients);
        console.log(_instructions);
        console.log(_image_Name);
        try{
            const response = await api.post("api/v1/recipes",{title:_title,ingredients:_ingredients,instructions:_instructions,image_Name:_image_Name});
            console.log(response.data);
            //const updatedRecipes = [...recipes,{body:rev.value}];
            //setReviews(updatedReviews);
        }catch(err){
        }
    }
    return(
        <div className="recipe-form">
            <h3>Add a New Recipe</h3>
            <Form>
                <Form.Group>
                <Form.Label>Title of the recipe:</Form.Label>
                <Form.Control type="text" onChange={ontitleChange}/>
                </Form.Group>

                <Form.Group>
                <Form.Label>Write down each ingredient of the recipe. Please note that After adding one ingredient, move to the secobd line to add another:</Form.Label>
                <Form.Control type="textarea" rows={3} onChange={oningredientsChange} />
                </Form.Group>

                <Form.Group>
                <Form.Label>Instructions:</Form.Label>
                <Form.Control type="text" onChange={oninstructionsChange}/>
                </Form.Group>

                <Form.Group>
                <Form.Label>Write down the image's name that you are going to upload:</Form.Label>
                <Form.Control type="text" onChange={onimageChange} />
                </Form.Group>

                <Form.Group>
                <Form.Label>Upload recipe picture:</Form.Label>
                <Form.Control type="file" onChange={onFileChange}/>
                </Form.Group>

                <Form.Group>
                <Button variant="info" onClick={submitRecipe}>Submit</Button>
                </Form.Group>
                
        </Form>
        </div>
    )
}

export default AddNewRecipe;