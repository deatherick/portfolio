"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface Degree {
    institution: string;
    degree: string;
    period: string;
    note: string;
}
interface Cert {
    name: string;
    issuer: string;
    year: string;
    description: string;
}

export default function Education() {
    const t = useTranslations("education");
    const degrees = t.raw("degrees") as Degree[];
    const certs = t.raw("certifications") as Cert[];

    return (
        <section id="education" className="py-24 px-4 max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-bold mb-16 text-center"
            >
                <span className="text-cyan-400">/</span> {t("title")}
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Education */}
                <div>
                    <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-6">{t("education_title")}</h3>
                    <div className="space-y-4">
                        {degrees.map((d, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                            >
                                <div className="flex justify-between items-start gap-2 flex-wrap mb-1">
                                    <h4 className="font-semibold text-white text-sm">{d.degree}</h4>
                                    <span className="text-xs text-slate-500 whitespace-nowrap">{d.period}</span>
                                </div>
                                <p className="text-sm text-cyan-400 mb-1">{d.institution}</p>
                                <p className="text-xs text-slate-500">{d.note}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-6">{t("certs_title")}</h3>
                    <div className="space-y-4">
                        {certs.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                            >
                                <div className="flex justify-between items-start gap-2 flex-wrap mb-1">
                                    <h4 className="font-semibold text-white text-sm">{c.name}</h4>
                                    <span className="text-xs px-2 py-0.5 bg-cyan-400/10 text-cyan-400 rounded-full">{c.year}</span>
                                </div>
                                <p className="text-sm text-cyan-400 mb-1">{c.issuer}</p>
                                <p className="text-xs text-slate-500 leading-relaxed">{c.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
