import type { ComponentType } from 'react'
import { ArrowRight, Mic, Paperclip, Search } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { cn } from '../../lib/utils'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-transparent bg-grid-soft bg-[length:56px_56px] bg-center">
      <div className="absolute inset-0 -z-10 bg-[#EDF1FC]" />
      <div className="container relative flex flex-col gap-12 py-16 sm:py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="flex flex-col gap-8">
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
            <div>
              <Button className="rounded-full px-7 py-5 text-base shadow-subtle">
                Lorem ipsum
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[36px] border border-white/60 bg-white/90 p-8 shadow-elevated backdrop-blur-sm">
            <SegmentedControl />
            <HeroSearchCard />
          </div>
        </div>
      </div>
    </section>
  )
}

function SegmentedControl() {
  const segments = ['Explore', 'Research']
  return (
    <div className="inline-flex w-full items-center justify-between rounded-full border border-muted bg-muted/40 p-1 text-sm font-semibold text-muted-foreground shadow-inner-smooth sm:w-auto">
      {segments.map((segment, index) => (
        <button
          key={segment}
          type="button"
          className={cn(
            'flex-1 rounded-full px-6 py-2 transition-all',
            index === 0
              ? 'bg-primary text-primary-foreground shadow-subtle'
              : 'hover:text-primary',
          )}
        >
          {segment}
        </button>
      ))}
    </div>
  )
}

function HeroSearchCard() {
  return (
    <div className="space-y-6 rounded-[28px] border border-muted bg-white/95 p-6 shadow-elevated">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" />
          <Input
            placeholder="What do you want know ?"
            aria-label="Search BrightQuery"
            className="h-14 rounded-2xl border border-muted bg-white pl-12 pr-6 text-base shadow-inner-smooth placeholder:text-muted-foreground/80"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ToolButton icon={Paperclip} label="Attach" />
            <ToolButton icon={Mic} label="Voice" />
          </div>
          <Button
            size="icon"
            className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground shadow-subtle"
            aria-label="Submit"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </div>
  )
}

interface ToolButtonProps {
  icon: ComponentType<{ className?: string }>
  label: string
}

function ToolButton({ icon: Icon, label }: ToolButtonProps) {
  return (
    <button
      type="button"
      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-muted bg-white text-muted-foreground shadow-subtle transition hover:text-primary"
      aria-label={label}
    >
      <Icon className="h-5 w-5" strokeWidth={2.5} />
    </button>
  )
}
