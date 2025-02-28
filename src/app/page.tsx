"use client";

import Home from "@/components/Home";

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const App = () => {
  return <Home />;
};

export default App;
