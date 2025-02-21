import axios from "axios";

const api = axios.create({
    baseURL: "https://free-api-live-football-data.p.rapidapi.com",
    headers:{
        'x-rapidapi-key': '30d1766715msh1259f57197a723dp1697cbjsn9d4bc638de02',
    'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
    }
});

export default api;
