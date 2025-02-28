import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "../page";

const TaskLayout = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <section>{children}</section>
  </QueryClientProvider>
);

export default TaskLayout;
