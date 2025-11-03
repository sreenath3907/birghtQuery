import { AlarmClock, ArrowRight, Shield, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const insightCards = [
  {
    title: 'Save time while reducing operating costs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean.',
    gradient: 'from-[#d5bbff] to-[#d5bbff]',
    iconClassName: 'bg-[#c69dff] text-[#3a106f]',
    textClassName: 'text-[#2b1156]',
    icon: AlarmClock,
  },
  {
    title: 'Make smarter decisions, faster-with data',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa. Cum sociis natoque.',
    gradient: 'from-[#065646] to-[#065646]',
    iconClassName: 'bg-[#0c9a82] text-white',
    textClassName: 'text-white',
    icon: TrendingUp,
  },
  {
    title: 'Designed for maximum security and privacy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean.',
    gradient: 'from-[#122789] to-[#122789]',
    iconClassName: 'bg-[#3f5fff] text-white',
    textClassName: 'text-white',
    icon: Shield,
  },
]

export function InsightHighlights() {
  return (
    <section className="relative -mt-12 bg-background pb-20 pt-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          {insightCards.map((card) => (
            <article
              key={card.title}
              className={cn(
                'flex h-full flex-col justify-between rounded-[30px] p-8 shadow-card transition-transform hover:shadow-2xl',
                `bg-gradient-to-br ${card.gradient}`,
              )}
            >
              <div className="flex flex-col gap-6">
                <span
                  className={cn(
                    'mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full text-lg font-semibold',
                    card.iconClassName,
                  )}
                >
                  <card.icon className="h-9 w-9" />
                </span>
                <div className={cn('space-y-3', card.textClassName)}>
                  <h3 className="text-2xl font-semibold leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-base opacity-90">{card.description}</p>
                </div>
              </div>
              <div className="mt-10 flex justify-end">
                <button
                  type="button"
                  className={cn(
                    'flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur transition hover:bg-white/30',
                    card.textClassName.includes('text-white')
                      ? 'text-white'
                      : 'text-[#2b1156]',
                  )}
                  aria-label="View details"
                >
                  <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
