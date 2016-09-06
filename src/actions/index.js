import axios from 'axios';

const API_KEY = 'f3af398493b532e61558971e2e8935d6'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// making variable point to string so there's a single source of truth with our action types

// action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER
  }
}


http://api.openweathermap.org/data/2.5/forecast?appid=f3af398493b532e61558971e2e8935d6&q=new york, us
