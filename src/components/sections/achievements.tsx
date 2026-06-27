import { achievements } from "@/lib/content"

export default function Achievements() {
  return (
    <section className="px-5 pt-28 pb-28 md:px-12 md:pt-36 md:pb-36 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Prestasi</p>
        <div className="mt-8 space-y-0 md:mt-10">
          {achievements.map((ach, i) => (
            <div key={ach.id} className="group flex items-start gap-4 border-t border-border/30 py-4 transition-all md:gap-6 md:py-5">
              <span className="w-8 shrink-0 font-mono text-sm font-bold tracking-[-0.05em] text-border transition-colors group-hover:text-accent md:w-10 md:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {ach.year && <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-accent md:text-[10px]">{ach.year}</span>}
                </div>
                <h3 className={`text-sm font-bold text-text-primary transition-colors group-hover:text-accent md:text-base ${ach.year ? "mt-0.5" : ""}`}>{ach.title}</h3>
                {ach.detail && <p className="mt-0.5 text-xs leading-relaxed text-text-secondary md:text-sm">{ach.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
