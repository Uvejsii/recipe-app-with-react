/* eslint-disable */
import axios from "axios";
import {useState} from "react";


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

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchRecipes = async (searchTerm) => {
        setLoading(true)
        setRecipes(null)
        setError(null)
        try {
            const reqOptions = {...options}
            if (searchTerm) {
                reqOptions.params.q = searchTerm
            }
            const response = await axios.request(reqOptions)
            setRecipes(response.data.results)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    return [fetchRecipes, {data: recipes, loading, error}]
}
export default useFetchRecipes;