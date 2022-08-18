
import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
 params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
 
  },
  headers: {
    'X-RapidAPI-Key': '497f3eba87mshe724c0a39e892ccp1f5eb8jsndbb2024605cd',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlacesData = async () => {
    try {
        const { data: {datat}} = await axios.get(URL, options);
        return data
    }catch {error} {
        console.log(error)
    }
}