import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine} from 'react-sparklines';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red"/>
          </Sparklines>
        </td>
      </tr>
    )
  }


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
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
