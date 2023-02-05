import axios from "axios";


export type paramsObjLogin = {
    email: string;
    password: string;
  };

export const userLoginRequest =async(params:paramsObjLogin) => {
    let axiosConfig = {
        headers: {
          Accept: "application/json",
        }
      };
    try{
        const data = await axios.post(
            "http://127.0.0.1:8000/api/login-user",
            params,
            axiosConfig
          );
          return data;
    }catch(error){
        throw error;
    }
    
}

