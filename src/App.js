import React from "react"
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_key = "b96be7ddd7449cb8dec1d315856fada7"
class App extends React.Component {
  state = {
    curr_temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_key}`)
    const data = await api_call.json()
    if (data.main) {
      this.setState({
        curr_temp: data.main.temp,
        city: data.name,
        country: country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined
      })
    }
    else{
      this.setState({
        curr_temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter valid values"
      })

    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <br />
                  <Weather curr_temp={this.state.curr_temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />          
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

        
export default App