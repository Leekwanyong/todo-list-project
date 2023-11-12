import "./App.css";
import AppList from "./AppList";

import { DarkModeProvider } from "./darkmode/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <AppList />
    </DarkModeProvider>
  );
}

export default App;
