import type { Metadata } from "next"
import Achievements from "@/components/sections/achievements"
import { personal } from "@/lib/content"

export const metadata: Metadata = {
  title: `Prestasi — ${personal.name}`,
  description: `Capaian dan penghargaan ${personal.name}.`,
  openGraph: {
    title: `Prestasi — ${personal.name}`,
    description: `Capaian dan penghargaan ${personal.name}.`,
  },
}

export default function PrestasiPage() {
  return <Achievements />
}
