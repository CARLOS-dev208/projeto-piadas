import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { FormFiltros } from "./components/Forms/forms";
import { Piadas } from "./pages/piadas/Piadas";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3f51b5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <Piadas /> */}
      <FormFiltros />
    </ThemeProvider>
  );
}

export default App;
