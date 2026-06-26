import { achievements } from "@/lib/content"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrophy } from "@fortawesome/free-solid-svg-icons"

export default function Achievements() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pt-28 pb-16 md:px-12 md:pt-36 md:pb-20 lg:px-16">
        <div className="pointer-events-none absolute -left-40 top-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-gold-muted/15 to-transparent blur-[100px]" />
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Prestasi
          </p>
          <h2 className="mt-6 font-serif text-5xl font-black leading-[1] tracking-[-0.03em] md:mt-8 md:text-7xl lg:text-8xl">
            Capaian
          </h2>
        </div>
      </section>
      <section className="relative overflow-hidden px-5 pb-28 md:px-12 md:pb-36 lg:px-16">
        <div className="pointer-events-none absolute -right-60 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-accent-muted/10 to-transparent blur-[100px]" />
        <div className="mx-auto max-w-6xl">
          <div className="space-y-0">
            {achievements.map((ach, i) => (
              <div key={ach.id} className="group flex items-start gap-5 border-t border-border/60 py-6 transition-all duration-500 hover:bg-gradient-to-r hover:from-surface/50 hover:to-transparent md:gap-8 md:py-8 md:px-4">
                <span className="mt-0.5 w-8 shrink-0 font-mono text-2xl font-bold tracking-[-0.05em] text-border transition-all duration-500 group-hover:text-accent/50 md:w-12 md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <FontAwesomeIcon icon={faTrophy} className="h-3 w-3 text-gold/40 transition-all duration-500 group-hover:text-gold" />
                    {ach.year && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent md:text-xs">
                        {ach.year}
                      </span>
                    )}
                  </div>
                  <h3 className={`text-sm font-bold text-text-primary transition-colors duration-500 group-hover:text-accent md:text-base ${ach.year ? "mt-1" : ""}`}>
                    {ach.title}
                  </h3>
                  {ach.detail && (
                    <p className="mt-1 text-xs leading-relaxed text-text-secondary md:mt-1.5 md:text-sm">
                      {ach.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
