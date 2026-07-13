"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const NAV_KEYS = ["about", "skills", "experience", "projects", "education", "contact"] as const;

export default function Navbar() {
    const t = useTranslations("nav");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const switchLocale = (next: string) => {
        const segments = pathname.split("/");
        segments[1] = next;
        router.push(segments.join("/") || "/");
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href={`/${locale}`} className="text-cyan-400 font-bold text-xl tracking-tight hover:text-cyan-300 transition-colors">
                    EM<span className="text-white">.</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_KEYS.map((key) => (
                        <a
                            key={key}
                            href={`#${key}`}
                            className="text-sm text-slate-400 hover:text-cyan-400 transition-colors capitalize"
                        >
                            {t(key)}
                        </a>
                    ))}
                </nav>

                {/* Lang switcher + mobile toggle */}
                <div className="flex items-center gap-3">
                    <div className="flex rounded-full border border-slate-700 overflow-hidden text-xs font-medium">
                        {(["en", "es"] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => switchLocale(lang)}
                                className={`px-3 py-1.5 transition-colors ${locale === lang
                                        ? "bg-cyan-400 text-slate-950"
                                        : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Hamburger */}
                    <button
                        className="md:hidden text-slate-400 hover:text-white p-1"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 flex flex-col gap-4">
                    {NAV_KEYS.map((key) => (
                        <a
                            key={key}
                            href={`#${key}`}
                            onClick={() => setOpen(false)}
                            className="text-slate-300 hover:text-cyan-400 transition-colors capitalize"
                        >
                            {t(key)}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
