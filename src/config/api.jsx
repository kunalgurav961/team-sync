import axios from "axios";
export let axiosInstance = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
    responce => responce,
    async (error) => {
  const originalReq = error.config;

  if (error.response.status == 401 && !originalReq._retry) {
    originalReq._retry = true;

    try {
      await axiosInstance.get("/auth/get-accessTocken");
      return axiosInstance(originalReq);
    } catch (error) {
        console.log("error in AxiosInstance")
      window.location.href = "/";
      return Promise.reject(error);
    }
  }
});
