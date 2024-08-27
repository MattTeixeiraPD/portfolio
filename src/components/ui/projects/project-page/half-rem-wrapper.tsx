export default function HalfREMWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            {children}
        </div>
    );
}