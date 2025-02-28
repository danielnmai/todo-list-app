import TaskList from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center bg-background">
      <div className="flex flex-col items-center justify-top h-full w-full md:w-[736px] mx-2">
        <Link href="/tasks/new" className="w-full mt-[-26px]">
          <Button className="h-[52px] w-full font-bold text-sm bg-button-background text-primary-foreground">
            Create Task <PlusCircleIcon />
          </Button>
        </Link>
        <TaskList />
      </div>
    </div>
  );
}
