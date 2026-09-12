import { axiosInstance } from "../../../../config/api"

export const getAllEmployee = async ({page=1, limit=25}) => {
    try {
        let res = await axiosInstance.get(`/employee?page=${page}&limit=${limit}`);
        console.log(res.data.data)
        return res.data?.data
    } catch (error) {
        console.log(error)
    }
}

