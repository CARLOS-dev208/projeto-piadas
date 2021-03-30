import { FormControl } from "@material-ui/core";
import { Checkbox } from "../Checkbox/checkbox";
import { useStyles } from "./styles";

export function FormFiltros() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <FormControl className={styles.forms}>
        <h3 className={styles.h1}>Filtros de Piadas</h3>
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
      </FormControl>
    </div>
  );
}
