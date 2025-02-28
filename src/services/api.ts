import { Task } from "@/components/TaskList";
import axios, { AxiosInstance } from "axios";

class APIService {
  BASE_URL = "http://localhost:8080/v1";
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async fetchTasks(): Promise<Task[]> {
    const res = await this.axiosInstance.get("/tasks");
    return res.data;
  }

  async createTask(task: Omit<Task, "id">): Promise<Task> {
    const res = await this.axiosInstance.post("/tasks", task);
    return res.data;
  }

  async updateTask(task: Task): Promise<Task> {
    const res = await this.axiosInstance.put(`/tasks/${task.id}`, task);
    return res.data;
  }

  async deleteTask(taskId: string) {
    const res = await this.axiosInstance.delete(`/tasks/${taskId}`);
    return res.data;
  }
}

export default APIService;
