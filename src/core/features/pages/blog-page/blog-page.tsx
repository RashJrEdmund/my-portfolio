"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import { toast } from "sonner";

export default function BlogPage() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const addToWaitListAction = (formData: FormData) => {;
    setDialogOpen(false);

    toast.promise(new Promise((res) => setTimeout(() => res("🙂 This feature is also not yet available"), 1000)) as Promise<string>, {
      loading: "Processing...",
      success: (res) => res,
      error: "failed"
    });
  };

  return (
    <main className="mx-auto w-full flex flex-col gap-4 items-center justify-center max-w-app-dynamic-max-w">
      <h1 className="mt-16">Welcome to my blog</h1>

      <p>Coming soon...</p>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Text>
            Add me to wait list
          </Text>
        </DialogTrigger>

        <DialogContent className="max-w-[min(90vw,_400px)] py-12 rounded-lg">
          <form action={addToWaitListAction} className="flex flex-col gap-2 text-app-dark-600 ">
            <label htmlFor="email" className="font-light">Add your email to wait list</label>
            <input
              placeholder="Enter email"
              className="w-full p-2 rounded-sm outline-0 border border-app-dark-500"
            />
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
