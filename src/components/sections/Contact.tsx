"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

interface ContactItem {
    label: string;
    value: string;
    href?: string;
    icon: React.ReactNode;
    copy?: boolean;
}

export default function Contact() {
    const t = useTranslations("contact");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(t("email"));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const items: ContactItem[] = [
        {
            label: t("email_label"),
            value: t("email"),
            href: `mailto:${t("email")}`,
            copy: true,
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            label: t("linkedin_label"),
            value: "linkedin.com/in/erickmorales-dev",
            href: t("linkedin_url"),
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            label: t("github_label"),
            value: "github.com/deatherick",
            href: t("github_url"),
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.8.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
        },
        {
            label: t("location_label"),
            value: t("location_value"),
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="contact" className="py-24 px-4 bg-slate-900/50">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                        <span className="text-cyan-400">/</span> {t("title")}
                    </h2>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">{t("subtitle")}</p>
                </motion.div>

                <div className="space-y-3">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-4 hover:border-slate-700 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                                {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                                {item.href ? (
                                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                                        className="text-sm text-white hover:text-cyan-400 transition-colors truncate block">
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-sm text-white truncate">{item.value}</p>
                                )}
                            </div>
                            {item.copy && (
                                <button
                                    onClick={handleCopy}
                                    className="shrink-0 text-xs text-slate-500 hover:text-cyan-400 transition-colors px-2 py-1 rounded border border-slate-700 hover:border-slate-600"
                                >
                                    {copied ? t("copied") : t("copy_email")}
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
