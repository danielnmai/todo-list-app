"use client";
import TaskForm, { formSchema, TaskColor } from "@/components/TaskForm";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

const UpdateTaskPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const color = searchParams.get("color") as TaskColor;

  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <TaskForm mode="update" task={{ title, color }} onSubmit={handleOnSubmit} />
  );
};

export default UpdateTaskPage;
