import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Mail, Building2 } from 'lucide-react'
import { appUrl } from '@/lib/config'

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Odzyskaj swój czas
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Zacznij dopasowywać faktury automatycznie już dziś.
            <br />
            Bez karty kredytowej, bez zobowiązań.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8" asChild>
              <a href={appUrl('/register')}>
                Wypróbuj za darmo
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:info@spinka.studio">Porozmawiaj z nami</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo i opis */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/spinka-logo.png"
                alt="Spinka"
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm text-gray-600">
              Automatyczne dopasowywanie faktur do płatności bankowych.
              Oszczędź czas i wyeliminuj ręczne rozliczenia.
            </p>
          </div>

          {/* Nawigacja */}
          <div>
            <h3 className="font-semibold text-gray-900">Nawigacja</h3>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
              <a href="#features" className="hover:text-gray-900">
                Funkcje
              </a>
              <a href="#pricing" className="hover:text-gray-900">
                Cennik
              </a>
              <a href="#faq" className="hover:text-gray-900">
                FAQ
              </a>
              <a href={appUrl('/login')} className="hover:text-gray-900">
                Zaloguj się
              </a>
            </nav>
          </div>

          {/* Prawne */}
          <div>
            <h3 className="font-semibold text-gray-900">Prawne</h3>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
              <a href="/privacy" className="hover:text-gray-900">
                Polityka prywatności
              </a>
              <a href="/terms" className="hover:text-gray-900">
                Regulamin
              </a>
            </nav>
          </div>
        </div>

        {/* Dane spółki */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                <Building2 className="h-4 w-4" />
                Dane spółki
              </h3>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p className="font-medium">Perfectinfo Sp. z o.o.</p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  ul. Ząbkowska 31, 03-736 Warszawa
                </p>
                <p>NIP: 522-37-98-042</p>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-semibold text-gray-900">
                <Mail className="h-4 w-4" />
                Kontakt
              </h3>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p>
                  <a
                    href="mailto:info@spinka.studio"
                    className="hover:text-gray-900"
                  >
                    info@spinka.studio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Spinka by Perfectinfo Sp. z o.o. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  )
}
