import { personal } from "@/lib/content"
import Button from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-accent-deep/30 px-5 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="pointer-events-none absolute right-0 top-0 select-none text-[20vw] font-black leading-none text-accent-muted/10">
        KONTAK
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/3 bg-gradient-to-r from-accent-muted/10 to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">Kontak</p>
        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-10">
          <div className="group">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 text-gold/40 transition-all group-hover:text-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Email</p>
            </div>
            <a href={`mailto:${personal.email}`} className="mt-1 block text-sm font-medium tracking-wide text-text-primary transition-colors hover:text-accent md:text-base">{personal.email}</a>
          </div>
          <div className="group">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 text-gold/40 transition-all group-hover:text-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Telepon</p>
            </div>
            <a href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-medium tracking-wide text-text-primary transition-colors hover:text-accent md:text-base">{personal.phone}</a>
          </div>
          <div className="group">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLinkedinIn} className="h-3.5 w-3.5 text-gold/40 transition-all group-hover:text-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">LinkedIn</p>
            </div>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 block break-all text-sm font-medium tracking-wide text-text-primary transition-colors hover:text-accent md:text-base">{personal.linkedin}</a>
          </div>
          <div className="group">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5 text-gold/40 transition-all group-hover:text-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Lokasi</p>
            </div>
            <p className="mt-1 text-sm font-medium tracking-wide text-text-secondary md:text-base">{personal.location}</p>
          </div>
          <div className="md:col-span-2 md:mt-4">
            <Button href={`mailto:${personal.email}`}>Kirim Email</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
