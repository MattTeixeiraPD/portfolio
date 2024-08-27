const ImpactHeading = () => {
    return <h3 className="text-2xl font-medium w-60">My Impact</h3>
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
    return <h2 className="text-xl font-normal w-48 text-gray-500 dark:text-gray-500">{children}</h2>
};

const Title = ({ children }: { children: React.ReactNode }) => {
    return <h2 className="text-4xl font-bold">{children}</h2>;
};

const Subtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <p className={`text-2xl font-bold leading-loose ${className}`}>{children}</p>;
};

const Body = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <p className={`text-[18px] font-normal leading-loose ${className}`}>{children}</p>;
};

export { ImpactHeading, SectionHeading, Title, Subtitle, Body };