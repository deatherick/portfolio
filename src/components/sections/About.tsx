"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
    const t = useTranslations("about");
    const interests = t.raw("interests") as string[];

    return (
        <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
            <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                className="text-3xl sm:text-4xl font-bold mb-16 text-center"
            >
                <span className="text-cyan-400">/</span> {t("title")}
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Bio */}
                <div className="lg:col-span-2 space-y-5">
                    {(["p1", "p2", "p3"] as const).map((key, i) => (
                        <motion.p
                            key={key}
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={fadeUp} custom={i + 1}
                            className="text-slate-400 leading-relaxed"
                        >
                            {t(key)}
                        </motion.p>
                    ))}
                </div>

                {/* Side info */}
                <div className="space-y-6">
                    {/* Languages */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                    >
                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">{t("languages_title")}</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-white">{t("spanish")}</span>
                                <span className="text-slate-400">{t("spanish_level")}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-white">{t("english")}</span>
                                <span className="text-slate-400">{t("english_level")}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interests */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-5"
                    >
                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">{t("interests_title")}</h3>
                        <ul className="space-y-1">
                            {interests.map((item) => (
                                <li key={item} className="text-sm text-slate-400 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
