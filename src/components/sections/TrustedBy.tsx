import { motion } from 'framer-motion'
import { Carousel } from '@/components/carousel'

const companyLogos = [
  { image: '/logos/acte.png', name: 'ACTE' },
  { image: '/logos/adawards.png', name: 'AD Awards' },
  { image: '/logos/base-group.png', name: 'Base Group' },
  { image: '/logos/cityboard-150x107.png', name: 'Cityboard' },
  { image: '/logos/CUL.png', name: 'CUL' },
  { image: '/logos/designlight.png', name: 'Design Light' },
  { image: '/logos/herocoders.png', name: 'Hero Coders' },
  { image: '/logos/lenny-lamb.png', name: 'Lenny Lamb' },
  { image: '/logos/motocars.png', name: 'Motocars' },
  { image: '/logos/ore.gif', name: 'ORE' },
  { image: '/logos/platforma-mieszkaniowa.png', name: 'Platforma Mieszkaniowa' },
  { image: '/logos/sdp.gif', name: 'SDP' },
  { image: '/logos/sfd.gif', name: 'SFD' },
  { image: '/logos/statscore.png', name: 'Statscore' },
  { image: '/logos/stropy-malro.png', name: 'Stropy Malro' },
  { image: '/logos/swm.png', name: 'SWM' },
  { image: '/logos/thestory.png', name: 'The Story' },
  { image: '/logos/topsil.png', name: 'Topsil' },
  { image: '/logos/ukubusia.png', name: 'U Kubusia' },
  { image: '/logos/wnetfm.png', name: 'WNET FM' },
  { image: '/logos/xray-150x107.png', name: 'X-Ray' },
]

export function TrustedBy() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50/50 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Zaufali nam
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Ponad 200 firm wybrało współpracę z Perfectinfo Sp. z o.o. (twórcą Spinki)
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            items={companyLogos}
            cardWidth={240}
            cardHeight={140}
            interval={1750}
            rotationAngle={25}
          />
        </motion.div>

        {/* Logo grid for mobile/fallback */}
        <motion.div
          className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {companyLogos.slice(0, 8).map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm"
            >
              <img
                src={company.image}
                alt={company.name}
                className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
