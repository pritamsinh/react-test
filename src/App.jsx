import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home";
import TaskOne from "./components/taskOne";
import TaskTwo from "./components/taskTwo";
import TaskThree from "./components/taskThree";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/task-one" element={<TaskOne />}></Route>
        <Route exact path="/task-two" element={<TaskTwo />}></Route>
        <Route exact path="/task-three" element={<TaskThree />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
