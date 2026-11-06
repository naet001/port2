import { site } from "@/site.config";

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-20 sm:mt-28">
      <h2 className="mb-4 text-sm font-medium text-muted">{heading}</h2>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[42rem] px-6 py-14 sm:py-28">
      <header className="flex flex-col">
        <span className="text-[1.05rem] font-medium">{site.name}</span>
        <span className="text-sm text-muted">{site.role}</span>
      </header>

      <section className="mt-16 sm:mt-24">
        <h1 className="mb-3 text-sm font-medium text-muted">Now</h1>
        <p className="text-[0.95rem] leading-7 text-muted">{site.now}</p>
      </section>

      <Section heading="Projects">
        <div className="flex flex-col">
          {site.projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="row-link flex flex-col gap-0.5"
            >
              <span className="text-[0.95rem] font-medium">{project.title}</span>
              <span className="text-sm text-muted">{project.description}</span>
            </a>
          ))}
        </div>
      </Section>

      <Section heading="Experience">
        <div className="flex flex-col">
          {site.experiences.map((experience) => (
            <div key={experience.role} className="row-link flex flex-col gap-0.5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[0.95rem] font-medium">{experience.role}</span>
                <span className="shrink-0 text-sm text-muted">{experience.period}</span>
              </div>
              <span className="text-sm text-muted">{experience.org}</span>
              <span className="text-sm text-muted">{experience.description}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="More">
        <p className="text-[0.95rem] leading-7 text-muted">
          {site.more.text}{" "}
          {site.more.links.map((link, i) => (
            <span key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-ink">
                {link.label}
              </a>
              {i < site.more.links.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
      </Section>
    </main>
  );
}
