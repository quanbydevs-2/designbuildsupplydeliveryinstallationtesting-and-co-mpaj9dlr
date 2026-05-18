import { Card, CardContent } from "@/core/components/ui/card"

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <p className="mb-5 text-sm text-muted-foreground">Welcome to Tubod Municipality Agriculture Information System</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                <span className="text-lg">📊</span>
              </div>
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Farmers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                <span className="text-lg">📊</span>
              </div>
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Crops</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
                <span className="text-lg">📊</span>
              </div>
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Programs</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400">
                <span className="text-lg">📊</span>
              </div>
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Resources</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400">
                <span className="text-lg">📊</span>
              </div>
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Distributions</p>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}