import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const integrations = [
  {
    name: 'Fakturownia',
    type: 'Faktury',
    available: true,
    logo: '/integracje/fakturownia-logo.svg',
  },
  {
    name: 'mBank',
    type: 'Bank',
    available: true,
    logo: '/integracje/mbank.png',
  },
  {
    name: 'mBank Company',
    type: 'Bank korporacyjny',
    available: true,
    logo: '/integracje/mbankcompany-logo.svg',
  },
  {
    name: 'Pekao SA',
    type: 'Bank',
    available: true,
    logo: '/integracje/logo-white pekao SA.svg',
    bgDark: true,
  },
  {
    name: 'CSV',
    type: 'Format uniwersalny',
    available: true,
    logo: '/integracje/csv.jpg',
  },
  {
    name: 'MT940',
    type: 'Format bankowy',
    available: true,
    logo: '/integracje/mt940.jpg',
  },
  {
    name: 'Inne banki',
    type: 'Na życzenie',
    available: false,
    logo: null,
  },
]

export function Integrations() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Integracje
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Spinka łączy się z popularnymi systemami fakturowania i bankami.
            <br />
            Nowe integracje dodajemy na życzenie.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                className={`flex items-center gap-4 rounded-xl border px-5 py-4 min-w-[200px] ${
                  integration.available
                    ? 'border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow'
                    : 'border-dashed border-gray-300 bg-gray-50'
                }`}
              >
                {integration.logo ? (
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg overflow-hidden ${
                      integration.bgDark ? 'bg-gray-900 p-2' : 'bg-white'
                    }`}
                  >
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="max-h-10 max-w-10 object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-400 text-lg font-bold">
                    ?
                  </div>
                )}
                <div>
                  <div className="font-medium text-gray-900">{integration.name}</div>
                  <div className="text-sm text-gray-500">{integration.type}</div>
                </div>
                {!integration.available && (
                  <Badge variant="secondary" className="ml-2">
                    Wkrótce
                  </Badge>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Potrzebujesz integracji z innym bankiem lub systemem?{' '}
          <a href="mailto:kontakt@spinka.pl" className="font-medium text-blue-600 hover:underline">
            Napisz do nas
          </a>
        </motion.p>
      </div>
    </section>
  )
}
