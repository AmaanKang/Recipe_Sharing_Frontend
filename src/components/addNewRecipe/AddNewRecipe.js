import React from 'react';
import {useState,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import './AddNewRecipe.css';
import uploadApi from '../../api/axiosFileUpload';

const AddNewRecipe = () => {
    const [selectedFile,setSelectedFile] = useState(null);
    const [_title,set_title] = useState("");
    const [_ingredients,set_ingredients] = useState("");
    const [_instructions,set_instructions] = useState("");
    const [message,setMessage] = useState("");

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

    const submitRecipe = async(e) => {
        if(_title == "" || _instructions == "" || _ingredients == ""){
            setMessage("Please fill in all fields.");
        }else{
            e.preventDefault();
            try{
                const response = await api.post("api/v1/recipes",{title:_title,ingredients:_ingredients,instructions:_instructions,image_Name:selectedFile.name.substring(0,selectedFile.name.length-4)});
                console.log(response.data);
                const formData = new FormData(); 
                formData.append(
                    "file",
                    selectedFile,
                    selectedFile.name
                );
                const response2 = uploadApi.post("/upload", formData);
                if(response.data != null && response2.data != null){
                    //selectedFile = null;
                    _title = "";
                    _ingredients = "";
                    _instructions = "";
                    setMessage("The recipe has been uploaded successfully! You can search for it under All Recipes page.");
                }
            }catch(err){
                setMessage("Please check that the data is correct in all fields and a recipe picture has been added");
            }
        }
    }
    return(
        <div className="recipe-form">
            <h3>Add a New Recipe</h3>
            <Form>
                <Form.Group>
                <Form.Label>Title of the recipe:</Form.Label>
                <Form.Control type="text" onChange={ontitleChange} value={_title} required/>
                </Form.Group>
                <br/>
                <Form.Group>
                <Form.Label>Write down each ingredient of the recipe. Please note that After adding one ingredient, move to the secobd line to add another:</Form.Label>
                <Form.Control type="textarea" rows={3} onChange={oningredientsChange} value={_ingredients} required/>
                </Form.Group>
                <br/>
                <Form.Group>
                <Form.Label>Instructions:</Form.Label>
                <Form.Control type="text" onChange={oninstructionsChange} value={_instructions} required/>
                </Form.Group>
                <br/>
                <Form.Group>
                <Form.Label>Upload recipe picture (The file type should be jpg):</Form.Label>
                <Form.Control type="file" onChange={onFileChange} ref={selectedFile} required />
                </Form.Group>
                <br/>
                <Form.Group>
                <Button variant="info" onClick={submitRecipe}>Submit</Button>
                </Form.Group>
                <br/>
        </Form>
        <div className='validation'>
        <p>{message}</p>
        </div>
        </div>
    )
}

export default AddNewRecipe;