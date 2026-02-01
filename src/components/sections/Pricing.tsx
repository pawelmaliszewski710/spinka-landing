import { PricingTableOne } from '@/components/billingsdk/pricing-table-one'
import type { Plan } from '@/lib/billingsdk-config'
import { appUrl } from '@/lib/config'

const plans: Plan[] = [
  {
    id: 'free',
    title: 'Darmowy',
    description: 'Idealny do przetestowania systemu',
    monthlyPrice: '0',
    yearlyPrice: '0',
    currency: '',
    buttonText: 'Rozpocznij za darmo',
    highlight: false,
    features: [
      { name: 'Do 50 faktur miesięcznie', icon: 'check' },
      { name: 'Import faktur z Fakturowni', icon: 'check' },
      { name: 'Import wyciągów bankowych', icon: 'check' },
      { name: 'Automatyczne dopasowanie', icon: 'check' },
      { name: '1 firma', icon: 'check' },
    ],
  },
  {
    id: 'standard',
    title: 'Standard',
    description: 'Dla freelancerów i małych firm',
    monthlyPrice: '99',
    yearlyPrice: '990',
    currency: 'PLN ',
    buttonText: 'Wybierz Standard',
    highlight: true,
    badge: 'Najpopularniejszy',
    stripePriceIdMonthly: import.meta.env.VITE_STRIPE_PRICE_STANDARD_MONTHLY,
    stripePriceIdYearly: import.meta.env.VITE_STRIPE_PRICE_STANDARD_YEARLY,
    features: [
      { name: 'Do 100 faktur miesięcznie', icon: 'check' },
      { name: 'Import faktur z Fakturowni', icon: 'check' },
      { name: 'Import wyciągów bankowych', icon: 'check' },
      { name: 'Automatyczne dopasowanie', icon: 'check' },
      { name: '1 firma', icon: 'check' },
      { name: 'Asystent AI', icon: 'check' },
      { name: 'Priorytetowe wsparcie email', icon: 'check' },
    ],
  },
  {
    id: 'multi',
    title: 'Multi-Firma',
    description: 'Dla właścicieli kilku firm',
    monthlyPrice: '199',
    yearlyPrice: '1990',
    currency: 'PLN ',
    buttonText: 'Wybierz Multi-Firma',
    highlight: false,
    stripePriceIdMonthly: import.meta.env.VITE_STRIPE_PRICE_MULTI_MONTHLY,
    stripePriceIdYearly: import.meta.env.VITE_STRIPE_PRICE_MULTI_YEARLY,
    features: [
      { name: 'Bez limitu faktur', icon: 'check', iconColor: 'text-green-500' },
      { name: 'Import faktur z Fakturowni', icon: 'check' },
      { name: 'Import wyciągów bankowych', icon: 'check' },
      { name: 'Automatyczne dopasowanie', icon: 'check' },
      { name: 'Do 3 firm', icon: 'check', iconColor: 'text-blue-500' },
      { name: 'Asystent AI', icon: 'check' },
      { name: 'Priorytetowe wsparcie', icon: 'check' },
    ],
  },
  {
    id: 'enterprise',
    title: 'Biuro Rachunkowe',
    description: 'Dla biur rachunkowych i dużych organizacji',
    monthlyPrice: '499',
    yearlyPrice: '4990',
    currency: 'PLN ',
    buttonText: 'Wybierz Enterprise',
    highlight: false,
    badge: 'Dla profesjonalistów',
    stripePriceIdMonthly: import.meta.env.VITE_STRIPE_PRICE_ENTERPRISE_MONTHLY,
    stripePriceIdYearly: import.meta.env.VITE_STRIPE_PRICE_ENTERPRISE_YEARLY,
    features: [
      { name: 'Bez limitu faktur', icon: 'check', iconColor: 'text-green-500' },
      { name: 'Import faktur z Fakturowni', icon: 'check' },
      { name: 'Import wyciągów bankowych', icon: 'check' },
      { name: 'Automatyczne dopasowanie', icon: 'check' },
      { name: 'Bez limitu firm', icon: 'check', iconColor: 'text-purple-500' },
      { name: 'Asystent AI zaawansowany', icon: 'check' },
      { name: 'Dedykowany opiekun Klienta', icon: 'check', iconColor: 'text-amber-500' },
      { name: 'Własne integracje na życzenie', icon: 'check' },
      { name: 'SLA 99.9% uptime', icon: 'check' },
    ],
  },
]

export function Pricing() {
  const handlePlanSelect = (planId: string) => {
    // Find the plan to get the price ID
    const plan = plans.find((p) => p.id === planId)

    // For free plan, redirect to registration without price
    if (planId === 'free' || !plan?.stripePriceIdMonthly) {
      window.location.href = appUrl(`/register?plan=${planId}`)
      return
    }

    // For paid plans, redirect to registration with plan and price info
    // Stripe checkout will be triggered after registration
    const priceId = plan.stripePriceIdMonthly
    window.location.href = appUrl(`/register?plan=${planId}&price=${priceId}`)
  }

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <PricingTableOne
        plans={plans}
        title="Prosty cennik"
        description="Wybierz plan dopasowany do wielkości Twojej firmy. Wszystkie ceny są cenami netto."
        onPlanSelect={handlePlanSelect}
        theme="classic"
        size="medium"
      />
    </section>
  )
}
