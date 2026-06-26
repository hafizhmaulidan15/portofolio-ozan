import { personal, education } from "@/lib/content"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pt-28 pb-16 md:px-12 md:pt-36 md:pb-20 lg:px-16">
        <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-accent-muted/15 to-transparent blur-[100px]" />
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Profil
          </p>
          <div className="mt-6 md:mt-8">
            <h1 className="font-serif text-5xl font-black leading-[1] tracking-[-0.03em] text-text-primary md:text-7xl lg:text-8xl">
              {personal.name.split(" ")[0]}
            </h1>
            <h1 className="mt-1 font-serif text-5xl font-black leading-[1] tracking-[-0.03em] text-border md:mt-2 md:text-7xl lg:text-8xl">
              {personal.name.split(" ")[1]}
            </h1>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden px-5 pb-16 md:px-12 md:pb-20 lg:px-16">
        <div className="pointer-events-none absolute -right-60 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-gold-muted/10 to-transparent blur-[100px]" />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-accent-muted" />
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:mt-8 md:text-lg">
                {personal.bio}
              </p>
              <blockquote className="relative mt-10 border-l-2 border-gold/40 pl-5 md:mt-12 md:pl-6">
                <FontAwesomeIcon icon={faQuoteLeft} className="absolute -top-3 -left-3 h-5 w-5 text-gold/20 md:-left-4 md:h-6 md:w-6" />
                <p className="font-serif text-lg italic leading-relaxed text-text-muted md:text-xl">
                  &ldquo;Hukum adalah panglima. Keadilan adalah tujuan.&rdquo;
                </p>
              </blockquote>
            </div>
            <div>
              <div className="h-1 w-12 bg-gradient-to-r from-gold to-gold-muted" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold md:mt-8">
                Pendidikan
              </p>
              <div className="mt-8 space-y-12 md:mt-10">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-6 md:pl-8">
                    <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent-muted" />
                    <span className="font-mono text-xl font-bold tracking-[-0.05em] text-accent md:text-2xl">
                      {edu.year.replace("—", "–")}
                    </span>
                    <h4 className="mt-1 text-base font-bold text-text-primary md:text-lg">
                      {edu.institution}
                    </h4>
                    <p className="mt-0.5 text-sm text-text-secondary">
                      {edu.degree}
                    </p>
                    {edu.description && (
                      <p className="mt-2 text-xs leading-relaxed text-text-muted">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
