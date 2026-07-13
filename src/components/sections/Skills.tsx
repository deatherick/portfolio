"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const SKILLS = {
    languages: ["C#", "JavaScript", "TypeScript", "Java", "Python", "PHP", "VB.NET", "C++"],
    frameworks: [".NET / ASP.NET", "Node.js", "React", "React Native", "Spring Boot", "Django", "Laravel", "Entity Framework", "Hibernate"],
    cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Azure DevOps", "CI/CD Pipelines", "Proxmox", "Linux"],
    databases: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "MongoDB", "SQLite", "Db2"],
    tools: ["Git", "RabbitMQ", "JWT", "XUnit", "REST APIs", "SCRUM / Agile", "Jira", "Postman"],
};

const LANG_COLORS: Record<string, string> = {
    "C#": "bg-violet-500/20 text-violet-300 border-violet-500/30",
    "JavaScript": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "TypeScript": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Java": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Python": "bg-green-500/20 text-green-300 border-green-500/30",
};

function SkillTag({ name }: { name: string }) {
    const cls = LANG_COLORS[name] ?? "bg-slate-800 text-slate-300 border-slate-700";
    return (
        <span className={`px-3 py-1 rounded-full border text-xs font-medium ${cls}`}>{name}</span>
    );
}

export default function Skills() {
    const t = useTranslations("skills");
    const cats = t.raw("categories") as Record<string, string>;

    return (
        <section id="skills" className="py-24 px-4 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                        <span className="text-cyan-400">/</span> {t("title")}
                    </h2>
                    <p className="text-slate-400 text-sm">{t("subtitle")}</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(Object.entries(SKILLS) as [keyof typeof SKILLS, string[]][]).map(([key, items], i) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
                        >
                            <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">{cats[key]}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => <SkillTag key={skill} name={skill} />)}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
