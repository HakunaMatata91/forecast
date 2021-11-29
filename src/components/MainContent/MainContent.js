import React, { Component } from 'react';
import Content from './Content/Content';
import Form from './Form/Form';
import Weather from './Weather/Weather';
import Info from './Info/Info.js';

// Api ключ по которому получаем данные о погоде.
const API_KEY = "f3367a4e7b4e0dfcd667a045e6347dc1";

class MainContent extends Component {

  constructor(props) {
    // вызываем родительский конструктор
    super(props);
    // задаем state с дефолтными значениями
    this.state = {
      temp: undefined,
      feels_like: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      pressure: undefined,
      speed: undefined,
      description: undefined,
      icon: undefined,
      humidity: undefined,
      loading: false,
      error: undefined
    };
    // биндим правильный this
    this.getWeatherForCity = this.getWeatherForCity.bind(this);
    this.gettingWeather = this.gettingWeather.bind(this);
  }
  

  async getWeatherForCity(city) {
    try {
      if (!city) throw new Error('City is not defined');

      this.setState({
        loading: true
      });

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();

      console.log(data);

      
      let sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
      let sunset = new Date((data.sys.sunset + data.timezone) * 1000);
      let sunrise_date = sunrise.getUTCHours() + ":" + sunrise.getUTCMinutes();
      let sunset_date = sunset.getUTCHours() + ":" + sunset.getUTCMinutes();

      this.setState({
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        pressure: data.main.pressure,
        speed: data.wind.speed,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        loading: false,
        error: undefined
      });
    } catch(error) {
      this.setState({
        loading: false,
        error: "Enter the correct name of the city",
      });
    }
  }


  async gettingWeather(cityName) {
    console.log("gettingWeather", cityName)
    // validate user input
    // getting rid from whitespaces
    let trimmedCityName = cityName.trim();
    let cityRegex = new RegExp(/^[a-zA-Z а-яА-Я]+(?:[\s-][a-zA-Z а-яА-Я]+)*$/);
    if (!cityRegex.test(trimmedCityName)){
      alert("Enter the correct name of the city");
      return;
    }

    await this.getWeatherForCity(trimmedCityName);
  }

  componentDidMount() {
    // load default city
    this.getWeatherForCity('Kiev');
  }

  render() {
    return (
      <div className="MainContent">
        <div className="container">
          <Content />
          <Form weatherMethod={this.gettingWeather} loading={this.state.loading} error={this.state.error}/>
          <div className="wrapper">
            <Weather
              temp={this.state.temp}
              feels_like={this.state.feels_like}
              city={this.state.city}
              country={this.state.country}
              // error={this.state.error}
              description={this.state.description}
              icon={this.state.icon}
            />

            <Info
              speed={this.state.speed}
              country={this.state.country}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}

            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;


