'use strict';

const api_key = '58384678797335b90659ff579b41b183';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = function(url, callback, optionalParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };