import { personal, education } from "@/lib/content"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faGraduationCap, faScaleBalanced, faLocationDot, faBook, faUser } from "@fortawesome/free-solid-svg-icons"

const infoCards = [
  { icon: faGraduationCap, label: "Fakultas", value: personal.faculty },
  { icon: faBook, label: "Semester", value: personal.semester },
  { icon: faScaleBalanced, label: "Minat", value: personal.interest },
  { icon: faLocationDot, label: "Asal", value: personal.location },
]

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden px-5 pt-28 md:px-12 md:pt-36 lg:px-16">
        <div className="pointer-events-none absolute right-0 top-10 select-none text-[20vw] font-black leading-none text-accent-muted/5">
          LAW
        </div>
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">Profil</p>
          <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-5 md:gap-12">
            <div className="md:col-span-3">
              <div className="border-l-2 border-accent/40 pl-5 md:pl-6">
                <p className="text-sm leading-[2] tracking-wide text-text-secondary md:text-base">
                  {personal.bio}
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-4">
                {infoCards.map((card) => (
                  <div key={card.label} className="border border-border/30 bg-surface/30 px-3 py-3 md:px-4 md:py-4">
                    <FontAwesomeIcon icon={card.icon} className="h-3 w-3 text-gold/50 md:h-3.5 md:w-3.5" />
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted md:text-[11px]">{card.label}</p>
                    <p className="mt-0.5 text-xs font-semibold tracking-wide text-text-primary md:text-sm">{card.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border border-accent/20 bg-accent/5 px-5 py-5 md:mt-10 md:px-6 md:py-6">
                <FontAwesomeIcon icon={faQuoteLeft} className="mb-2 h-4 w-4 text-gold/40 md:h-5 md:w-5" />
                <p className="font-serif text-lg italic leading-relaxed text-text-muted md:text-xl">
                  &ldquo;Hukum adalah panglima. Keadilan adalah tujuan.&rdquo;
                </p>
              </div>
            </div>
            <div className="relative md:col-span-2">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-border/30">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                  <Image
                    src="/images/foto-formal.jpg"
                    alt={personal.name}
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-px flex-1 bg-accent/30" />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-accent/60">{personal.university}</p>
                  <div className="h-px flex-1 bg-accent/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden px-5 pb-28 md:px-12 md:pb-36 lg:px-16">
        <div className="pointer-events-none absolute -left-10 bottom-0 select-none text-[15vw] font-black leading-none text-accent-muted/5">
          JUSTICE
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="mt-16 md:mt-20">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} className="h-3.5 w-3.5 text-gold/50" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">Pendidikan</p>
            </div>
            <div className="mt-6 md:mt-8">
              {education.map((edu, i) => (
                <div key={i} className="group flex items-start gap-4 border-t border-border/30 py-5 transition-all hover:bg-surface/30 md:gap-8 md:py-6">
                  <div className="flex w-8 shrink-0 items-center justify-center md:w-10">
                    <div className="h-2 w-2 rounded-full border border-accent/50 bg-bg transition-all group-hover:bg-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-0 md:flex-row md:items-center md:gap-6">
                      <span className="font-mono text-xs font-bold tracking-tight text-accent md:text-sm md:w-36">{edu.year}</span>
                      <div>
                        <h4 className="text-sm font-bold tracking-wide text-text-primary transition-colors group-hover:text-accent md:text-base">{edu.institution}</h4>
                        <p className="text-xs text-text-secondary md:text-sm">{edu.degree}</p>
                        {edu.description && <p className="mt-0.5 text-xs italic text-text-muted">{edu.description}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
