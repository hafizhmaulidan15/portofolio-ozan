import { personal } from "@/lib/content"
import Button from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-accent-deep/30 px-5 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent-muted/20 to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Kontak</p>
        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Email</p>
            <a href={`mailto:${personal.email}`} className="mt-1 block text-sm font-medium text-text-primary transition-colors hover:text-accent md:text-base">{personal.email}</a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Telepon</p>
            <a href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-medium text-text-primary transition-colors hover:text-accent md:text-base">{personal.phone}</a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">LinkedIn</p>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 block break-all text-sm font-medium text-text-primary transition-colors hover:text-accent md:text-base">{personal.linkedin}</a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Lokasi</p>
            <p className="mt-1 text-sm font-medium text-text-secondary md:text-base">{personal.location}</p>
          </div>
          <div className="md:col-span-2 md:mt-4">
            <Button href={`mailto:${personal.email}`}>Kirim Email</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
