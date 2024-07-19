const ImpactHeading = () => {
    return <h3 className="text-2xl font-medium w-60">My Impact</h3>
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
    return <h2 className="text-xl font-normal w-60 text-gray-400 dark:text-gray-500">{children}</h2>
};

const Title = ({ children }: { children: React.ReactNode }) => {
    return <h2 className="text-4xl font-bold">{children}</h2>;
};

const Body = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <p className={`text-lg font-normal leading-loose ${className}`}>{children}</p>;
};

export { ImpactHeading, SectionHeading, Title, Body };