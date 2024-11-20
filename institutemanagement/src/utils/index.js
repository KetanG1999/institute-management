import axios from 'axios';

const makeRequest = async (url, method, data = null) => {
    try {
        let response;
        if (method.toLowerCase() === 'get') {
            response = await axios.get(url);
        } else if (method.toLowerCase() === 'post') {
            response = await axios.post(url, data);
        } else if (method.toLowerCase() === 'put') {
            response = await axios.put(url, data);
        } else if (method.toLowerCase() === 'delete') {
            response = await axios.delete(url);
        } else {
            throw new Error('Unsupported HTTP method');
        }
        // console.log('Response:', response.data);
        return response.data;  // Return the response data
    } catch (error) {
        console.error('There was an error making the request:', error);
        throw error;  // Re-throw the error after logging it
    }
};

export default makeRequest;
