import axios from "axios"
import {useState} from "react";

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
    params: {id: '8138'},
    headers: {
        'X-RapidAPI-Key': '0aa9e6f768msh6fc497b2cf0d19bp1e76d5jsn63c59374da1c',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

const useFetchRecipe = () => {
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchRecipe = async (id) => {
        setLoading(true)
        setRecipe(null)
        setError(null)
        try {
            const reqOptions = {...options}
            reqOptions.params.id = id
            const response = await axios.request(reqOptions)
            setRecipe(response.data.results)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    return [fetchRecipe, {data: recipe, loading, error}]
}
export default useFetchRecipe;