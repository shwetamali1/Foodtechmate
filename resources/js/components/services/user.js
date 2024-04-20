// Import Axios
import axios from 'axios';

// Define an async function to make the API call
export async function getTestCall() {
    try {
        // Make a GET request to the /testcall endpoint
        const response = await axios.get('/client/testcall');

        // Handle the response and return the data
        return response.data;
    } catch (error) {
        // Handle errors, such as network errors or 401 Unauthorized
        console.error('Error fetching testcall:', error);
        throw error; // Rethrow the error for the caller to handle
    }
}


export async function storeGmailData($data) {
    try {
        const response = await axios.post('/client/storeGmailData', $data);
        return response.data;
    } catch (error) {
        console.error('Error fetching testcall:', error);
        throw error; 
    }
}
