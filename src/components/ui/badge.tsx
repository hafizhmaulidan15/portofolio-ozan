interface BadgeProps {
  children: React.ReactNode
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-sm border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary uppercase tracking-wider">
      {children}
    </span>
  )
}
