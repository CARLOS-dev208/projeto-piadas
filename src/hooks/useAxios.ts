import { useState, useEffect } from "react";
import { getAxiosInstance } from "../services/api/Axios-instance.ts ";

export interface AsyncReturnType<T> {
  result: T | any;
  erro: boolean;
}
export function useAxios<Data = any>(
  params: string,
  listaNegra: string
): AsyncReturnType<Data> {
  const [result, setResult] = useState<Data>();
  const [erro, setErro] = useState(false);
  const axios = getAxiosInstance();

  useEffect(() => {
    const fn = async () => {
      try {
        const param = params.match("Any") ? "Any" : params;
        if (param && listaNegra) {
          const { data } = await axios.get<Data>(
            param + `?blacklistFlags=${listaNegra}&amount=10`
          );
          setResult(data);
          setErro(false);
        } else if (param) {
          const { data } = await axios.get<Data>(param + `?amount=10`);
          setResult(data);
          setErro(false);
        }
      } catch (error) {
        setErro(true);
      }
    };

    fn();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, listaNegra]);

  return { result, erro };
}

// const { data, error } = useSWR<Data>(params, async (params) => {
//   const resposta = await axios.get(params);
//   return resposta.data.jokes;
// });
// return { data, error };
