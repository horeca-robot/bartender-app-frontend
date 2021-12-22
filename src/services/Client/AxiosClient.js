import axios from "axios";

const backendBaseURL = process.env['VUE_APP_BACKEND_URL'];
const apiBaseURL = process.env['VUE_APP_API_BASE_URL'];

const baseURL = `${backendBaseURL}${apiBaseURL}`;

// Creates a pre-configured axios object with a base URL and some standard request headers
// For more information: https://github.com/axios/axios
export default function getAxiosConfig(jwt)
{
    return axios.create({
        baseURL,
        headers: {
            mode: 'cors',
            "Authorization": `Bearer: ${jwt}`
        }
    });
}
