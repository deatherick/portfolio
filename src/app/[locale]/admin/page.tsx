// TODO: Add authentication (e.g. NextAuth) and redirect authenticated users
// to the Homepage dashboard at http://192.168.0.228:3001
import { useTranslations } from "next-intl";

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-cyan-400/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-cyan-400 font-semibold text-lg">Coming Soon</p>
                <p className="text-slate-400 max-w-sm mx-auto text-sm">
                    Private access area — authentication not yet configured.
                </p>
                <a href="/" className="inline-block mt-4 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
                    ← Back to portfolio
                </a>
            </div>
        </div>
    );
}
