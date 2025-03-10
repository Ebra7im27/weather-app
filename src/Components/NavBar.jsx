function NavBar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="/assets/Logo.png" alt="Logo" width={50} />
                </a>
                <h2>Weather App</h2>
                <a href="https://github.com/Ebra7im27/weather-app" className="btn btn-outline-success" target="_blank" rel="noopener noreferrer">
                    View Code <i className="fas fa-code"></i>
                </a>

            </div>
        </nav>
    )
}

export default NavBar
