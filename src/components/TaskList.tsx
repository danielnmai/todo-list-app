"use client";

import { useState } from "react";
import TaskCard from "./TaskCard";
import { TaskColor } from "./TaskForm";
import { Badge } from "./ui/badge";

export type Task = {
  id: string;
  title: string;
  color: TaskColor;
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Do leetcode",
    color: TaskColor.Red,
    completed: false,
  },
  {
    id: "2",
    title: "Do web dev (2 hours)",
    color: TaskColor.Green,
    completed: false,
  },
  {
    id: "3",
    title: "Apply for jobs",
    color: TaskColor.Orange,
    completed: false,
  },
  {
    id: "4",
    title:
      "Read a book Read a book Read a book Read a book Read a book Read a book",
    color: TaskColor.Blue,
    completed: true,
  },
];

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleTaskComplete = (completedTask: Task) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === completedTask.id) {
          return completedTask;
        }
        return task;
      })
    );
  };

  const handleDelete = (id: string) => {
    console.log("Task deleted", id);
  };

  return (
    <div className="h-screen w-full mt-12">
      <div className="flex flex-col justify-start items-center h-full w-full">
        <div className="flex justify-between items-start w-full">
          <span className="text-primary font-black">
            Tasks{" "}
            <Badge className="rounded-full bg-card-background mx-2">
              {tasks.length}
            </Badge>
          </span>
          <span className="text-secondary font-black">
            Completed
            <Badge className="rounded-full bg-card-background mx-2">
              {tasks.filter((task) => task.completed).length} of {tasks.length}
            </Badge>
          </span>
        </div>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            onTaskComplete={handleTaskComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
