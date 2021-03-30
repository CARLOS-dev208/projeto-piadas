import { makeStyles } from "@material-ui/core";
import { useAxios } from "../../hooks/useAxios";

export interface PiadasProps {
  jokes: [{ id: number; setup: string; delivery: string }];
}

export function Piadas() {
  const { result } = useAxios<PiadasProps>(
    "Programming,Misc?type=twopart&amount=327"
  );

  const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.primary.main,
      height: "100vh",
      overflow: "hidden",
    },
  }));

  const styles = useStyles();
  return (
    <div className={styles.root}>
      <ul>
        {result?.jokes.map((p) => (
          <li key={p.id} id={`${p.id}`}>
            {p.setup} {p.delivery} <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
