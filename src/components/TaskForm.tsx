"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Check, PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Task } from "./TaskList";

type TaskFormProps = {
  task?: Partial<Task>;
  mode: "create" | "update";
  onSubmit: (values: z.infer<typeof formSchema>) => void;
};

export enum TaskColor {
  Red = "Red",
  Orange = "Orange",
  Yellow = "Yellow",
  Green = "Green",
  Blue = "Blue",
  Indigo = "Indigo",
  Purple = "Purple",
  Pink = "Pink",
  Brown = "Brown",
}

export const formSchema = z.object({
  title: z.string(),
  color: z.enum([
    TaskColor.Red,
    TaskColor.Orange,
    TaskColor.Yellow,
    TaskColor.Green,
    TaskColor.Blue,
    TaskColor.Indigo,
    TaskColor.Purple,
    TaskColor.Pink,
    TaskColor.Brown,
  ]),
});

const TaskForm = ({ task, mode, onSubmit }: TaskFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: task && task.title ? task.title : "",
      color: task && task.color ? task.color : TaskColor.Red,
    },
  });

  const renderColorRadioGroupItem = (color: TaskColor) => {
    const colorName = `bg-${color.toLowerCase()} border-${color.toLowerCase()}`;

    return (
      <FormItem key={color}>
        <FormControl>
          <RadioGroupItem
            value={color}
            className={`w-[52px] h-[52px] ${colorName}`}
          />
        </FormControl>
      </FormItem>
    );
  };

  return (
    <div className="flex flex-col items-center justify-start px-2 h-screen">
      <Link
        href="/"
        className="flex  w-full justify-start items-center md:w-[736px] my-10"
      >
        <ArrowLeft />
      </Link>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center md:w-[736px] w-full"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full my-4">
                <FormLabel className="font-bold text-sm text-primary">
                  Title
                </FormLabel>
                <FormControl className="h-[52px] bg-input-background border-border-input">
                  <Input required {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem className="w-full my-8">
                <FormLabel className="font-bold text-sm text-primary">
                  Color
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row flex-wrap justify-start h-[60px] space-x-2 mb-10"
                  >
                    {Object.values(TaskColor).map(renderColorRadioGroupItem)}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="h-[52px] w-full font-bold text-sm bg-button-background text-primary-foreground mt-12 sm:mt-2"
          >
            {mode === "create" ? "Create" : "Save"}
            {mode === "create" ? <PlusCircleIcon /> : <Check />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TaskForm;
