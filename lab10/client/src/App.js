import "./App.css";
import AgeSearch from "./components/AgeSearch/index";
import NameSearch from "./components/NameSearch/index";
import ReportingArea from "./components/ReportingArea/index";

function App() {
  return (
    <div className="App">
      <NameSearch />
      <AgeSearch />
      <ReportingArea />
    </div>
  );
}

export default App;
