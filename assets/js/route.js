/**
 * Manage all routes
 */

'use strict';

import { updateWeather, error404 } from './app.js';

const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474"; // London

const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition(res => {
        const { latitude, longitude } = res.coords;

        updateWeather(latitude, longitude);
    }, err => {
        window.location.hash = defaultLocation;
    });
}

/**
 * @param {string} query Searched query 
 */

const searchedLocation = query => {
    const [lat, lon] = query.split("&");
    const latValue = lat.split("=")[1];
    const lonValue = lon.split("=")[1];
    updateWeather(latValue, lonValue);
}

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation],
]);

const checkHash = function () {
    const requestURL = window.location.hash.slice(1);

    const [route, query] = requestURL.includes("?") ? requestURL.split("?") : [requestURL];

    routes.get(route) ? routes.get(route)(query) : error404();
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
    if (!window.location.hash) {
        window.location.hash = "#/current-location";
    } else {
        checkHash();
    }
});