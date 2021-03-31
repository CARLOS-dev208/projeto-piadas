import { FormControl } from "@material-ui/core";
import { useContext } from "react";
import { PiadasContext } from "../../contexts/PiadasContext";
import { Categoria } from "../Categoria";
import { ListaNegra } from "../ListaNegra";
import { useStyles } from "./styles";

export function FormFiltros() {
  const { modalUp, result } = useContext(PiadasContext);
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <FormControl className={styles.forms}>
        <h3 className={styles.h1}>Filtros de Piadas</h3>
        <Categoria />
        <ListaNegra />
        {result?.jokes ? (
          <button className={styles.button} onClick={modalUp}>
            Pronto
          </button>
        ) : (
          <button disabled className={`${styles.button} ${styles.disabled}`}>
            Escolha uma categoria
          </button>
        )}
      </FormControl>
    </div>
  );
}
