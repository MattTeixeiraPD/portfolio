import Photo from "@/components/ui/about/photo";
import { Body, ImpactHeading } from "@/components/typography/typography";
import { Gap1REM } from "@/components/ui/spacing";
import AchievementSquareWrapper from "@/components/ui/achievement-square";
import ExperienceWrapper from "@/components/ui/about/experience";
import ValueWrapper from "@/components/ui/about/values";
import Divider from "@/components/ui/projects/project-page/divider";
export default async function About() {
    return (
        <section className="w-full max-w-[80vw] min-h-screen flex flex-col items-center justify-center mx-auto gap-16 py-24">
            <div className="flex flex-col md:flex-row items-start justify-start gap-8">
                <Photo />
                <div className="flex flex-col items-start justify-start gap-2 h-full">
                    <h1 className="text-4xl font-medium">Hello! It&rsquo;s great having you here 👋 I&rsquo;m Matt.</h1>
                    <Gap1REM />
                    <h2 className="text-2xl font-medium">💻  I'm passionate about all things product development.</h2>
                    <Gap1REM />
                    <Body>I&rsquo;m a Product Designer with incredible passion for understanding how humans work and what makes them tick. That, added to my curiosity, has gotten me to not only learn lots about design, but also have a very wide technical knowledge in both frontend and backend languages, as well as a bit of architecture know-how.</Body>
                    <Gap1REM />
                    <Body>People who know me would probably say I'm a very intense and curious person, as well as one who holds himself at very high standards.</Body>
                </div>
            </div>
            <Divider />
            <ValueWrapper />
        </section>
    );
}