import { ThemeProvider } from "@emotion/react";
import "./App.css";
import HomePage from "./HomePage/Index";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
