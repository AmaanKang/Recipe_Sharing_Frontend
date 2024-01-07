/**
 * axiosFileUpload.js
 * This module exports an axios instance which is pre-configured with base URL and headers.
 * @module axiosFileUpload
 */

// Importing axios module
import axios from 'axios';

/**
 * An axios instance with pre-configured base URL and headers.
 * @type {AxiosInstance}
 */
export default axios.create({
    // Base URL for the axios instance
    baseURL: 'http://localhost:4000',
    // Headers for the axios instance
    headers: {
        // ngrok-skip-browser-warning header to skip browser warning
        "ngrok-skip-browser-warning": "true",
        // Access-Control-Allow-Origin header to allow cross-origin requests
        "Access-Control-Allow-Origin": "*",
        // Access-Control-Allow-Methods header to allow specific HTTP methods
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});