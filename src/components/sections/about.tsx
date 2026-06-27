import { personal, education } from "@/lib/content"

export default function About() {
  return (
    <div>
      <section className="px-5 pt-28 md:px-12 md:pt-36 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Profil</p>
          <div className="mt-6 border-l-2 border-accent/40 pl-5 md:mt-8 md:pl-6">
            <p className="text-sm leading-[2] text-text-secondary md:text-base">
              {personal.bio}
            </p>
            <div className="mt-6 border-t border-border/40 pt-4 md:mt-8 md:pt-5">
              <p className="font-serif text-lg italic leading-relaxed text-text-muted md:text-xl">
                &ldquo;Hukum adalah panglima. Keadilan adalah tujuan.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 pb-28 md:px-12 md:pb-36 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="mt-16 md:mt-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Pendidikan</p>
            <div className="mt-6 space-y-0 md:mt-8">
              {education.map((edu, i) => (
                <div key={i} className="flex items-start gap-4 border-t border-border/30 py-5 md:gap-6 md:py-6">
                  <span className="w-20 shrink-0 font-mono text-xs font-bold text-accent md:w-24 md:text-sm">{edu.year}</span>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary md:text-base">{edu.institution}</h4>
                    <p className="text-xs text-text-secondary md:text-sm">{edu.degree}</p>
                    {edu.description && <p className="mt-0.5 text-xs text-text-muted">{edu.description}</p>}
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
