/* eslint-disable */

import {useNavigate} from "react-router-dom";

const Card = ({recipe}) => {

    const navigate = useNavigate()

    const navigateToRecipePage = () => {
        navigate(`/recipe/${recipe.id}`)
    }

    return (
        <div className="card" onClick={navigateToRecipePage}>
            <img src={recipe.thumbnail_url} alt=""/>
            <div className="card-content">
                <h3>{recipe.name}</h3>
                <div className="card-info">
                    <div className="tag">
                        {recipe.topics.length > 0 ? <p>{recipe.topics[0].name}</p> : null}
                    </div>
                    {recipe.total_time_minutes ? <p className="time-text">{recipe.total_time_minutes} mins </p>
                        : null}
                </div>
            </div>
        </div>
    )
}
export default Card;