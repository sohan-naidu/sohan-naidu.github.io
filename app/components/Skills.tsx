import { Icons } from "./Icons"

export default function Skills()
{
    const icons: string[] = ["Python", "Go", "C++", "C#", "TypeScript", "Java", "AWS", "GCP", "Azure", "MySQL", "Postgres",
        "Snowflake", "Redis", "Grafana", "Prometheus", "gRPC", "Docker", "Kafka", "Git", "Jenkins", "GraphQL"]
    return(
        <section id="skills" className="py-20 px-8 sm:px-20 text-center">
            <h2 className="text-4xl font-bold pb-8">Skills</h2>
            <p className="pb-12">Here's every language, framework and tool I've worked with and am familiar with</p>
            <div className="grid grid-cols-7 gap-8 place-items-center">
                {icons.map(icon => (
                    <div key={icon} className="flex flex-col items-center justify-center gap-3">
                        <div className="w-16 h-16 flex items-center justify-center">
                            {Icons[icon]}
                        </div>
                        <p className="text-sm font-medium">{icon}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}