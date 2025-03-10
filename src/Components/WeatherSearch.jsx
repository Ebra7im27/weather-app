import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Loader from './Loader';

function WeatherSearch() {
    const [location, setLocation] = useState({})
    const [current, setCurrent] = useState({})
    const [Search, setSearch] = useState("")
    const [Loading, setloading] = useState(false)



    const fetchWeather = () => {
        if (!Search) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a city name!',
            })
            return
        }

        setloading(true)

        axios.get(`https://api.weatherapi.com/v1/current.json?key=fcb705eb5e0845eab9c203644251702&q=${Search}&aqi=no`)
            .then((response) => {
                console.log(response.data)  // Check Data
                setLocation(response.data.location)
                setCurrent(response.data.current)
            })
            .catch((error) => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.'
                })
            })
            .finally(() => {
                setloading(false)
            })
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="input-group mb-5">
                        <input
                            type="search"
                            className="form-control"
                            value={Search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="🔎 Enter city name..."
                            aria-label="Enter city name"
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-primary"
                            type="button"
                            id="button-addon2"
                            onClick={fetchWeather}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <section>
                {Loading ? (
                    <Loader />
                ) : (location?.country && current?.temp_c && (
                    <div className="container d-flex justify-content-center">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-4 d-flex justify-content-center">
                                <div className="card text-bg-light mb-3" style={{ width: "18rem" }}>
                                    <div className="card-header fs-4 fw-bold"><i className="fas fa-map-pin" style={{ color: "red" }}></i> Location</div>
                                    <div className="card-body">
                                        <h5 className="card-title fs-5">Country : <p className='fw-normal fs-6 d-inline'>{location.country}</p></h5>
                                        <h5 className="card-title fs-5">City : <p className='fw-normal fs-6 d-inline'>{location.name}</p></h5>
                                        <h5 className="card-title fs-5">Location Time : <p className='fw-normal fs-6 d-inline'>{location.localtime}</p></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 d-flex justify-content-center">
                                <div className="card text-bg-light mb-3" style={{ width: "18rem" }}>
                                    <div className="card-header fs-4 fw-bold"><i className="fas fa-cloud text-secondary"></i> Weather</div>
                                    <div className="card-body">
                                        <h5 className="card-title fs-5">Temperature : <p className='fw-normal fs-6 d-inline'>{current.temp_c}°C</p></h5>
                                        <h5 className="card-title fs-5">Feels Like : <p className='fw-normal fs-6 d-inline'>{current.temp_f}°F</p></h5>
                                        <h5 className="card-title fs-5">Status : <p className='fw-normal fs-6 d-inline'><img src={current.condition.icon} alt={current.condition.text} /></p></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 d-flex justify-content-center">
                                <div className="card text-bg-light mb-3" style={{ width: "18rem" }}>
                                    <div className="card-header fs-4 fw-bold"><i className="fas fa-info-circle"></i> Details</div>
                                    <div className="card-body">
                                        <h5 className="card-title fs-5">Humidity : <p className='fw-normal fs-6 d-inline'>{current.humidity}%</p></h5>
                                        <h5 className="card-title fs-5">Wind Speed : <p className='fw-normal fs-6 d-inline'>{current.wind_kph}kph</p></h5>
                                        <h5 className="card-title fs-5">Pressure : <p className='fw-normal fs-6 d-inline'>{current.pressure_mb}mb</p></h5>
                                        <h5 className="card-title fs-5">Visibility : <p className='fw-normal fs-6 d-inline'>{current.vis_km}km</p></h5>
                                        <h5 className="card-title fs-5">UV Index : <p className='fw-normal fs-6 d-inline'>{current.uv}</p></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div >
    )
}

export default WeatherSearch