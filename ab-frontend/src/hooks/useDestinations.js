import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDestinations = async ({ queryKey }) => {
  const [_key, page, limit] = queryKey;
  const { data } = await axios.get(`http://localhost:8000/api/destinations?page=${page}&limit=${limit}`);
  return data;
};

export const useDestinations = (page = 1, limit = 3) => {
  return useQuery({
    queryKey: ['destinations', page, limit],
    queryFn: fetchDestinations,
    keepPreviousData: true,
  });
};
