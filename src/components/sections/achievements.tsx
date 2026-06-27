import { achievements } from "@/lib/content"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward } from "@fortawesome/free-solid-svg-icons"

export default function Achievements() {
  return (
    <section className="relative overflow-hidden px-5 pt-28 pb-28 md:px-12 md:pt-36 md:pb-36 lg:px-16">
      <div className="pointer-events-none absolute -left-10 top-0 select-none text-[18vw] font-black leading-none text-accent-muted/5">
        WIN
      </div>
      <div className="mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">Prestasi</p>
        <div className="mt-8 space-y-0 md:mt-10">
          {achievements.map((ach, i) => (
            <div key={ach.id} className="group flex items-start gap-4 border-t border-border/30 py-4 transition-all hover:bg-surface/20 md:gap-6 md:py-5">
              <div className="flex w-8 shrink-0 items-center gap-1.5 md:w-10">
                <FontAwesomeIcon icon={faAward} className="h-3 w-3 text-gold/30 transition-all group-hover:text-gold/60" />
                <span className="font-mono text-sm font-bold tracking-tight text-border transition-colors group-hover:text-accent md:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {ach.year && <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-accent/80 md:text-[10px]">{ach.year}</span>}
                </div>
                <h3 className={`text-sm font-bold tracking-wide text-text-primary transition-colors group-hover:text-accent md:text-base ${ach.year ? "mt-0.5" : ""}`}>{ach.title}</h3>
                {ach.detail && <p className="mt-0.5 text-xs leading-relaxed text-text-secondary/80 md:text-sm">{ach.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
