import { useState } from "react";
import CreateTask from "./components/CreateTask";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className="text-orange-500">
        <CreateTask tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
