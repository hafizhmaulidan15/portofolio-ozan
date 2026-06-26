import { experiences } from "@/lib/content"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Experience() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pt-28 pb-16 md:px-12 md:pt-36 md:pb-20 lg:px-16">
        <div className="pointer-events-none absolute -right-40 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-bl from-burgundy/20 to-transparent blur-[100px]" />
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Pengalaman
          </p>
          <h2 className="mt-6 font-serif text-5xl font-black leading-[1] tracking-[-0.03em] md:mt-8 md:text-7xl lg:text-8xl">
            Organisasi
          </h2>
        </div>
      </section>
      <section className="relative overflow-hidden px-5 pb-28 md:px-12 md:pb-36 lg:px-16">
        <div className="pointer-events-none absolute -left-60 bottom-0 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-accent-muted/10 to-transparent blur-[100px]" />
        <div className="mx-auto max-w-6xl">
          <div className="space-y-0">
            {experiences.map((exp) => (
              <div key={exp.id} className="group grid gap-4 border-t border-border/60 py-8 transition-all duration-500 md:grid-cols-3 md:py-10">
                <div className="flex items-center gap-3 md:items-start">
                  <FontAwesomeIcon icon={faCircle} className="h-2 w-2 text-accent/40 transition-all duration-500 group-hover:text-accent" />
                  <div>
                    <span className="font-mono text-2xl font-bold tracking-[-0.05em] text-accent md:text-3xl">
                      {exp.duration}
                    </span>
                    <span className="ml-3 rounded-sm bg-surface px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-text-muted md:ml-4 md:text-[10px]">
                      {exp.type === "organization" ? "Org" : "Panitia"}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-base font-bold text-text-primary transition-colors duration-500 group-hover:text-accent md:text-lg">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-text-secondary">
                    {exp.organization}
                  </p>
                  <ul className="mt-3 space-y-1.5 md:mt-4">
                    {exp.description.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-text-muted transition-colors duration-500 group-hover:text-text-secondary">
                        <FontAwesomeIcon icon={faChevronRight} className="mt-0.5 h-2.5 w-2.5 shrink-0 text-gold/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
