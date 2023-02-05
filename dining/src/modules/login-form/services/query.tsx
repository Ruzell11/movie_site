import { useMutation } from "@tanstack/react-query";
import { userLoginRequest } from ".";

export const useToGetLoginRequest = () => {

    const data = useMutation(userLoginRequest, {
        onSuccess: data => {
          console.log(data);
          const message = "success"
          alert(message)
        },
        onError: () => {
          alert("there was an error")
        }, 
      });
      const { mutate, isLoading , isSuccess } = data;
      return {
        mutate,
        isLoading,
        isSuccess
      }
}