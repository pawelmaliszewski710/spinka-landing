import { motion } from 'framer-motion'
import { StatsCards } from '@/components/stats-cards'

const statsCards = [
  {
    value: '90%+',
    label: 'Skuteczność dopasowań',
    description: 'Automatycznie rozpoznanych płatności bez ręcznej interwencji.',
    color: 'blue' as const,
    rotate: -4,
  },
  {
    value: '5 dni → 2h',
    label: 'Oszczędność czasu',
    description: 'Miesięczna praca z rozliczeniami skrócona do minimum.',
    color: 'green' as const,
    rotate: 2,
  },
  {
    value: '3x',
    label: 'Więcej niż konkurencja',
    description: 'W porównaniu do 20-30% skuteczności u innych systemów.',
    color: 'orange' as const,
    rotate: -2,
  },
]

export function Stats() {
  return (
    <section className="border-y border-gray-100 bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            Z 5 dni do 2 godzin
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Tyle czasu oszczędzasz miesięcznie na dopasowywaniu płatności
          </p>
          <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto">
            Dla firm wystawiających regularnie faktury swoim Klientom (min. 10 miesięcznie),
            które tracą czas na ręczną weryfikację płatności lub których obecny system
            fakturowy ma słabą skuteczność automatycznych dopasowań.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <StatsCards cards={statsCards} />
        </motion.div>
      </div>
    </section>
  )
}
