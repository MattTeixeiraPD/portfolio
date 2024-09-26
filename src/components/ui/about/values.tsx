import { values } from "@/lib/values";

const Values = ({ value, description }: { value: string, description: string }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <h2 className="text-2xl font-bold">{value}</h2>
            <p className="text-lg text-black dark:text-white">{description}</p>
        </div>
    )
}

const ValueWrapper = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <h2 className="text-4xl font-bold">Values I live and work by</h2>
            <div className="flex flex-col gap-4 w-full">
                {values.map((value) => (
                    <Values key={value.value} value={value.value} description={value.description} />
                ))}
            </div>
        </div>
    )
}

export default ValueWrapper;