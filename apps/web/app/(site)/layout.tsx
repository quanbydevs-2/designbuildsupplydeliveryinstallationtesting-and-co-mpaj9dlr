import Link from "next/link"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-8">
      <div className="grid min-h-[calc(100vh-6rem)] grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">
        <aside className="hidden rounded-xl border bg-card p-4 md:block">
          <div className="mb-4 flex items-center gap-2 px-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">T</div>
            <span className="font-semibold text-sm">Tubod Municipality Agriculture</span>
          </div>
          <nav className="space-y-1">
            <Link href="/dashboard" className="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm font-medium">Dashboard</Link>
            <Link href="/farmer" className="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm font-medium">Farmers</Link>
            <Link href="/crop" className="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm font-medium">Crops</Link>
            <Link href="/program" className="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm font-medium">Programs</Link>
            <Link href="/resource" className="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm font-medium">Resources</Link>
            <Link href="/distribution" className="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm font-medium">Distributions</Link>
          </nav>
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  )
}