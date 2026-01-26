'use client';

import { cn } from "@/lib/utils";

type StickyCtaProps = {
    children: React.ReactNode;
    className?: string;
}

export default function StickyCta({ children, className }: StickyCtaProps) {
    return (
        <div className={cn(
            "sticky bottom-0 z-40 w-full border-t border-border/50 bg-background/80 p-4 backdrop-blur-sm lg:hidden",
            className
            )}>
            {children}
        </div>
    );
}
