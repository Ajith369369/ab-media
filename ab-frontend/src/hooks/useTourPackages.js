import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTourPackages = async () => {
  const { data } = await axios.get('http://localhost:8000/api/packages/top-selling');
  return data;
};

export const useTourPackages = () => {
  return useQuery({
  queryKey: ['tourPackages'],
  queryFn: fetchTourPackages,
});
};
