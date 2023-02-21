import axios from 'axios';

const URL_API_Destinations = 'https://back-worshop4-production.up.railway.app/';

export const getData = async (endpoint) => {
    try {
        const { data } = await axios.get(`${URL_API_Destinations}${endpoint}`);
        return data;
    } catch (error) {
        return error;
    }
};
