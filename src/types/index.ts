export interface Experience {
  id: string
  role: string
  organization: string
  location?: string
  duration: string
  description: string[]
  type: "organization" | "committee" | "achievement"
}

export interface Achievement {
  id: string
  title: string
  detail?: string
  year?: string
}

export interface Skill {
  category: string
  items: string[]
}
