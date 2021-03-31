import { Checkbox } from "./Checkbox/checkbox";
import { useStyles } from "./Forms/styles";

export function ListaNegra() {
  const styles = useStyles();

  return (
    <fieldset className={styles.fieldset}>
      <legend>Lista Negra</legend>
      <div className={styles.filtroColumn}>
        <Checkbox id={8} value={"nsfw"} label={"nsfw"} />
        <Checkbox id={9} value={"religious"} label={"religious"} />
        <Checkbox id={10} value={"political"} label={"political"} />
      </div>
      <div className={styles.filtroColumn}>
        <Checkbox id={11} value={"racist"} label={"racist"} />
        <Checkbox id={12} value={"sexist"} label={"sexist"} />
        <Checkbox id={13} value={"explicit"} label={"explicit"} />
      </div>
    </fieldset>
  );
}
