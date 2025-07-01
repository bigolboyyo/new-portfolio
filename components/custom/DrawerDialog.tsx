"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import { MdOutlineSettings } from "react-icons/md";

function RotatingIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <MdOutlineSettings
      className={cn(
        "text-3xl text-cyan-300 transition-transform duration-300",
        isOpen && "rotate-180"
      )}
    />
  );
}

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const content = (
    <div className="text-white text-sm leading-relaxed">
      <p>This is where you'd drop info or settings content.</p>
      <p className="mt-2">Minimal UI, clean presentation.</p>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button>
            <RotatingIcon isOpen={open} />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>System Panel</DialogTitle>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button>
          <RotatingIcon isOpen={open} />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>System Panel</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 py-2">{content}</div>
      </DrawerContent>
    </Drawer>
  );
}
