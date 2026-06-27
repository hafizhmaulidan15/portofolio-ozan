import { personal } from "@/lib/content"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 md:pt-20">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-between md:min-h-[calc(100dvh-5rem)]">
        <div className="flex flex-1 flex-col md:flex-row">
          <div className="relative z-10 flex flex-col justify-center px-5 pt-10 md:w-7/12 md:px-8 md:pt-0 lg:px-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold md:text-xs">
              {personal.university}
            </p>
            <h1 className="mt-1 font-serif text-7xl font-black leading-[0.85] tracking-[-0.04em] text-text-primary md:mt-2 md:text-8xl lg:text-9xl">
              {personal.name.split(" ")[0]}
            </h1>
            <h1 className="font-serif text-5xl font-black leading-[0.85] tracking-[-0.04em] text-text-muted md:text-7xl lg:text-8xl">
              {personal.name.split(" ")[1]}
            </h1>
            <div className="mt-4 flex items-center gap-3 md:mt-6">
              <div className="h-10 w-0.5 bg-accent" />
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-muted md:text-sm">
                {personal.title}
              </p>
            </div>
            <p className="mt-3 max-w-md text-sm italic leading-relaxed text-text-secondary/50 md:mt-4 md:text-base">
              &ldquo;{personal.tagline}&rdquo;
            </p>
          </div>
          <div className="relative mt-8 md:mt-0 md:w-5/12">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-bg via-bg/60 to-transparent md:via-bg/30" />
            <div className="relative h-[50vh] w-full md:h-full">
              <Image
                src="/images/foto-formal.jpg"
                alt={personal.name}
                fill
                className="object-cover object-[center_30%]"
                priority
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-border/40 px-5 py-3 md:px-8 md:py-3 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="flex gap-5">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] font-semibold uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-accent md:text-xs">LinkedIn</a>
              <a href={`mailto:${personal.email}`} className="text-[10px] font-semibold uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-accent md:text-xs">Email</a>
            </div>
            <div className="flex gap-5 md:gap-8">
              <a href="/tentang" className="text-[10px] font-semibold uppercase tracking-[0.25em] text-text-secondary transition-colors hover:text-accent md:text-xs">01 Profil</a>
              <a href="/pengalaman" className="text-[10px] font-semibold uppercase tracking-[0.25em] text-text-secondary transition-colors hover:text-accent md:text-xs">02 Pengalaman</a>
              <a href="/prestasi" className="text-[10px] font-semibold uppercase tracking-[0.25em] text-text-secondary transition-colors hover:text-accent md:text-xs">03 Prestasi</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
