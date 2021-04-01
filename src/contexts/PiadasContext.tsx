import { createContext, ReactNode, useState } from "react";
import { getDadosCategoria, getDadosListaNegra } from "../components/dados";
import { useAxios } from "../hooks/useAxios";

export interface PiadasProps {
  jokes: [{ id: number; setup: string; delivery: string; joke: string }];
}
interface PiadasProviderProps {
  children: ReactNode;
}

interface PiadasContextData {
  result: PiadasProps;
  modal: boolean;
  selecionado: boolean;
  busca: () => void;
  modalUp: () => void;
  selecionar: () => void;
}
export const PiadasContext = createContext({} as PiadasContextData);

export function PiadasProvider({ children }: PiadasProviderProps) {
  const [categoria, setCategoria] = useState<string>("");
  const [listaNegra, setListaNegra] = useState<string>("");
  const [modal, setModal] = useState(true);
  const [selecionado, setSelecionado] = useState(false);

  function modalUp() {
    setModal(!modal);
    busca();
  }

  function busca() {
    setCategoria(getDadosCategoria());
    setListaNegra(getDadosListaNegra());
  }

  function selecionar() {
    const Categoria = getDadosCategoria();
    setSelecionado(true);
    console.log(Categoria, selecionado);
  }

  const { result } = useAxios<PiadasProps>(categoria, listaNegra);

  return (
    <PiadasContext.Provider
      value={{
        selecionar,
        busca,
        modalUp,
        modal,
        result,
        selecionado,
      }}
    >
      {children}
    </PiadasContext.Provider>
  );
}
