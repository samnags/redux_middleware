import axios from 'axios';

const API_KEY = 'f3af398493b532e61558971e2e8935d6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);
  // our request is returning a promise which we assign to payload
  // because of redux-promise, this payload will be resolved request
  // it won't be the promise. it will wait till promise resolves and then sends that to reducer
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// making variable point to string so there's a single source of truth with our action types

// action creator
