import "./App.css";
import Home from "./components/Home";
import SingleMember from "./components/SingleMember";
import { MembersListProvider } from "./context/MembersListContext";
import { TeamProvider } from "./context/TeamContext";

function App() {
  return (
    <div className="App">
      <TeamProvider>
        <MembersListProvider>
          <Home />
          <SingleMember />
        </MembersListProvider>
      </TeamProvider>
    </div>
  );
}

export default App;
