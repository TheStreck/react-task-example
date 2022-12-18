import { useContext } from "react";

import { TaskContext } from "../context/taskContext";

import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="row">
      {tasks.length > 0
        ? tasks.map((task) => <TaskCard key={task.id} task={task} />)
        : "I don't find tasks to show"}
    </div>
  );
}

export default TaskList;
