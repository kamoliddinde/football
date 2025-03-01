import axios from "axios";

const api = axios.create({
    baseURL: "https://free-api-live-football-data.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '3b893048demsh1fa1deeee0cdad5p15c9c5jsn21aa855c9011',
        'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
    }
});      

export default api;