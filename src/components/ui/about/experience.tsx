import { MoveUpRight, Info, Dot } from 'lucide-react';
import Link from 'next/link';

const experience = [
    {
        title: "User Experience Designer",
        company: "News Corp",
        date: "Aug/2023 - Present",
        link: "https://www.linkedin.com/company/news-corp-australia",
        achievements: [
            "Increased 13% average user page views at The Australian native app through designing feature that leverages a third-party's algorithm to validate content personalisation and get buy in on personalisation-related program",
            "Collaborated with engineers, other designers, PMs and business stakeholders to implement Sky News' online streaming offering, resulting in 0 to 10,000 subscriptions within 30 days",
            "Part in the data visualisation comitte: a comitte with stakeholders from several groups whose's goal is to improve how people interact with data within the Company."
        ]
    }, 
    {
        title: "Product Designer",
        company: "Safewill",
        date: "June/2022 - Aug/2023",
        link: "https://safewill.com/",
        achievements: [
            "Key part in improving processes of Safewill's business transformation from solely offering online Wills and other legal services to an End-of-Life Platform that aims to solve any problem related to handing over one's Estate.",
            "Collaborating with cross-functional teams to build an MVP of Digital Vault product, which exceeded 170% of OKR and achieved strong early engagement metrics."
        ]
    },
    {
        title: "UX/UI Designer",
        company: "Ambient Food Group",
        date: "May/2021 - June/2022",
        link: "https://www.ambientfoodgroup.com.au/",
        achievements: [
            "Led the design of a responsive web-based corporate catering eCommerce platform, aligning business goals with user insights to create a product that solves user’s problems and fits company vision."
        ]
    }
]

const ExperienceCard = ({ title, company, date, link, achievements }: { title: string, company: string, date: string, link: string, achievements: string[] }) => {
    return (
        <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className='flex flex-row items-center gap-2 justify-center'>
                <h3 className="text-2xl font-medium">{title}</h3>
                <Info className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
            </div>
            <Link href={link} className='flex flex-row items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-600 dark:hover:text-zinc-200'><MoveUpRight className="w-4 h-4" />{company}</Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            {achievements.map((item, index) => (
                <div className='flex flex-row items-center gap-2'>
                    <Dot className="w-8 h-8 text-zinc-600 dark:text-zinc-300" />
                    <p className="text-base text-gray-500 dark:text-gray-300">{item}</p>
                </div>
            ))}
        </div>
    )
}
export default function ExperienceWrapper() {
    return (
        <div className="flex flex-row gap-8 p-10 w-full justify-start items-start" id="experience">
            <h1 className="text-4xl font-medium w-1/3">My Experience</h1>
            <div className="flex flex-col gap-12 items-start w-full">
                {experience.map((item, index) => (
                    <ExperienceCard key={index} title={item.title}  company={item.company} date={item.date} link={item.link} achievements={item.achievements} />
                ))}
            </div>
        </div>
    );
}