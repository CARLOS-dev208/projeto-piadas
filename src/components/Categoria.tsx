import { Checkbox } from "./Checkbox/checkbox";
import { useStyles } from "./Forms/styles";

export function Categoria() {
  const styles = useStyles();

  return (
    <fieldset className={styles.fieldset}>
      <legend>Categoria</legend>
      <div className={styles.filtroColumn}>
        <Checkbox id={1} value={"Any"} label={"Any"} />
        <Checkbox id={2} value={"Programming"} label={"Programming"} />
        <Checkbox id={3} value={"Miscellaneous"} label={"Miscellaneous"} />
        <Checkbox id={4} value={"Dark"} label={"Dark"} />
      </div>
      <div className={styles.filtroColumn}>
        <Checkbox id={5} value={"Pun"} label={"Pun"} />
        <Checkbox id={6} value={"Spooky"} label={"Spooky"} />
        <Checkbox id={7} value={"Christmas"} label={"Christmas"} />
      </div>
    </fieldset>
  );
}
