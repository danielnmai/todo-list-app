"use client";

import { queryClient } from "@/app/page";
import TaskForm, { formSchema, TaskColor } from "@/components/TaskForm";
import { Task } from "@/components/TaskList";
import APIService from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

const UpdateTaskPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const color = searchParams.get("color") as TaskColor;
  const id = searchParams.get("id");
  const completed = searchParams.get("completed");

  const API = new APIService();
  const router = useRouter();

  const updateTask = useMutation({
    mutationFn: (task: Task) => API.updateTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: () => toast.error("Unable to update task. Please try again"),
  });

  if (!id || !completed || !title || !color) {
    return;
  }

  const handleOnSubmit = ({ title, color }: z.infer<typeof formSchema>) => {
    updateTask.mutate({
      title,
      color,
      id,
      completed: completed.toLowerCase() === "true",
    });

    router.push("/tasks");
  };

  return (
    <TaskForm mode="update" task={{ title, color }} onSubmit={handleOnSubmit} />
  );
};

export default UpdateTaskPage;
