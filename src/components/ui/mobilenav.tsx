import { ReactNode } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface MobileNavProps {
  children: ReactNode;
}

const MobileNav = ({ children }: MobileNavProps) => {
  return (
    <div className="overflow-hidden rounded-full">
      <ScrollArea className="whitespace-nowrap">
        {children}
        <ScrollBar orientation="horizontal" className="h-2" />
      </ScrollArea>
    </div>
  );
};

export { MobileNav };