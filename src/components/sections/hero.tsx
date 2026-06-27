import { personal } from "@/lib/content"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-dvh overflow-hidden">
      <div className="pointer-events-none absolute -top-16 right-0 select-none text-[18vw] font-black leading-none text-accent-muted/10 md:-top-20 md:text-[16vw]">
        HUKUM
      </div>
      <div className="pointer-events-none absolute bottom-36 left-0 select-none text-[12vw] font-black leading-none text-accent-muted/5 md:bottom-0 md:text-[10vw]">
        PIDANA
      </div>
      <div className="mx-auto flex h-full max-w-6xl flex-col md:flex-row">
        <div className="relative z-10 mb-6 flex flex-col justify-start px-5 pt-20 md:mb-0 md:w-7/12 md:justify-center md:px-8 md:pt-0 lg:px-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] md:text-xs">
            {personal.university}
          </p>
          <h1 className="mt-1 font-serif text-7xl font-black leading-[0.85] tracking-[-0.03em] text-text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] md:mt-2 md:text-8xl lg:text-9xl">
            {personal.name.split(" ")[0]}
          </h1>
          <h1 className="font-serif text-5xl font-black leading-[0.85] tracking-[-0.02em] text-text-muted md:text-7xl lg:text-8xl">
            {personal.name.split(" ")[1]}
          </h1>
          <div className="mt-3 flex items-center gap-3 md:mt-6">
            <div className="h-8 w-0.5 bg-accent shadow-[0_0_8px_rgba(204,0,0,0.4)] md:h-10" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-text-muted md:text-sm">
              {personal.title}
            </p>
          </div>
          <p className="mt-3 max-w-[55%] text-sm italic leading-relaxed text-text-secondary/50 md:mt-4 md:max-w-md md:text-base">
            &ldquo;{personal.tagline}&rdquo;
          </p>
        </div>
        <div className="relative w-full md:w-5/12">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-bg via-bg/60 to-transparent md:via-bg/30" />
          <div className="relative aspect-[3/4] max-h-[40vh] w-full md:aspect-auto md:max-h-none md:h-full">
            <Image
              src="/images/foto-formal.jpg"
              alt={personal.name}
              fill
              className="object-cover object-[center_15%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
