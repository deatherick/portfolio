import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");
    const buildDate = process.env.APP_BUILD_DATE ?? "unknown-date";
    const buildNumber = process.env.APP_BUILD_NUMBER ?? "0";
    const buildVersion = process.env.APP_BUILD_VERSION ?? `${buildDate}.${buildNumber}`;

    return (
        <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
            <p>{t("built_with")}</p>
            <p className="mt-1">
                <a
                    href="https://github.com/deatherick/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                >
                    {t("source")}
                </a>
            </p>
            <p className="mt-2 text-xs text-slate-600">
                Build {buildVersion} ({buildDate} #{buildNumber})
            </p>
        </footer>
    );
}
