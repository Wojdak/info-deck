// src/components/CardWithGridEllipsis.tsx
import React from "react";
import { cn } from "@/utils/cn.ts";

// Card Body Component (Reusable)
export const CardBody = ({ title, description, className = "" }: { title: string; description: string; className?: string }) => (
  <div className={cn("text-start p-4 md:p-6", className)}>
    <h3 className="text-lg font-bold mb-1 text-zinc-200">{title}</h3>
    <p className="text-wrap text-zinc-500 text-sm">{description}</p>
  </div>
);

// Card with Grid Ellipsis (Reusable)
export const CardWithGridEllipsis = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("border w-full rounded-md overflow-hidden dark:border-zinc-900 dark:bg-zinc-950 p-1", className)}>
    <div className="w-full h-full bg-repeat bg-[url('../assets/grid-ellipsis.svg')] bg-[length:25px_25px]">
      <div className="w-full h-full bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950 p-4 rounded-md">
        {children}
      </div>
    </div>
  </div>
);
