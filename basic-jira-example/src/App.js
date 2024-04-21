import "./App.css";
import CustomButton from "./components/button/CustomButton";
import CustomTask from "./components/form/Task";
import CustomTitle from "./components/form/Title";
import CustomLabel from "./components/label/Label";
import Tasks from "./components/tasks/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleClick = () => {
    setTasks([...tasks, { taskName, taskDescription }]);
    setTaskName("");
    setTaskDescription("");
  };

  const setName = (name) => {
    setTaskName(name);
    console.log("Name: ", name);
  };

  const setDesc = (name) => {
    setTaskDescription(name);
  };

  return (
    <div className="App">
      <div>
        <CustomLabel />
        <CustomTitle setName={setName} />
        <CustomTask setDescription={setDesc} />
        <CustomButton onClicked={handleClick} />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
