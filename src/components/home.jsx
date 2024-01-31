import { Link } from "react-router-dom";
import "../assets/home.css";
function Home() {
  return (
    <div className="App">
      <ul className="App-header">
        <li>
          <Link to="/task-one" target="_blank">Task 1</Link>
        </li>
        <li>
          <Link to="/task-two" target="_blank">Task 2</Link>
        </li>
        <li>
          <Link to="/task-three" target="_blank">Task 3</Link>
        </li>
      </ul>
    </div>
  );
}
export default Home;
