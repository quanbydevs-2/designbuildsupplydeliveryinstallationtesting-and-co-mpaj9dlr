export function BreakpointIndicator() {
  if (process.env.NODE_ENV === "production") return null
  return (
    <div className="fixed bottom-1 left-1 z-50 rounded bg-black/80 px-2 py-0.5 text-xs text-white">
      <span className="sm:hidden">xs</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline">xl</span>
    </div>
  )
}