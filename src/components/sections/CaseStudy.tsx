import { motion } from 'framer-motion'
import { Star, TrendingUp, Clock } from 'lucide-react'

const testimonials = [
  {
    quote: `Przed Spinką, dopasowywanie płatności do faktur zajmowało nam 4-5 dni w miesiącu. System fakturowy automatycznie dopasowywał około 20-30% płatności, resztę musieliśmy klikać ręcznie.

Teraz to dosłownie 2 godziny — Spinka automatycznie rozpoznaje nawet te płatności, które nie mają numeru faktury w tytule przelewu.`,
    company: 'Perfectinfo Sp. z o.o.',
    logo: '/sprawdzone/Perfectinfo.png',
    since: '2024',
    stats: {
      before: '4-5 dni',
      after: '2 godziny',
      autoMatch: '90%+',
    },
  },
  {
    quote: `Obsługujemy kilkaset faktur miesięcznie i ręczne dopasowywanie było koszmarem. Spinka zintegrowała się z naszym bankiem w kilka minut i od razu zaczęła działać.

Najlepsze jest to, że system uczy się na naszych korektach — po miesiącu praktycznie nie musimy nic poprawiać.`,
    company: 'Be Awesome Sp. z o.o.',
    logo: '/sprawdzone/be Awesome-01.jpg',
    since: '2024',
    stats: {
      before: '3 dni',
      after: '1 godzina',
      autoMatch: '95%+',
    },
  },
  {
    quote: `W branży medycznej precyzja jest kluczowa. Spinka nie tylko oszczędza nam czas, ale też eliminuje błędy przy rozliczeniach z pacjentami i ubezpieczycielami.

System świetnie radzi sobie z różnymi formatami przelewów i płatnościami częściowymi.`,
    company: 'Vip-Dent (KSKJ Sp. z o.o.)',
    logo: '/sprawdzone/vip-dent-logo (1).png',
    since: '2024',
    stats: {
      before: '2 dni',
      after: '30 minut',
      autoMatch: '92%+',
    },
  },
]

export function CaseStudy() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 mb-4">
            <Star className="h-4 w-4 fill-green-500" />
            Sprawdzone w praktyce
          </div>
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Co mówią nasi klienci
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Zobacz jak Spinka pomaga realnym firmom oszczędzać czas i eliminować błędy
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="group"
            >
              <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:border-blue-200">
                {/* Company Logo */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 flex items-center">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="max-h-12 max-w-[140px] object-contain"
                    />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>

                {/* Company Info */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="font-semibold text-gray-900">
                    {testimonial.company}
                  </div>
                  <div className="text-sm text-gray-500">
                    Klient od {testimonial.since}
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-red-50 p-3 text-center">
                    <Clock className="h-4 w-4 mx-auto text-red-500 mb-1" />
                    <div className="text-sm font-bold text-red-600">
                      {testimonial.stats.before}
                    </div>
                    <div className="text-xs text-red-500">przed</div>
                  </div>
                  <div className="rounded-xl bg-green-50 p-3 text-center">
                    <TrendingUp className="h-4 w-4 mx-auto text-green-500 mb-1" />
                    <div className="text-sm font-bold text-green-600">
                      {testimonial.stats.after}
                    </div>
                    <div className="text-xs text-green-500">teraz</div>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-3 text-center">
                    <Star className="h-4 w-4 mx-auto text-blue-500 mb-1" />
                    <div className="text-sm font-bold text-blue-600">
                      {testimonial.stats.autoMatch}
                    </div>
                    <div className="text-xs text-blue-500">auto</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
