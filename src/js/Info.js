import React, { Component } from 'react';
import '../scss/Info.scss';
import Wind_speed from '../images/img_form/wind.png';
import Pressure from '../images/img_form/Pressure.png';
import Sunset from '../images/img_form/sunset.png';
import Sunrise from '../images/img_form/Sunrise.png';
import Humidity from '../images/img_form/Humidity.png';


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
