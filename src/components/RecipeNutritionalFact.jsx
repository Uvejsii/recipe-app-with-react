const recipeNutritionalFact = ({fact}) => {
    return (
        <div className="recipe-fact-container">
            <img src="" alt=""/>
            <h3>{fact.amount}</h3>
            <p>{fact.category}</p>
        </div>
    )
}
export default recipeNutritionalFact;