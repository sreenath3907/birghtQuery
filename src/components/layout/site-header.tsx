import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { cn } from '../../lib/utils'

const navigationItems = [
  'Economy',
  'Crime',
  'Government spending',
  'Health',
  'Immigration',
  'About',
  'more',
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-[#EDF1FC] backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link
            to="/"
            className="text-xl font-semibold uppercase tracking-[0.18em] text-foreground"
          >
            LOGO
          </Link>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex"
          >
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className={cn(
                  'transition-colors hover:text-foreground',
                  item === 'Economy' && 'text-foreground',
                )}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-muted bg-card text-muted-foreground shadow-subtle transition hover:text-primary lg:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="h-4 w-4" strokeWidth={2.5} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={2.5} />
            )}
          </button>
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-navy px-6 text-sm font-semibold text-white shadow-subtle transition hover:bg-navy/90 sm:inline-flex"
          >
            <Link to="/login">Login</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-card text-muted-foreground shadow-subtle transition hover:text-primary"
            aria-label="Search"
          >
            <Search className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
      <div
        className={cn(
          'border-t border-transparent bg-background/95 text-sm font-medium text-muted-foreground lg:hidden',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          'transition-all duration-200 ease-out overflow-hidden',
        )}
      >
        <nav aria-label="Primary mobile" className="px-6 pb-4 pt-3">
          <div className="grid gap-3">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className={cn(
                  'rounded-full px-4 py-2 transition-colors hover:bg-muted/60 hover:text-foreground',
                  item === 'Economy' && 'text-foreground',
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Link
              to="/login"
              className="rounded-full border border-muted px-4 py-2 text-center font-semibold text-foreground transition hover:bg-muted/60 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
