import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: false,
});

const useAxiosSecure = () => {
  const { userLogOut } = useAuth() || {};
  useEffect(() => {
    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response === 401 || error.response === 403) {
          userLogOut();
        }
      }
    );
  }, [userLogOut]);

  return instance;
};

export default useAxiosSecure;
