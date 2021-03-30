import { useState, useEffect } from "react";
import { getAxiosInstance } from "../services/api/Axios-instance.ts ";

export interface AsyncReturnType<T> {
  erro: boolean;
  result: T | undefined;
}
export function useAxios<Data = any>(params: string): AsyncReturnType<Data> {
  const [result, setResult] = useState<Data>();
  const [erro, setErro] = useState(false);
  const axios = getAxiosInstance();
  useEffect(() => {
    const fn = async () => {
      try {
        const { data } = await axios.get<Data>(params + "?amount=10");
        setResult(data);
        setErro(false);
      } catch (error) {
        setErro(true);
      }
    };
    fn();
  }, [params]);

  return { result, erro };
}

// const { data, error } = useSWR<Data>(params, async (params) => {
//   const resposta = await axios.get(params);
//   return resposta.data.jokes;
// });
// return { data, error };
