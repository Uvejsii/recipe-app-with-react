/* eslint-disable */
import Header from "../components/Header.jsx";
import CardList from "../components/CardList.jsx";
import useFetchRecipes from "../hooks/useFetchRecipes.js";
import Loading from "../components/Loading.jsx";
import {useEffect} from "react";


const HomePage = () => {
    const [fetchRecipes, {data, loading, error}] = useFetchRecipes()

    useEffect(() => {
        fetchRecipes()
    }, [])

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            fetchRecipes(searchTerm)
        }
    }

    return (
        <>
            <Header handleSearch={handleSearch}/>
            {loading && <Loading/>}
            {data && <CardList recipes={data}/>}
            {error && <p>{error}</p>}
        </>
    )
}
export default HomePage;