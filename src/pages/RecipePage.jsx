/* eslint-disable */
import {useParams} from "react-router-dom";

const RecipePage = () => {
    const {id} = useParams()

    const recipe = recipes.find(r => r.id === Number(id))

    return (
        <div>
            <h1>{recipe.name}</h1>
        </div>
    )
}
export default RecipePage;