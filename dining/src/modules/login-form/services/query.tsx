import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/dist/client/router";
import { userLoginRequest } from ".";

export const useToGetLoginRequest = () => {
  const router = useRouter();

    const data = useMutation(userLoginRequest, {
        onSuccess: _ => {
          router.push('/')
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