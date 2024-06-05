"use client";

import { Icon } from "@/components/primitives/icon";
import { toast } from "sonner";

/**
 * Isolating this component due to not being able to add event listeners in server components
 */ function CopyButton({ label, value }: { label: string; value: string }) {
  const handleCopy = () => {
    toast.promise(navigator.clipboard.writeText(value), {
      success: `${label} copied to clipboard`,
      error: "Something went wrong, please try again",
    });
  };

  return (
    <Icon
      icon="copy"
      className="ml-3 inline cursor-pointer"
      onClick={handleCopy}
      data-testid="copy-button"
    />
  );
}

export { CopyButton };
