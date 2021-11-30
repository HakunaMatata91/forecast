import React, { Component } from 'react';
import './Form.scss';


class Form extends Component {
    constructor(props) {
        super(props);
        // Load default city
        this.state = { cityName: 'Kyiv' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
        this.setState({ cityName: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.weatherMethod(this.state.cityName);
    }

    render() {
        return (
            <div className="form_box">
                <form onSubmit={this.handleSubmit}>
                    <div className="form_loading" style={{ opacity: this.props.loading ? 1 : 0 }}></div>
                    <input type="text" value={this.state.cityName} onChange={this.handleChange} name="city" placeholder="Weather in your city" autoComplete="on" />
                    <div className="form_error" style={{ opacity: this.props.error ? 1 : 0 }}>Enter the correct name of the city</div>
                    <button type="submit" disabled={!this.state.cityName}>Check weather</button>
                </form>
            </div>
        );
    }
}

export default Form;
