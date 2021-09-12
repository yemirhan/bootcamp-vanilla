import { BrowserRouter as Router } from "react-router-dom";
import { Notes } from "./containers/Notes/Notes";
import { NotesProvider } from "./contexts/NotesProvider";

const App = () => {
  return (
    <Router>
      <NotesProvider>
        <Notes />
      </NotesProvider>
    </Router>
  );
}

export default App;
