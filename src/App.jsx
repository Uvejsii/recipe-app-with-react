import './App.css'
import Header from "./components/Header.jsx";
import CardList from "./components/CardList.jsx";

function App() {

    return (
        <div className="App">
            <main className="main_container">
                <Header/>
                <CardList/>
            </main>
        </div>
    )
}

export default App
