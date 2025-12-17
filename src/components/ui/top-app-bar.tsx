import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const topAppBarVariants = cva(
    "w-full transition-all duration-300 ease-in-out",
    {
        variants: {
            variant: {
                center: "bg-surface text-on-surface",
                small: "bg-surface text-on-surface",
                medium: "bg-surface text-on-surface",
                large: "bg-surface text-on-surface",
            },
            elevation: {
                0: "shadow-md3-2-none",
                1: "shadow-md3-2-md3-1",
                2: "shadow-md3-2-md3-2",
            },
        },
        defaultVariants: {
            variant: "small",
            elevation: 0,
        },
    }
)

export interface TopAppBarProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof topAppBarVariants> {
    scrollBehavior?: "pinned" | "hide" | "shrink"
    title?: string
    navigationIcon?: React.ReactNode
    actionIcons?: React.ReactNode
}

const TopAppBar = React.forwardRef<HTMLElement, TopAppBarProps>(
    ({ className, variant, elevation, title, navigationIcon, actionIcons, children, ...props }, ref) => {
        return (
            <header
                ref={ref}
                className={cn(topAppBarVariants({ variant, elevation }), className)}
                {...props}
            >
                <div className={cn(
                    "flex items-center justify-between px-4",
                    variant === "medium" ? "h-28 flex-col items-start justify-end pb-4" :
                        variant === "large" ? "h-36 flex-col items-start justify-end pb-6" :
                            "h-16"
                )}>
                    {/* Navigation & Actions Row for Medium/Large */}
                    {(variant === "medium" || variant === "large") && (
                        <div className="flex w-full items-center justify-between mb-auto pt-4">
                            <div className="flex items-center gap-4">
                                {navigationIcon}
                            </div>
                            <div className="flex items-center gap-4">
                                {actionIcons}
                            </div>
                        </div>
                    )}

                    {/* Main Row for Small / Center */}
                    {(variant === "small" || variant === "center") && (
                        <>
                            <div className="flex items-center gap-4">
                                {navigationIcon}
                                <h1 className={cn(
                                    "font-medium",
                                    variant === "center" ? "absolute left-1/2 -translate-x-1/2 text-title-large" : "text-title-large"
                                )}>
                                    {title}
                                </h1>
                            </div>
                            <div className="flex items-center gap-4">
                                {actionIcons}
                            </div>
                        </>
                    )}

                    {/* Title Row for Medium/Large */}
                    {(variant === "medium" || variant === "large") && (
                        <h1 className={cn(
                            "px-4",
                            variant === "medium" ? "text-headline-small" : "text-headline-medium"
                        )}>
                            {title}
                        </h1>
                    )}

                    {children}
                </div>
            </header>
        )
    }
)
TopAppBar.displayName = "TopAppBar"

export { TopAppBar, topAppBarVariants }
