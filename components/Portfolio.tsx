import type { ReactNode } from "react";
import { site } from "@/data/site";

/* ---------- small building blocks ---------- */

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-14 sm:py-16">
      <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-[13px] text-muted">
      {children}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const btnPrimary =
  "inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent";
const btnGhost =
  "inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent";

/* ---------- page ---------- */

export default function Portfolio() {
  const { links, experience: exp } = site;

  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-line bg-paper/85 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5">
          <a href="#top" className="font-semibold tracking-tight text-ink">
            {site.name}
          </a>
          <div className="flex items-center gap-5 text-sm text-muted">
            <a href="#work" className="hidden hover:text-ink sm:inline">Work</a>
            <a href="#skills" className="hidden hover:text-ink sm:inline">Skills</a>
            <a href="#contact" className="hidden hover:text-ink sm:inline">Contact</a>
            <a href={links.resume} download className="font-medium text-accent hover:underline">
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-5">
        {/* Hero */}
        <section className="pb-14 pt-16 sm:pb-16 sm:pt-24">
          {site.availability && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[13px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.availability}
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{site.name}</h1>
          <p className="mt-3 text-lg text-accent">{site.role}</p>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">{site.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.resume} download className={btnPrimary}>
              <DownloadIcon /> Download resume
            </a>
            <a href={`mailto:${links.email}`} className={btnGhost}>Email me</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost}>
              LinkedIn <ArrowIcon />
            </a>
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                GitHub <ArrowIcon />
              </a>
            )}
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Highlights" className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="bg-paper p-5">
              <p className="text-2xl font-semibold tracking-tight text-ink">{s.value}</p>
              <p className="mt-1 text-[13px] leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <div className="mt-14">
          <Section id="experience" title="Experience">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-ink">{exp.company}</h3>
              <p className="text-sm text-muted">{exp.period}</p>
            </div>
            <p className="mt-2 text-[15px] text-muted">
              <a href={exp.productUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                {exp.product}
              </a>
              {" — "}
              {exp.productDescription}
            </p>

            <ol className="mt-6 border-l border-line">
              {exp.roles.map((r, i) => (
                <li key={r.title} className="relative pb-5 pl-6 last:pb-0">
                  <span
                    className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                      i === 0 ? "border-accent bg-accent" : "border-line bg-paper"
                    }`}
                  />
                  <p className="font-medium text-ink">{r.title}</p>
                  <p className="text-sm text-muted">{r.period}</p>
                </li>
              ))}
            </ol>

            <ul className="mt-7 space-y-2.5">
              {exp.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* What I've worked on */}
        <Section id="work" title="What I've worked on">
          <div className="grid gap-4 sm:grid-cols-2">
            {site.work.map((w) => (
              <article key={w.title} className="rounded-xl border border-line p-5 transition hover:border-accent/50">
                <h3 className="font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{w.text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {w.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & tools">
          <dl className="space-y-4">
            {site.skills.map((s) => (
              <div key={s.group} className="grid gap-2 sm:grid-cols-[120px_1fr] sm:gap-6">
                <dt className="pt-0.5 text-sm font-medium text-ink">{s.group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {s.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Education & research */}
        <Section id="education" title="Education & research">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-5">
              {site.education.map((e) => (
                <div key={e.degree}>
                  <p className="font-medium text-ink">{e.degree}</p>
                  <p className="text-[15px] text-muted">{e.school} · {e.period}</p>
                </div>
              ))}
              <div className="pt-1">
                <p className="mb-2 text-sm font-medium text-ink">Internships</p>
                {site.internships.map((i) => (
                  <p key={i.org} className="text-[15px] leading-relaxed text-muted">
                    <span className="text-ink">{i.org}</span> · {i.role}, {i.period}
                  </p>
                ))}
              </div>
            </div>
            <a
              href={site.publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-line p-5 transition hover:border-accent/50"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Publication</p>
              <p className="mt-2 font-medium leading-snug text-ink group-hover:text-accent">
                {site.publication.title}
              </p>
              <p className="mt-2 text-sm text-muted">{site.publication.venue}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Read paper <ArrowIcon />
              </p>
            </a>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="max-w-xl text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
            Looking for a full-stack engineer? Let&apos;s talk.
          </p>
          <a
            href={`mailto:${links.email}`}
            className="mt-4 inline-block break-all text-lg text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            {links.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.resume} download className={btnPrimary}>
              <DownloadIcon /> Download resume
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost}>
              LinkedIn <ArrowIcon />
            </a>
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                GitHub <ArrowIcon />
              </a>
            )}
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-2 px-5 py-8 text-sm text-muted">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.location}</p>
        </div>
      </footer>
    </>
  );
}
