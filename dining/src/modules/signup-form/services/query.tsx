import { useMutation } from "@tanstack/react-query";
import { userSignUpRequest } from ".";

export const useToGetUserRequest = () => {
    const data = useMutation(userSignUpRequest, {
        onSuccess: data => {
          console.log(data);
          const message = "success"
          alert(message)
        },
        onError: () => {
          alert("there was an error")
        }, 
      });
      const { mutate, isLoading } = data;
      return {
        mutate,
        isLoading
      }
}