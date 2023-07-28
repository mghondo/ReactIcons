import logo from "./logo.svg";
import "./App.css";
import { FaReact } from "react-icons/fa";
import { MdAlarmAdd } from "react-icons/md";
import { IconContext } from "react-icons/lib";

function App() {
  return (
    <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
      <div className="App">
        <FaReact />
        <MdAlarmAdd />
      </div>
    </IconContext.Provider>
  );
}

export default App;
