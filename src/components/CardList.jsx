/* eslint-disable */
import Card from "./Card.jsx";
import mainImage from "../assets/main-img.jpg";


const recipes = [
    {
        id: 1,
        name: "Poke Bowls",
        image: mainImage,
        tag: "Romantic Dinner",
        numberOfMinutes: 50
    },
    {
        id: 2,
        name: "Chocolate banana cake",
        image: mainImage,
        tag: "Test Desert",
        numberOfMinutes: 30
    },
    {
        id: 3,
        name: "Burek me mish",
        image: mainImage,
        tag: "Test Breakfast",
        numberOfMinutes: 25
    },
    {
        id: 4,
        name: "Shawarma",
        image: mainImage,
        tag: "Romantic Lunch",
        numberOfMinutes: 20
    }
]

const CardList = () => {
    return (
        <section className="cards">
            {recipes.map((recipe) => (
                <Card key={recipe.id} recipe={recipe}/>
            ))}
        </section>
    )
}
export default CardList;