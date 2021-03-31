import { createContext, ReactNode, useState } from "react";
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
  busca: () => void;
  modalUp: () => void;
}
export const PiadasContext = createContext({} as PiadasContextData);

export function PiadasProvider({ children }: PiadasProviderProps) {
  const [checkeds, setCheckeds] = useState<string>("");
  const [modal, setModal] = useState(true);

  function modalUp() {
    setModal(false);
  }

  function busca() {
    const checked = [...document.querySelectorAll("input")]
      .filter((item) => item.checked)
      .map((res) => res.value)
      .toString();
    setCheckeds(checked);
  }
  const { result } = useAxios<PiadasProps>(checkeds);

  return (
    <PiadasContext.Provider value={{ busca, result, modalUp, modal }}>
      {children}
    </PiadasContext.Provider>
  );
}
