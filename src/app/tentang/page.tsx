import type { Metadata } from "next"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import { personal } from "@/lib/content"

export const metadata: Metadata = {
  title: `Profil — ${personal.name}`,
  description: `Profil lengkap ${personal.name}, ${personal.title} di ${personal.university}.`,
  openGraph: {
    title: `Profil — ${personal.name}`,
    description: `Profil lengkap ${personal.name}, ${personal.title} di ${personal.university}.`,
  },
}

export default function TentangPage() {
  return (
    <>
      <About />
      <Skills />
    </>
  )
}
