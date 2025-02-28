"use client";
import TaskForm, { formSchema } from "@/components/TaskForm";
import { z } from "zod";

const CreateTaskPage = () => {
  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return <TaskForm mode="create" onSubmit={handleOnSubmit} />;
};

export default CreateTaskPage;
