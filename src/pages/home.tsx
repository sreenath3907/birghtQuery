import { HeroSection } from '../components/sections/hero'
import { InsightHighlights } from '../components/sections/insights'
import { SiteFooter } from '../components/layout/site-footer'
import { SiteHeader } from '../components/layout/site-header'

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <InsightHighlights />
      </main>
      <SiteFooter />
    </div>
  )
}
