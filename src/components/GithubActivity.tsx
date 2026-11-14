"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

type Contribution = { date: string; count: number; level: number };
type ContributionResponse = {
  total?: Record<string, number>;
  contributions?: Contribution[];
};
type GithubUser = {
  public_repos: number;
  followers: number;
};

type Week = { days: (Contribution | null)[]; monthLabel?: string };

const levelColors = ["#17171a", "#1d3326", "#2a573b", "#3b7f51", "#57c777"];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function buildWeeks(contributions: Contribution[]): Week[] {
  if (contributions.length === 0) return [];

  const weeks: Week[] = [];
  let current: (Contribution | null)[] = [];

  const firstDay = new Date(`${contributions[0].date}T00:00:00`);
  const leading = firstDay.getDay();
  for (let i = 0; i < leading; i += 1) current.push(null);

  contributions.forEach((day) => {
    current.push(day);
    if (current.length === 7) {
      weeks.push({ days: current });
      current = [];
    }
  });

  if (current.length > 0) {
    while (current.length < 7) current.push(null);
    weeks.push({ days: current });
  }

  let lastMonth = -1;
  weeks.forEach((week) => {
    const firstDay = week.days.find(Boolean);
    if (!firstDay) return;
    const date = new Date(`${firstDay.date}T00:00:00`);
    if (date.getMonth() !== lastMonth && date.getDate() <= 7) {
      week.monthLabel = monthNames[date.getMonth()];
      lastMonth = date.getMonth();
    }
  });

  return weeks;
}

function currentStreak(contributions: Contribution[]) {
  let streak = 0;
  for (let i = contributions.length - 1; i >= 0; i -= 1) {
    if (contributions[i].count > 0) streak += 1;
    else break;
  }
  return streak;
}

export function GithubActivity() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [hovered, setHovered] = useState<{ x: number; y: number; date: string; count: number } | null>(
    null,
  );

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const [contributionResponse, userResponse] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?y=last`, {
            signal: controller.signal,
          }),
          fetch(`https://api.github.com/users/${profile.githubUser}`, {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }),
        ]);

        if (!contributionResponse.ok) throw new Error("Contribution lookup failed");

        const contributionData = (await contributionResponse.json()) as ContributionResponse;
        const days = contributionData.contributions ?? [];
        setContributions(days);
        setTotal(
          contributionData.total?.lastYear ??
            days.reduce((sum, day) => sum + day.count, 0),
        );

        if (userResponse.ok) {
          setUser((await userResponse.json()) as GithubUser);
        }

        setStatus("ready");
      } catch (error) {
        if ((error as Error).name !== "AbortError") setStatus("error");
      }
    }

    load();
    return () => controller.abort();
  }, []);

  const weeks = useMemo(() => buildWeeks(contributions), [contributions]);
  const streak = useMemo(() => currentStreak(contributions), [contributions]);
  const activeDays = useMemo(
    () => contributions.filter((day) => day.count > 0).length,
    [contributions],
  );

  const statItems = [
    { value: total ?? "—", label: "contributions / year" },
    { value: streak || "—", label: "day streak" },
    { value: activeDays || "—", label: "active days" },
    { value: user?.public_repos ?? "—", label: "public repos" },
  ];

  return (
    <Section id="activity" index="04" title="GitHub activity" note="Pulled live">
      <Reveal>
        <div className="mt-8 overflow-hidden rounded-xl border border-line bg-[#0c0c0e]">
          <div className="grid grid-cols-2 border-b border-line sm:grid-cols-4">
            {statItems.map((item, index) => (
              <div
                key={item.label}
                className={`px-5 py-5 ${index % 2 === 1 ? "border-l border-line" : ""} ${
                  index > 1 ? "border-t border-line sm:border-t-0" : ""
                } ${index > 0 ? "sm:border-l sm:border-line" : ""}`}
              >
                <p className="font-display text-2xl font-medium tracking-tight text-fg">
                  {item.value}
                </p>
                <p className="mt-1 font-mono text-[9.5px] tracking-[0.12em] text-dim uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative px-5 py-6 sm:px-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-dim uppercase">
                <GithubIcon className="size-3.5" />
                @{profile.githubUser}
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-muted uppercase transition-colors hover:text-fg"
              >
                Follow
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.7}
                />
              </a>
            </div>

            {status === "loading" ? (
              <div className="flex gap-[3px] overflow-hidden">
                {Array.from({ length: 53 }).map((_, column) => (
                  <div key={column} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((__, row) => (
                      <div
                        key={row}
                        className="size-[10px] animate-pulse rounded-[2px] bg-[#17171a] sm:size-3"
                      />
                    ))}
                  </div>
                ))}
              </div>
            ) : status === "error" ? (
              <div className="rounded-lg border border-line bg-[#0a0a0c] px-4 py-5">
                <p className="text-sm text-muted">
                  The live graph is unavailable right now — GitHub&apos;s API might be rate
                  limiting. The work is still there, though.
                </p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-2 inline-block text-sm text-fg"
                >
                  Open GitHub profile
                </a>
              </div>
            ) : (
              <div className="no-scrollbar overflow-x-auto pb-1">
                <div className="min-w-[740px]">
                  <div className="mb-1.5 flex gap-[3px] pl-7">
                    {weeks.map((week, index) => (
                      <div key={index} className="w-[10px] shrink-0 sm:w-3">
                        {week.monthLabel ? (
                          <span className="relative left-0 block font-mono text-[9px] whitespace-nowrap text-dim">
                            {week.monthLabel}
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-[3px]">
                    <div className="mr-1 flex w-6 flex-col gap-[3px] font-mono text-[8.5px] text-dim">
                      <span className="h-[10px] sm:h-3" />
                      <span className="h-[10px] leading-[10px] sm:h-3 sm:leading-3">Mon</span>
                      <span className="h-[10px] sm:h-3" />
                      <span className="h-[10px] leading-[10px] sm:h-3 sm:leading-3">Wed</span>
                      <span className="h-[10px] sm:h-3" />
                      <span className="h-[10px] leading-[10px] sm:h-3 sm:leading-3">Fri</span>
                      <span className="h-[10px] sm:h-3" />
                    </div>

                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.days.map((day, dayIndex) => (
                          <div
                            key={day ? day.date : `empty-${weekIndex}-${dayIndex}`}
                            onMouseEnter={(event) => {
                              if (!day) return;
                              setHovered({
                                x: event.currentTarget.offsetLeft,
                                y: event.currentTarget.offsetTop,
                                date: day.date,
                                count: day.count,
                              });
                            }}
                            onMouseLeave={() => setHovered(null)}
                            className="size-[10px] rounded-[2px] outline-offset-2 transition-transform duration-150 hover:scale-125 sm:size-3"
                            style={{
                              backgroundColor: day ? levelColors[day.level] ?? levelColors[0] : "transparent",
                            }}
                            title={day ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}` : undefined}
                          />
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-dim">
                      {hovered
                        ? `${hovered.count} contribution${hovered.count === 1 ? "" : "s"} · ${hovered.date}`
                        : "Last 12 months"}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-dim">
                      Less
                      {levelColors.map((color) => (
                        <span key={color} className="size-2.5 rounded-[2px]" style={{ backgroundColor: color }} />
                      ))}
                      More
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
