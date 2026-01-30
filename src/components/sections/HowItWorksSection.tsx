import HowItWorks from '@/components/how-it-works'
import type { Step } from '@/components/how-it-works'

const steps: Step[] = [
  {
    title: 'Wrzuć faktury',
    description:
      'Zaimportuj faktury z pliku (CSV, XML, MT940) lub bezpośrednio z systemu fakturowego (Fakturownia, Comarch, Optima i inne).',
    colorTheme: 'blue',
  },
  {
    title: 'Wrzuć wyciągi bankowe',
    description:
      'Załaduj wyciągi z dowolnego banku — mBank, ING, PKO BP, Santander i inne. Obsługujemy formaty CSV i MT940.',
    colorTheme: 'orange',
  },
  {
    title: 'System szuka dopasowań',
    description:
      'Algorytm analizuje kwoty, numery faktur, nazwy kontrahentów i NIP-y. Automatycznie dopasowuje płatności do faktur.',
    colorTheme: 'purple',
  },
  {
    title: 'Otrzymujesz raport',
    description:
      'Zobacz które faktury zostały opłacone, a które są przeterminowane. Eksportuj listę zaległości jednym kliknięciem.',
    colorTheme: 'blue',
  },
  {
    title: 'Aktualizuj statusy',
    description:
      'Automatycznie zmień statusy płatności w swoim systemie fakturowym. Koniec z ręcznym klikaniem!',
    colorTheme: 'orange',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <div className="text-center pt-20">
        <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          Jak to działa?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          5 prostych kroków do automatyzacji rozliczeń
        </p>
      </div>
      <HowItWorks features={steps} className="bg-white" />
    </section>
  )
}
