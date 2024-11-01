import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [tasks, setTasks] = useState([]);

  console.log("Tasks :-", tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="bg-slate-200 w-screen h-screen flex flex-col items-center p-3 pt-32 gap-16">
        <h1 className="bg bg-red-400 w-64 h-12 flex justify-center items-center rounded-md text-4xl text-red-800">
          Todo DnD
        </h1>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
