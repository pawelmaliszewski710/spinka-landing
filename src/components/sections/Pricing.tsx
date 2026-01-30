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
    description: 'Dla małych i średnich firm',
    monthlyPrice: '140',
    yearlyPrice: '1400',
    currency: 'PLN ',
    buttonText: 'Wybierz Standard',
    highlight: true,
    disabled: true,
    disabledMessage: 'Uruchomienie produkcyjne w ciągu tygodnia',
    features: [
      { name: 'Bez limitu faktur', icon: 'check' },
      { name: 'Import faktur z Fakturowni', icon: 'check' },
      { name: 'Import wyciągów bankowych', icon: 'check' },
      { name: 'Automatyczne dopasowanie', icon: 'check' },
      { name: 'Do 3 firm', icon: 'check' },
      { name: 'Asystent AI', icon: 'check' },
      { name: 'Priorytetowe wsparcie', icon: 'check' },
    ],
  },
  {
    id: 'premium',
    title: 'Premium Multi-Firma',
    description: 'Dla biur rachunkowych i holdingów',
    monthlyPrice: '200',
    yearlyPrice: '2000',
    currency: 'PLN ',
    buttonText: 'Wybierz Premium',
    highlight: false,
    disabled: true,
    disabledMessage: 'Uruchomienie produkcyjne w ciągu tygodnia',
    features: [
      { name: 'Bez limitu faktur', icon: 'check' },
      { name: 'Import faktur z Fakturowni', icon: 'check' },
      { name: 'Import wyciągów bankowych', icon: 'check' },
      { name: 'Automatyczne dopasowanie', icon: 'check' },
      { name: 'Do 10 firm', icon: 'check' },
      { name: 'Asystent AI', icon: 'check' },
      { name: 'Dedykowane wsparcie', icon: 'check' },
      { name: 'Własne integracje na życzenie', icon: 'check' },
    ],
  },
]

export function Pricing() {
  const handlePlanSelect = (planId: string) => {
    // Redirect to registration page
    window.location.href = appUrl(`/register?plan=${planId}`)
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
