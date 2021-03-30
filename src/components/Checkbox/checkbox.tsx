import { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { useStyles } from "../Forms/styles";

interface CheckboxProps {
  label: string;
  value: string;
  id: number;
}
export interface PiadasProps {
  jokes: [{ id: number; setup: string; delivery: string; joke: string }];
}

export function Checkbox(props: CheckboxProps) {
  const { label, value, id } = props;
  const [checkeds, setCheckeds] = useState<string>("");
  const { result } = useAxios<PiadasProps>(checkeds);
  const styles = useStyles();

  function busca() {
    const checked = [...document.querySelectorAll("input")]
      .filter((item) => item.checked)
      .map((res) => res.value)
      .toString();
    setCheckeds(checked);
  }

  useEffect(() => {
    console.log(checkeds);
    console.log("res", result?.jokes);
  }, [checkeds, result?.jokes]);

  return (
    <label className={styles.lebal}>
      <input onChange={busca} type="checkbox" value={value} id={`${id}`} />
      {label}
    </label>
  );
}
