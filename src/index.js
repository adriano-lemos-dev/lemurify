import React from 'react';
import { render } from 'react-dom';
import { App } from './app/app'


render(<App/>,  document.getElementById("root"));

(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js', {scope: '/lemurify/'})
            .then(() => console.log('Service Worker registered successfully.'))
            .catch(error => console.log('Service Worker registration failed:', error));
    }
})();