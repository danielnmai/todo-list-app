"use client";

import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import Link from "next/link";
import { useState } from "react";
import { Task } from "./TaskList";
import TrashIcon from "./TrashIcon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Checkbox } from "./ui/checkbox";

type TaskProps = Task & {
  onTaskComplete: (task: Task) => void;
  onDelete: (id: string) => void;
};

const TaskCard = ({
  id,
  completed,
  title,
  color,
  onTaskComplete,
  onDelete,
}: TaskProps) => {
  const completeStates = {
    completed:
      "font-normal text-[14px] text-secondary-foreground line-through p-2",
    uncompleted: "font-normal text-[14px] text-primary-foreground p-2",
  };
  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState(false);

  const handleOnDeleteTask = () => {
    onDelete(id);
    setOpenDeleteConfirmModal(false);
  };

  return (
    <div
      className="h-[72px] w-full flex justify-between items-start
      bg-card-background rounded-lg p-4 gap-3 my-4"
    >
      <Checkbox
        checked={completed}
        onClick={() =>
          onTaskComplete({ id, completed: !completed, title, color })
        }
        className="rounded-xl data-[state=checked]:bg-secondary data-[state=checked]:border-secondary border-2 w-5 h-5"
      />
      <Link
        href={{
          pathname: `/tasks/${id}`,
          query: {
            title,
            color,
            completed,
            id,
          },
        }}
      >
        <p
          className={
            completed ? completeStates.completed : completeStates.uncompleted
          }
        >
          {title}
        </p>
      </Link>
      <div
        onClick={() => setOpenDeleteConfirmModal(true)}
        className="cursor-pointer"
      >
        <TrashIcon />
      </div>

      <AlertDialog open={openDeleteConfirmModal}>
        <AlertDialogContent className="bg-accent-foreground border-card-background">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="text-muted my-3">
            This action cannot be undone. This will permanently delete your task
            and remove it from the server.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setOpenDeleteConfirmModal(false)}
              className="border-card-background"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleOnDeleteTask}
              className="bg-primary"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TaskCard;
