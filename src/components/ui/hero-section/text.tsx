import DescriptionHover from "@/components/ui/hero-section/description-hover";

const HeroText = () => {
    return (
        <div className="flex flex-col gap-2 w-full items-center justify-center">
            <p className="text-lg">Hey there, I&rsquo;m Matt <span className="text-black dark:text-white">👋🏼</span></p>
            <h1 className="text-5xl relative text-center leading-normal">
                <DescriptionHover tooltipContent={`📊  Taking data-driven decisions has always been important to me and I started learning it from day 1 on the job.\n\n🧐  Nowadays, not only can I fluently query tools such as Amplitude and Adobe Analytics, but I can also set up A/B tests to validate features and take conclusions from it.`} buttonContent="Data driven" />
                design engineer merging user-centric insights and
                <DescriptionHover tooltipContent={`⌨️  I am fully proficient in coding my designs, and can also seamlessly collaborate with engineers to do so.\n\n🏎️  That makes our team faster through a decrease in the design/engineering knowledge gap, and over time, that increase in speed leads to better product outcomes.`} buttonContent="modern frontend expertise" />
                to create intuitive UIs that achieve key product outcomes
            </h1>
        </div>
    )
}

export default HeroText;
