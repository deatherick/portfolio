import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");
    // Vercel expone el SHA del commit desplegado automaticamente (sin config
    // extra). No hay una variable equivalente de fecha de commit, asi que
    // usamos el hash corto como identificador de build.
    const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;
    const buildId = commitSha ? commitSha.slice(0, 7) : "dev";

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
                Build {buildId}
            </p>
        </footer>
    );
}
