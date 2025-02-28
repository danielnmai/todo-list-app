"use client";

import { queryClient } from "@/app/page";
import APIService from "@/services/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import TaskCard from "./TaskCard";
import { TaskColor } from "./TaskForm";
import { Badge } from "./ui/badge";

export type Task = {
  id: string;
  title: string;
  color: TaskColor;
  completed: boolean;
};

const TaskList = () => {
  const API = new APIService();

  const { data: tasks, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => API.fetchTasks(),
  });

  const updateTask = useMutation({
    mutationFn: (task: Task) => API.updateTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: () => toast.error("Unable to update task. Please try again"),
  });

  const deleteTask = useMutation({
    mutationFn: (taskId: string) => API.deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: () => toast.error("Unable to delete task. Please try again"),
  });

  const handleTaskComplete = (completedTask: Task) => {
    updateTask.mutate(completedTask);
  };

  const handleDelete = (id: string) => {
    deleteTask.mutate(id);
  };

  if (isError) {
    toast.error("Error loading tasks. Please try again.");
  }

  if (!tasks) {
    return;
  }

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
