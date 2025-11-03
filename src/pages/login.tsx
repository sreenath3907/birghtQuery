import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'

export function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden border-b border-transparent bg-grid-soft">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/80 to-transparent" />
          <div className="container grid items-center gap-12 py-6 sm:py-20 md:grid-cols-2 md:py-16 lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] text-midnight sm:text-5xl">
                  Lorem ipsum dolor sit amet, consectetuer adip iscing elit.
                  Aenean
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetuer adip iscing elit.
                  Aenean
                </p>
              </div>
              <Button className="rounded-full px-7 py-5 text-base shadow-subtle">
                Lorem ipsum
              </Button>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-[32px] border border-transparent bg-white/90 p-4 shadow-elevated backdrop-blur sm:max-w-md sm:p-9">
                <div className="space-y-7">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-midnight">
                      Login
                    </h2>
                  </div>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-midnight"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="h-12 rounded-full border-muted bg-white px-5 text-sm shadow-inner-smooth placeholder:text-muted-foreground/70"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-midnight"
                      >
                        Password
                      </label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="h-12 rounded-full border-muted bg-white px-5 text-sm shadow-inner-smooth placeholder:text-muted-foreground/70"
                      />
                    </div>
                    <Button className="h-12 rounded-full text-base shadow-subtle">
                      Login
                    </Button>
                  </form>
                  <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{' '}
                    <Link
                      to="#"
                      className="font-semibold text-primary hover:text-primary/80"
                    >
                      Sign Up
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
                    <span className="h-px flex-1 bg-muted" />
                    OR
                    <span className="h-px flex-1 bg-muted" />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-12 w-full rounded-full border border-muted bg-white text-sm font-semibold text-midnight shadow-inner-smooth hover:bg-muted/40"
                  >
                    <GoogleIcon className="mr-3 h-5 w-5" />
                    Continue with Google
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

interface GoogleIconProps {
  className?: string
}

function GoogleIcon({ className }: GoogleIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M23.49 12.27c0-.78-.07-1.53-.2-2.27H12v4.3h6.43c-.28 1.47-1.12 2.72-2.38 3.56v2.95h3.85c2.25-2.08 3.59-5.15 3.59-8.54z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.96-1.07 7.95-2.89l-3.85-2.95c-1.07.72-2.45 1.16-4.1 1.16-3.15 0-5.82-2.13-6.77-4.99H1.24v3.14C3.22 21.3 7.27 24 12 24z"
        fill="#34A853"
      />
      <path
        d="M5.23 14.33a7.2 7.2 0 0 1-.38-2.33c0-.81.14-1.6.38-2.33V6.53H1.24A11.99 11.99 0 0 0 0 12c0 1.9.45 3.69 1.24 5.47l3.99-3.14z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.74c1.76 0 3.34.6 4.59 1.79l3.44-3.44C17.95 1.19 15.23 0 12 0 7.27 0 3.22 2.7 1.24 6.53l3.99 3.14c.95-2.86 3.62-4.99 6.77-4.99z"
        fill="#EA4335"
      />
    </svg>
  )
}
