import { personal } from "@/lib/content"
import Button from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocationDot, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 px-5 py-24 md:px-12 md:py-32 lg:px-16">
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-accent-muted/15 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-gold-muted/10 to-transparent blur-[100px]" />
      <div className="mx-auto max-w-6xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
          Kontak
        </p>
        <h2 className="mt-6 font-serif text-5xl font-black leading-[1] tracking-[-0.03em] md:mt-8 md:text-7xl lg:text-8xl">
          Hubungi
        </h2>
        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
          <div className="group">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 text-gold/40 transition-all duration-300 group-hover:text-gold" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Email</p>
            </div>
            <a href={`mailto:${personal.email}`} className="mt-1 block text-sm font-medium text-text-primary transition-all duration-500 hover:text-accent md:text-base">
              {personal.email}
            </a>
          </div>
          <div className="group">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 text-gold/40 transition-all duration-300 group-hover:text-gold" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Telepon</p>
            </div>
            <a href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-medium text-text-primary transition-all duration-500 hover:text-accent md:text-base">
              {personal.phone}
            </a>
          </div>
          <div className="group">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLinkedin} className="h-3.5 w-3.5 text-gold/40 transition-all duration-300 group-hover:text-gold" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">LinkedIn</p>
            </div>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-medium text-text-primary break-all transition-all duration-500 hover:text-accent md:text-base">
              {personal.linkedin}
            </a>
          </div>
          <div className="group">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5 text-gold/40 transition-all duration-300 group-hover:text-gold" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Lokasi</p>
            </div>
            <p className="mt-1 text-sm font-medium text-text-secondary md:text-base">
              {personal.location}
            </p>
          </div>
          <div className="md:col-start-3 md:row-start-1 md:self-end">
            <Button href={`mailto:${personal.email}`}>
              Kirim Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
