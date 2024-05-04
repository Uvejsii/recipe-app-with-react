/* eslint-disable */
import mainImage from "../assets/main-img.jpg";
import {useState} from "react";

const Header = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState("")

    const searchClick = () => {
        handleSearch(searchTerm)
        setSearchTerm("")
    }

    return (
        <header className="main_header">
            <div className="text-container">
                <h1 className="header-title">
                    Look for <span>Banger</span> Food
                </h1>
                <p className="header-description">
                    Look for opportunities to take your time and pick our delicious,
                    one must say, Banger food recipes to make your life even more colorful!
                </p>
                <div className="header-input-container">
                    <input
                        type="text"
                        placeholder="Find a recipe..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={searchClick}>Search</button>
                </div>
            </div>
            <div className="main-img-container">
                <img src={mainImage} alt="cake image" className="main_img"/>
            </div>
        </header>
    )
}
export default Header;