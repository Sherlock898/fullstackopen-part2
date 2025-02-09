const WeatherInfo = ({weather, country}) => {
    if(weather == null){
        return;
    }

    return(
        <>
            <h1>Weather in {country.capital[0]}</h1>
            <div>temperature: {parseFloat(weather.main.temp - 273.15).toFixed(2)} °C</div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <div>wind {weather.wind.speed} m/s</div>
        </>
    );
}

const Countries = ({countries, handleShow, weather}) => {
    if(countries.length > 10){
        return <div>Too many matches, specify another filter</div>;
    }

    if(countries.length != 1){
        return (
            <ul>
                {countries.map((country, i) => <li key={i}>{country.name.common} <button onClick={() => handleShow(country.name.common)}>show</button></li>)}
            </ul>
        );
    }

    const country = countries[0]

    return (
        <>
            <h1>{country.name.common}</h1>

            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>

            <h2>languages:</h2>

            <ul>
                {Object.values(country.languages).map((language, i) => <li key={i}>{language}</li>)}
            </ul>

            <img src={country.flags.png}/>

            <WeatherInfo weather={weather} country={country} /> 
        </>
    )
}

export default Countries;