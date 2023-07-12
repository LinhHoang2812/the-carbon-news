import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const fetchBar = (url) => {
  const { data, isLoading } = useQuery({
    queryKey: ["bar"],
    queryFn: () => axios(url),
  });
  return { data, isLoading };
};

export const fetchLine = (url) => {
  const { data, isLoading } = useQuery({
    queryKey: ["line"],
    queryFn: () => axios(url),
  });
  return { data, isLoading };
};
export const fetchPie = (url) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pie"],
    queryFn: () => axios(url),
  });
  return { data, isLoading };
};

export const fetchSpeedo = (url) => {
  const { data, isLoading } = useQuery({
    queryKey: ["speedo"],
    queryFn: () => axios(url),
  });
  return { data, isLoading };
};
