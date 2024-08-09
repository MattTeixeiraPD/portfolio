import { Metadata } from "next";
import { NavigationProvider } from "@/context/NavigationContext";
export const metadata: Metadata = {
    title: "CapitalClimb | Projects | Matt Teixeira"
}

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <NavigationProvider>
            {children}
        </NavigationProvider>
    );
}