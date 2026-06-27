import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { personal } from "@/lib/content"
import NavBar from "@/components/nav-bar"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
})

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
})

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.title}`,
  description: personal.bio.slice(0, 160),
  openGraph: {
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio.slice(0, 160),
    type: "website",
    locale: "id_ID",
    siteName: personal.name,
  },
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="bg-bg font-sans text-text-primary antialiased">
        <NavBar />
        <main className="pb-14">{children}</main>
        <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-bg/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-text-muted md:text-[11px]">
              &copy; {new Date().getFullYear()} {personal.name}
            </p>
            <div className="flex items-center gap-5">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-accent md:text-[11px]"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-accent md:text-[11px]"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
