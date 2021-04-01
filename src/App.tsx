import { CircularProgress, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useContext } from "react";
import { FormFiltros } from "./components/Forms/forms";
import { PiadasContext } from "./contexts/PiadasContext";
import { Piadas } from "./pages/piadas/Piadas";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#f1f2f4",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  const { modal } = useContext(PiadasContext);

  return (
    <ThemeProvider theme={theme}>
      <Piadas />
      {modal && <FormFiltros />}
    </ThemeProvider>
  );
}

export default App;
