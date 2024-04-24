/* eslint-disable */
import Header from "../components/Header.jsx";
import CardList from "../components/CardList.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
        from: '0',
        size: '20'
    },
    headers: {
        'X-RapidAPI-Key': '0aa9e6f768msh6fc497b2cf0d19bp1e76d5jsn63c59374da1c',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
}

const HomePage = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetchRecipes()
    }, [])

    const fetchRecipes = async () => {
        try {
            const response = await axios.request(options);
            setRecipes(response.data.results)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header/>
            <CardList recipes={recipes}/>
        </>
    )
}
export default HomePage;