import Link from "next/link"

interface ButtonProps {
  children: React.ReactNode
  href: string
  variant?: "primary" | "outline"
  className?: string
}

export default function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const base = "relative inline-flex items-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"

  const styles = {
    primary: "bg-accent text-text-primary hover:bg-accent-hover",
    outline: "border border-gold/50 text-gold hover:bg-gold hover:text-bg",
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  )
}
