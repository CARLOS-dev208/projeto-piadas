import { useContext } from "react";
import { PiadasContext } from "../../contexts/PiadasContext";
import { useStyles } from "../Forms/styles";

interface CheckboxProps {
  label: string;
  value: string;
  id: number;
}

export function Checkbox(props: CheckboxProps) {
  const { label, value, id } = props;
  const { selecionar } = useContext(PiadasContext);

  const styles = useStyles();
  return (
    <label className={styles.lebal}>
      <input
        onChange={selecionar}
        name={value}
        type="checkbox"
        value={value}
        id={`${id}`}
      />
      {label}
    </label>
  );
}
