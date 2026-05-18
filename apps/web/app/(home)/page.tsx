import Link from "next/link"
import { Button } from "@/core/components/ui/button"

export default function HomePage() {
  return (
    <div className="text-center space-y-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground">
        T
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tubod Municipality Agriculture Information System</h1>
        <p className="mt-2 text-muted-foreground">Comprehensive agriculture information management system for Tubod Municipality, Surigao del Norte. The system manages farmer registration, crop monitoring, agricultural programs, and resource distribution to support local farming communities and enhance agricultural productivity in the municipality.</p>
      </div>
      <div className="flex gap-3 justify-center">
        <Link href="/login"><Button>Sign In</Button></Link>
        <Link href="/register"><Button variant="outline">Register</Button></Link>
      </div>
    </div>
  )
}