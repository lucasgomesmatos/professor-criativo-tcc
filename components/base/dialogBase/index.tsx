import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface DialogBaseProps {
  isOpen: boolean;
  setOpenDialogBase: () => void;
  title: string;
  children: ReactNode;
}

export const DialogBase = ({
  isOpen,
  setOpenDialogBase,
  title,
  children,
}: DialogBaseProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setOpenDialogBase}>
      <DialogContent className=" bg-gray-800">
        <DialogHeader>
          <DialogTitle className="mt-6 leading-5">{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
