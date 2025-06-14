import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchDestinations = async () => {
  const { data } = await axios.get('http://localhost:8000/api/destinations');
  return data;
};

export const useDestinations = () => {
  return useQuery({
  queryKey: ['destinations'],
  queryFn: fetchDestinations,
});
};
