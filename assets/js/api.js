/**
 * All api related stuff like api_key, api request etc.
 */

'use strict';

const api_key = "caf407b8cf58d6e56907301a371b91fa";

/**
 * Fetch data from server
 * @param {string} URL API Url
 * @param {Function} callback callback
 */

export const fetchData = async (URL, callback) => {
    try {
        const response = await fetch(`${URL}&appid=${api_key}`);
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        callback(null);
    }
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
    },

    /**
     * @param {string} query Search query e.g.: "London" , "New York"
     */

    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }
}