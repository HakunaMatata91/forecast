import React, { Component } from 'react';
import './Weather.scss';

const format_date = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

class Weather extends Component {
    render() {
        return (
            <div className="weather_day_wrapper">
                {this.props.city &&
                    <div className="weather_day">
                        <h4>Current weather data</h4>
                        <div className="separator"></div>
                        <div className="weather_box">
                            <p>Location: </p>
                            <p className="title_info">{this.props.city}, {this.props.country}</p>
                        </div>
                        <div className="weather_box">
                            <p>Temperature: </p>
                            <p className="title_info">{Math.round(this.props.temp)}°C</p>
                        </div>

                        <div className="weather_box">
                            <p>Feels like: </p>
                            <p className="title_info">{Math.round(this.props.feels_like)}°C</p>
                        </div>
                        <div className="weather_box">
                            <p>Cloudy: </p>
                            <p className="title_info">{this.props.description}</p>
                        </div>
                    </div>
                }
                {/* <p>{this.props.error}</p> */}

                <div className="image_box">
                    <div className="title_box">
                        <p className="card-title">{format_date(new Date())}</p>
                    </div>
                    <img className="image" src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="description" /></div>
            </div>
        );
    }
}

export default Weather;
