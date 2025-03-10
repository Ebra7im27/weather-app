import Footer from "../../Components/Footer"
import Main from "../../Components/Main"
import NavBar from "../../Components/NavBar"
import WeatherSearch from "../../Components/WeatherSearch"

function Home() {
    return (
        <>
            <NavBar />
            <Main />
            <WeatherSearch />
            <Footer />
        </>
    )
}

export default Home