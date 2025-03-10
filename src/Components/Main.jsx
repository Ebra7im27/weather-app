function Main() {
    return (
        <>
            <div className="hero border-1 pb-3">
                <div className="card bg-dark text-white border-0 mx-3">
                    <img
                        className="card-img img-fluid"
                        src="/assets/Main.jpg"
                        alt="Card"
                        height={500} />
                    <div className="card-img-overlay d-flex align-items-center">
                        <div className="container">
                            <h5 className="card-title fs-1 text text-white">Welcome to Weather App</h5>
                            <p className="card-text fs-5 d-none d-sm-block text-white">
                                Get accurate and up-to-date weather information for any country. Simply enter the country name and discover detailed weather forecasts.
                                Stay prepared with real-time updates and expert insights to plan your day better.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main