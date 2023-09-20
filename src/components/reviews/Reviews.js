import {useEffect,useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = ({getRecipeData,recipe,reviews,setReviews}) => {
    const revText = useRef();
    const params = useParams();
    const recipeId = params.recipeId;
    
    const addReview = async(e) => {
        e.preventDefault();
        const rev = revText.current;
        console.log(rev.value);
        try{
            const response = await api.post("api/v1/reviews",{reviewBody:rev.value,ID:recipeId});
            console.log(response.data);
            const updatedReviews = [...reviews,{body:rev.value}];
            rev.value = "";
            setReviews(updatedReviews);
        }catch(err){

        }
    }

    useEffect(() => {
        getRecipeData(recipeId);
    },[]);
    return(
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col><img src={('../../Food_Images/'+recipe?.image_Name+'.jpg')} /></Col>
                <Col>
                {
                    <>
                    <Row>
                        <Col>
                        <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a review?" defaultValue={""}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr />
                        </Col>
                    </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <div key={r.id}>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col></Col>
                                </Row>
                            </div>
                        )
                    })
                }
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews;