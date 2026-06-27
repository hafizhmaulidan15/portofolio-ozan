import { skills } from "@/lib/content"

export default function Skills() {
  return (
    <section className="border-t border-border/30 px-5 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Keahlian</p>
        <div className="mt-8 md:mt-10">
          {skills.map((skill) => (
            <div key={skill.category} className="flex items-baseline gap-4 border-b border-border/20 py-3 md:gap-6 md:py-3.5">
              <p className="w-24 shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted md:w-28 md:text-sm">{skill.category}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                {skill.items.map((item) => (
                  <span key={item} className="text-sm text-text-secondary transition-colors hover:text-text-primary md:text-base">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
