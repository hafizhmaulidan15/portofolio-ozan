import type { Metadata } from "next"
import Experience from "@/components/sections/experience"
import { personal } from "@/lib/content"

export const metadata: Metadata = {
  title: `Pengalaman — ${personal.name}`,
  description: `Pengalaman organisasi dan kepanitiaan ${personal.name}.`,
  openGraph: {
    title: `Pengalaman — ${personal.name}`,
    description: `Pengalaman organisasi dan kepanitiaan ${personal.name}.`,
  },
}

export default function PengalamanPage() {
  return <Experience />
}
