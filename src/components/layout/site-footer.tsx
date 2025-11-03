export function SiteFooter() {
  return (
    <footer className="border-t border-transparent bg-midnight text-sm text-muted-foreground">
      <div className="container flex flex-col gap-4 px-6 py-8 text-slate-200 md:flex-row md:items-center md:justify-between">
        <span className="font-medium">
          BrightQuery, Inc. | All rights reserved © 2025
        </span>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="transition-colors hover:text-white">
            Terms &amp; Conditions
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Privacy policy
          </a>
        </nav>
      </div>
    </footer>
  )
}
