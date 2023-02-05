import axios from "axios";


export type paramsObj = {
    name: string;
    email: string;
    password: string;
  };

export const userSignUpRequest =async(params:paramsObj) => {
    let axiosConfig = {
        headers: {
          Accept: "application/json",
        }
      };
    try{
        const data = await axios.post(
            "http://127.0.0.1:8000/api/register-user",
            params,
            axiosConfig
          );
          return data;
    }catch(error){
        throw error;
    }
    
}

