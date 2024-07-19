"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navbar/navigation-menu-primitives"
import { ModeToggle } from "@/components/theme/switcher"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Digital Vault",
        href: "/project/vault",
        description: "30% WAU/MAU achieved in 4 weeks and exceeded acquisition OKR by 100%",
    },
    {
        title: "Partnerships Dashboard",
        href: "/project/partnerships",
        description: "Increased B2B customer acquisition by 12%",
    },
    {
        title: "The Australian",
        href: "/project/the-australian",
        description: "17% increase in challenger group users page views",
    }
]

export function NavigationMenuDemo() {
    return (
        <div className="flex items-center justify-center w-full py-2 z-50" id="navbar">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" className="text-md hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md py-2 px-4">
                            Home
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                        className="text-md"
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" className="text-md hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md py-2 px-4">
                            About Me
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {/* Fixed positioning for Mode Toggle */}
            <div className="absolute right-0 top-0 my-2 mx-1">
                <ModeToggle />
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-md hover:bg-zinc-200 dark:hover:bg-zinc-800",
                        className
                    )}
                    {...props}
                >
                    <div className="text-md font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"