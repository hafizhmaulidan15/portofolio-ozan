import { experiences } from "@/lib/content"

export default function Experience() {
  return (
    <section className="px-5 pt-28 pb-28 md:px-12 md:pt-36 md:pb-36 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Pengalaman</p>
        <div className="relative mt-8 md:mt-10">
          <div className="absolute bottom-0 left-[18px] top-0 hidden w-px bg-accent/20 md:block" />
          <div className="space-y-0">
            {experiences.map((exp) => (
              <div key={exp.id} className="group relative flex gap-4 border-t border-border/30 py-5 md:gap-6 md:py-6 md:pl-12">
                <div className="hidden md:block">
                  <div className="absolute left-[13px] top-[26px] h-3 w-3 rounded-full border-2 border-accent bg-bg transition-all group-hover:bg-accent" />
                </div>
                <div className="w-20 shrink-0 md:w-24">
                  <p className="font-mono text-xs font-bold text-accent md:text-sm">{exp.duration}</p>
                  <span className="mt-0.5 inline-block rounded-sm bg-surface px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-text-muted md:text-[9px]">{exp.type === "organization" ? "Org" : "Panitia"}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-text-primary transition-colors group-hover:text-accent md:text-base">{exp.role}</h3>
                  <p className="mt-0.5 text-xs text-text-secondary md:text-sm">{exp.organization}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.description.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-text-muted md:text-sm">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
