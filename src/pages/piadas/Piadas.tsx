import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { PiadasContext } from "../../contexts/PiadasContext";

export function Piadas() {
  const { result } = useContext(PiadasContext);
  const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.primary.main,
      display: "grid",
      placeItems: "center",
      height: "100vh",
      width: "100vw",
    },
    content: {
      width: "40rem",
    },
  }));

  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <ul>
          {result?.jokes &&
            result.jokes.map((p) => (
              <li key={p.id} id={`${p.id}`}>
                {p.setup} {p.delivery} {p.joke}
                <hr />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
