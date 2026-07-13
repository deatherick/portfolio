import { NextResponse } from "next/server";

export const revalidate = 3600; // ISR: cache 1 hour

export async function GET() {
    const username = "deatherick";
    const token = process.env.GITHUB_TOKEN;

    const headers: HeadersInit = {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    try {
        const res = await fetch(
            `https://api.github.com/users/${username}/repos?type=public&per_page=20&sort=updated`,
            { headers, next: { revalidate: 3600 } }
        );

        if (!res.ok) {
            return NextResponse.json({ error: "GitHub API error" }, { status: res.status });
        }

        const data = await res.json();

        const repos = data.map((repo: Record<string, unknown>) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            updated_at: repo.updated_at,
            topics: repo.topics,
        }));

        return NextResponse.json(repos);
    } catch {
        return NextResponse.json({ error: "Failed to fetch repos" }, { status: 500 });
    }
}
