export default function OneREMWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4 w-full">
            {children}
        </div>
    );
}