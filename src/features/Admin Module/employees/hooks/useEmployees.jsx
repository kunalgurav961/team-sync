import { useQuery } from "@tanstack/react-query";
import { getAllEmployee } from "../apis/employeeApi";

export let useEmployees = () => {
  let { data, isPending } = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployee,
  });

  return {
    data,
    isPending,
  };
};
