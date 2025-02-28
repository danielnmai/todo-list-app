"use client";
import { queryClient } from "@/app/page";
import TaskForm, { formSchema } from "@/components/TaskForm";
import { Task } from "@/components/TaskList";
import APIService from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

const CreateTaskPage = () => {
  const API = new APIService();
  const router = useRouter();

  const createTask = useMutation({
    mutationFn: (task: Omit<Task, "id">) => API.createTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: () => toast.error("Unable to create task. Please try again"),
  });

  const handleOnSubmit = ({ title, color }: z.infer<typeof formSchema>) => {
    createTask.mutate({ title, color, completed: false });
    router.push("/tasks");
  };

  return <TaskForm mode="create" onSubmit={handleOnSubmit} />;
};

export default CreateTaskPage;
