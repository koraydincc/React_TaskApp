import { createContext } from "react";
import "./App.css";
import CreateTask from "./CreateTask";
import Header from "./Header";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CreateTask></CreateTask>
    </div>
  );
}

export default App;
