import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTourPackages = async ({ queryKey }) => {
  const [_key, page, limit] = queryKey;
  const { data } = await axios.get(
    `http://localhost:8000/api/packages/top-selling?page=${page}&limit=${limit}`
  );
  return data;
};

export const useTourPackages = (page = 1, limit = 3) => {
  return useQuery({
    queryKey: ["tourPackages", page, limit],
    queryFn: fetchTourPackages,
    keepPreviousData: true,
  });
};
