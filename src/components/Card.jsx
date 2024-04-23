/* eslint-disable */

import {useNavigate} from "react-router-dom";

const Card = ({recipe}) => {

    const navigate = useNavigate()

    const navigateToRecipePage = () => {
        navigate(`/recipe/${recipe.id}`)
    }

    return (
        <div className="card" onClick={navigateToRecipePage}>
            <img src={recipe.image} alt=""/>
            <div className="card-content">
                <h3>{recipe.name}</h3>
                <div className="card-info">
                    <div className="tag">
                        <p>{recipe.tag}</p>
                    </div>
                    <p className="time-text">{recipe.numberOfMinutes} mins</p>
                </div>
            </div>
        </div>
    )
}
export default Card;