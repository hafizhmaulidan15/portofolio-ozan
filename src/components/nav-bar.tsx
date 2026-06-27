"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { personal, navLinks } from "@/lib/content"
import { useState, useEffect, useRef } from "react"

export default function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  function toggle() {
    setOpen((v) => !v)
  }

  const pointerRef = useRef(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
          <Link
            href="/"
            className="text-base font-bold uppercase tracking-[0.15em] text-text-primary transition-all duration-300 hover:text-accent md:text-lg"
          >
            {personal.name.split(" ")[0]}
          </Link>

          <ul className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                      isActive ? "text-accent after:w-full" : "text-text-secondary hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={toggle}
            onPointerDown={() => { pointerRef.current = true }}
            className="relative z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm bg-surface/50 md:hidden active:bg-surface"
            style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span className={`block h-px w-full bg-text-primary transition-all duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block h-px w-full bg-text-primary transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-full bg-text-primary transition-all duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-bg/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col items-center gap-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-8 py-5 text-2xl font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}
