import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(242, 243, 245, 0.5)",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  forms: {
    background: "#fff",
    boxShadow: "0 0 60px rgba(0, 0, 0, 0.08)",
    height: "80vh",
    width: "50vw",
    borderRadius: "4px",
    padding: "10px",
    fontFamily: "Inter",
    display: "flex",
    alignItems: "center",
  },
  h1: {
    borderBottom: "1px solid #CCC",
    width: "100%",
    textAlign: "center",
    padding: "10px",
  },
  fieldset: {
    width: "100%",
    padding: "10px",
    fontSize: "1.6rem",
    display: "flex",
    gap: "1rem",
    maxWidth: "100%",
  },
  lebal: {
    fontSize: "1.1rem",
  },
  filtroColumn: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
  },
}));
