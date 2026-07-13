"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { GitHubRepo } from "@/lib/types";

const LANG_COLOR: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    "C#": "bg-violet-500",
    Java: "bg-orange-500",
    Python: "bg-green-500",
    PHP: "bg-indigo-500",
    "C++": "bg-pink-500",
    HTML: "bg-red-500",
};

function RepoCard({ repo }: { repo: GitHubRepo }) {
    const t = useTranslations("projects");
    const dot = repo.language ? (LANG_COLOR[repo.language] ?? "bg-slate-500") : null;
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-3 hover:border-slate-600 transition-colors group">
            <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-white text-sm group-hover:text-cyan-400 transition-colors break-all">
                    {repo.name}
                </h3>
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-slate-500 hover:text-cyan-400 transition-colors"
                    aria-label="View on GitHub"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.8.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
            </div>
            <p className="text-xs text-slate-400 flex-1 line-clamp-2">
                {repo.description ?? t("no_description")}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500">
                {dot && (
                    <span className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${dot}`} />
                        {repo.language}
                    </span>
                )}
                {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-0.5">★ {repo.stargazers_count}</span>
                )}
                {repo.forks_count > 0 && (
                    <span className="flex items-center gap-0.5">⑂ {repo.forks_count}</span>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    const t = useTranslations("projects");
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/api/github/repos")
            .then((r) => r.json())
            .then((data) => { setRepos(data); setLoading(false); })
            .catch(() => { setError(true); setLoading(false); });
    }, []);

    return (
        <section id="projects" className="py-24 px-4 bg-slate-900/50">
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

                {loading && (
                    <p className="text-center text-slate-500 text-sm">{t("loading")}</p>
                )}

                {error && (
                    <p className="text-center text-slate-500 text-sm">
                        {t("error")}{" "}
                        <a href="https://github.com/deatherick" target="_blank" rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline">GitHub</a>
                    </p>
                )}

                {!loading && !error && (
                    <>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {repos.map((repo, i) => (
                                <motion.div
                                    key={repo.name}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                >
                                    <RepoCard repo={repo} />
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            <a
                                href="https://github.com/deatherick"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-400 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.8.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                {t("view_all")}
                            </a>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
