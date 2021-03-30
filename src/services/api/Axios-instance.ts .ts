import axios, { AxiosInstance } from "axios";

const BaseURL = process.env.REACT_APP_BASE_URL;
export const getAxiosInstance = (): AxiosInstance => {
  let axiosInstance = axios.create({ baseURL: BaseURL });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;
      if (status > 399) {
        console.info("Erro na api. Status:", status);
      }
    }
  );
  return axiosInstance;
};
