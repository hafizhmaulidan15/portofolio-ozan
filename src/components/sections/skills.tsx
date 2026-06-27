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
    <section className="border-t border-border/30 px-5 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">Keahlian</p>
        <div className="mt-8 md:mt-10">
          {skills.map((skill) => {
            const Icon = catIcons[skill.category] || faGear
            return (
              <div key={skill.category} className="flex items-baseline gap-5 border-b border-border/20 py-4 transition-all hover:bg-surface/20 md:gap-8 md:py-5">
                <div className="flex w-20 shrink-0 items-center gap-1 md:w-28 md:gap-2">
                  <FontAwesomeIcon icon={Icon} className="h-3 w-3 text-gold/40" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted md:text-sm">{skill.category}</p>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {skill.items.map((item) => (
                    <span key={item} className="text-sm tracking-wide text-text-secondary transition-colors hover:text-text-primary md:text-base">{item}</span>
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
