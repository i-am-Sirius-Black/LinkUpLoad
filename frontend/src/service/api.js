import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const uploadFile= async(data) =>{
    try{
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    }catch (er̥ror){
          console.log("🚀Error while calling the API", er̥ror.message);
          
    }
}