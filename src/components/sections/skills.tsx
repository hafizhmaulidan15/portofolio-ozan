import { skills } from "@/lib/content"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGavel, faUsersGear, faComments, faGear, faLanguage } from "@fortawesome/free-solid-svg-icons"

const catIcons: Record<string, typeof faGavel> = {
  Hukum: faGavel,
  Organisasi: faUsersGear,
  Komunikasi: faComments,
  Teknis: faGear,
  Bahasa: faLanguage,
}

export default function Skills() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-8 md:px-12 md:pb-32 md:pt-12 lg:px-16">
      <div className="pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-gradient-to-bl from-gold-muted/10 to-transparent blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[250px] w-[250px] rounded-full bg-gradient-to-tr from-accent-muted/10 to-transparent blur-[80px]" />
      <div className="mx-auto max-w-6xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
          Keahlian
        </p>
        <h2 className="mt-6 font-serif text-5xl font-black leading-[1] tracking-[-0.03em] md:mt-8 md:text-7xl lg:text-8xl">
          Kompetensi
        </h2>
        <div className="mt-12 space-y-0 md:mt-16">
          {skills.map((skill) => {
            const Icon = catIcons[skill.category] || faGear
            return (
              <div key={skill.category} className="grid gap-3 border-t border-border/60 py-6 transition-all duration-500 md:grid-cols-3 md:py-8">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={Icon} className="h-4 w-4 text-gold/40" />
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold md:text-[11px]">
                    {skill.category}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5 md:col-span-2">
                  {skill.items.map((item) => (
                    <span key={item} className="text-sm text-text-secondary transition-all duration-300 hover:text-text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
