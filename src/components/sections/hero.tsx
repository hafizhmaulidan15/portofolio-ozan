import { personal, education, experiences, achievements } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faUsers, faAward } from "@fortawesome/free-solid-svg-icons"

const exps = experiences.slice(0, 4)
const achs = achievements.slice(0, 4)

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-hidden pt-16 md:pt-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent-muted/20 via-accent-deep/10 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-gold-muted/15 via-amber/10 to-transparent blur-[100px]" />
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col px-4 md:min-h-[calc(100dvh-5rem)] md:px-6 lg:px-8">
        <div className="flex flex-1 flex-col justify-center gap-6 pb-4 pt-6 md:flex-row md:items-center md:gap-10 md:pb-0 md:pt-0">
          <div className="flex flex-col justify-center md:flex-1">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold md:text-left md:text-sm">
              {personal.university}
            </p>
            <h1 className="mt-2 text-center font-serif text-5xl font-black leading-[0.9] tracking-[-0.04em] text-text-primary md:mt-4 md:text-left md:text-7xl lg:text-8xl xl:text-9xl">
              {personal.name.split(" ")[0]}
              <br />
              {personal.name.split(" ")[1]}
            </h1>
            <div className="mt-3 flex items-center justify-center gap-4 md:mt-5 md:justify-start">
              <div className="h-8 w-1 shrink-0 bg-gradient-to-b from-accent to-accent-muted" />
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted md:text-base">
                {personal.title}
              </p>
            </div>
            <p className="mt-4 max-w-lg text-center text-sm leading-relaxed text-text-secondary/60 md:mt-6 md:text-left md:text-base">
              &ldquo;{personal.tagline}&rdquo;
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-center">
            <div className="relative aspect-[4/5] w-full max-w-[180px] md:max-w-[260px] lg:max-w-[300px]">
              <div className="absolute -top-2 -right-2 z-10 h-6 w-6 bg-gradient-to-br from-accent to-accent-muted md:-top-3 md:-right-3 md:h-8 md:w-8" />
              <div className="relative h-full w-full overflow-hidden ring-1 ring-white/5">
                <Image
                  src="/images/foto-formal.jpg"
                  alt={personal.name}
                  fill
                  sizes="(max-width: 768px) 180px, (max-width: 1024px) 260px, 300px"
                  className="object-cover object-[center_30%] transition-all duration-700 ease-out hover:scale-105"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 flex justify-center gap-3">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-text-primary transition-all duration-300 hover:bg-accent-hover">
                LinkedIn
              </a>
              <a href={`mailto:${personal.email}`} className="border border-gold/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-bg">
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 py-3 md:py-4">
          <div className="grid gap-2 md:grid-cols-3 md:gap-4">
            <Link href="/tentang" className="group flex items-center justify-between gap-2 rounded-sm px-3 py-2.5 transition-all duration-500 hover:bg-accent-deep/20 md:flex-col md:items-start md:px-4 md:py-3">
              <div className="flex items-center gap-3 md:items-start">
                <span className="font-mono text-xl font-bold tracking-[-0.05em] text-border md:text-2xl">01</span>
                <div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faGraduationCap} className="h-3 w-3 text-gold" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Pendidikan</p>
                  </div>
                  <div className="mt-0.5 hidden space-y-0.5 md:block">
                    {education.slice(0, 2).map((e) => (
                      <p key={e.institution} className="text-xs text-text-secondary transition-all duration-500 group-hover:translate-x-1">{e.institution}</p>
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted transition-all duration-500 group-hover:text-gold">→</span>
            </Link>
            <Link href="/pengalaman" className="group flex items-center justify-between gap-2 rounded-sm px-3 py-2.5 transition-all duration-500 hover:bg-burgundy/20 md:flex-col md:items-start md:px-4 md:py-3">
              <div className="flex items-center gap-3 md:items-start">
                <span className="font-mono text-xl font-bold tracking-[-0.05em] text-border md:text-2xl">02</span>
                <div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUsers} className="h-3 w-3 text-gold" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Organisasi</p>
                  </div>
                  <div className="mt-0.5 hidden space-y-0.5 md:block">
                    {exps.map((e) => (
                      <p key={e.id} className="text-xs text-text-secondary transition-all duration-500 group-hover:translate-x-1">{e.organization.split("·")[0].trim()}</p>
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted transition-all duration-500 group-hover:text-gold">→</span>
            </Link>
            <Link href="/prestasi" className="group flex items-center justify-between gap-2 rounded-sm px-3 py-2.5 transition-all duration-500 hover:bg-gold-deep/20 md:flex-col md:items-start md:px-4 md:py-3">
              <div className="flex items-center gap-3 md:items-start">
                <span className="font-mono text-xl font-bold tracking-[-0.05em] text-border md:text-2xl">03</span>
                <div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faAward} className="h-3 w-3 text-gold" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Prestasi</p>
                  </div>
                  <div className="mt-0.5 hidden space-y-0.5 md:block">
                    {achs.map((a) => (
                      <p key={a.id} className="text-xs text-text-secondary transition-all duration-500 group-hover:translate-x-1">{a.title}</p>
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted transition-all duration-500 group-hover:text-gold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
