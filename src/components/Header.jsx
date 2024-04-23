import mainImage from "../assets/main-img.jpg";

const Header = () => {
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
                    <input type="text" placeholder="Find a recipe..."/>
                    <button>Search</button>
                </div>
            </div>
            <div>
                <img src={mainImage} alt="cake image" className="main_img"/>
            </div>
        </header>
    )
}
export default Header;