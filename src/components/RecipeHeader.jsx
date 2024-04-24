/* eslint-disable */
import RecipeNutritionalFact from "./RecipeNutritionalFact.jsx";

const recipeHeader = () => {

    const nutritionalFactsArray = [
        {
            id: 1,
            amount: nutritionalFacts.calories,
            category: "calories"
        },
        {
            id: 2,
            amount: nutritionalFacts.carbohydrates,
            category: "carbs"
        },
        {
            id: 3,
            amount: nutritionalFacts.fat,
            category: "fats"
        },
        {
            id: 4,
            amount: nutritionalFacts.protein,
            category: "proteins"
        }
    ]

    return (
        <div className="recipe-header">
            <h1>Test test</h1>
            {nutritionalFactsArray.map((fact) => (
                <RecipeNutritionalFact fact={fact}/>
            ))}
        </div>
    )
}
export default recipeHeader;