"use client";

import { Icon } from "@/components/primitives/icon";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { toast } from "sonner";

function BannerCTA() {
  const handleClick = () => {
    toast("If Link to email doesn't automatically open", {
      description: "click here to copy email",
      action: {
        label: "Copy email",
        onClick: () => {
          toast.promise(navigator.clipboard.writeText("orashusedmun@gmail.com"), {
            loading: "copying to clipboard...",
            success: "Email copied",
            error: "Something went wrong, please try again"
          });
        }
      }
    });
  };

  return (
    <div className="w-fit flex items-center justify-center flex-nowrap gap-4">
      <Text
        as="a"
        href="mailto:orashusedmund@gmail.com?subject=Job%offer%for%a%dev%role&body=Hi%20Rash"
        animationStyles="left-[unset] right-0"
        onClick={handleClick}
      >
        Email Me
      </Text>

      <Text
        as={Link as unknown as keyof JSX.IntrinsicElements}
        href="/rash.resume.pdf"
        target="_blank"
        className="outline-0"
      >
        <Icon icon="arrowDown" size={20} className="inline" /> Download Resume
      </Text>
    </div>
  );
};

export {
  BannerCTA,
};
