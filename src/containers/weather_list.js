import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// need to get data into this component

function mapStateToProps({ weather }) {
  // using state.weather because we assigned weather reducer to weather key in reducer
  return { weather };
}


export default connect(mapStateToProps)(WeatherList);

// refactor below into mapStateToProps above
  // isntead of state.weather, we do { weather }, which is defining a variable weather
    // same as const weather = state.weather
  // if key and value are same, we can use one
// function mapStateToProps(state) {
//   // using state.weather because we assigned weather reducer to weather key in reducer
//   return { weather: state.weather }
// }
