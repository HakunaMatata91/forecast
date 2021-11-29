import React, { Component } from 'react';
import './Info.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWind } from '@fortawesome/free-solid-svg-icons';
import Wind_speed from '../image/wind.png';
import Pressure from '../image/Pressure.png';
import Sunset from '../image/sunset.png';
import Sunrise from '../image/Sunrise.png';
import Humidity from '../image/Humidity.png';


class Info extends Component {
    render() {
        return (
            <div className="info">
                {this.props.country &&
                    <div className="weather_info" >
                        <h4>More weather details</h4>
                        <div className="separator"></div>
                        <div className="icon_box">
                            <img src={Wind_speed} className="icon" alt="Wind" />
                            <p>Wind speed:</p>
                            <p className="more_title_info">  {this.props.speed} mi/hr </p>
                        </div>
                        <div className="icon_box">
                            <img src={Pressure} className="icon" alt="Pressure" />
                            <p>Pressure:</p>
                            <p className="more_title_info">{this.props.pressure}  </p>
                        </div>
                        <div className="icon_box">
                            <img src={Humidity} className="icon" alt="Humidity" />
                            <p>Humidity:</p>
                            <p className="more_title_info"> {this.props.humidity} % </p>
                        </div>
                        <div className="icon_box">
                            <img src={Sunrise} className="icon" alt="Sunrise" />
                            <p>Sunrise:</p>
                            <p className="more_title_info">{this.props.sunrise} AM</p>
                        </div>
                        <div className="icon_box">
                            <img src={Sunset} className="icon" alt="Sunset" />
                            <p>Sunset: </p>
                            <p className="more_title_info"> {this.props.sunset} PM</p>
                        </div>
                    </div>

                }
            </div>
        );
    }
}

export default Info;
