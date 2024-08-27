export default function SectionWrapper({ children, id }: { children: React.ReactNode, id: string }) {
    return (
        <div className="flex flex-row gap-8 p-20 w-full" id={id}>
            {children}
        </div>
    );
}