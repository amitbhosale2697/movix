import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

console.log("git setup")

export const fetchDataFromApi = async (url,params) => {
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params,
        })
        return data
    } catch (error) {
        console.log(err)
        return err
    }
}

