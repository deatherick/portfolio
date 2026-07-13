"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface Client {
  company: string;
  period: string;
  description: string;
  tech: string[];
}

interface Job {
  company: string;
  companyNote?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
  clients?: Client[];
    const jobs = t.raw("jobs") as Job[];

    return (
        <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
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

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-[7px]" />

                <div className="space-y-10">
                    {jobs.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                            className="pl-8 relative"
                        >
                            {/* Dot */}
                            <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-cyan-400 bg-slate-950" />

                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                    <h3 className="text-base font-semibold text-white">{job.role}</h3>
                                    <span className="text-xs text-slate-500 whitespace-nowrap">{job.period}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-sm text-cyan-400 font-medium">{job.company}</span>
                                    {job.companyNote && (
                                        <span className="text-xs text-slate-600 italic">({job.companyNote})</span>
                                    )}
                                    <span className="text-slate-600 text-xs">·</span>
                                    <span className="text-xs text-slate-500">{job.location}</span>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed mb-4">{job.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {job.tech.map((t) => (
                                        <span key={t} className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-xs">{t}</span>
                                    ))}
                                </div>

                                {/* Nested client engagements */}
                                {job.clients && job.clients.length > 0 && (
                                    <div className="mt-5 border-t border-slate-800 pt-4 space-y-4">
                                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Client Engagements</p>
                                        {job.clients.map((client) => (
                                            <div key={client.company} className="pl-3 border-l-2 border-cyan-400/30">
                                                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                                                    <span className="text-sm font-semibold text-cyan-300">{client.company}</span>
                                                    <span className="text-xs text-slate-500">{client.period}</span>
                                                </div>
                                                <p className="text-xs text-slate-400 leading-relaxed mb-2">{client.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {client.tech.map((t) => (
                                                        <span key={t} className="px-2 py-0.5 bg-cyan-400/5 border border-cyan-400/20 text-cyan-400/70 rounded text-xs">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
