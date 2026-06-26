import type { Metadata } from "next"
import Contact from "@/components/sections/contact"
import { personal } from "@/lib/content"

export const metadata: Metadata = {
  title: `Kontak — ${personal.name}`,
  description: `Hubungi ${personal.name}.`,
  openGraph: {
    title: `Kontak — ${personal.name}`,
    description: `Hubungi ${personal.name}.`,
  },
}

export default function KontakPage() {
  return <Contact />
}
