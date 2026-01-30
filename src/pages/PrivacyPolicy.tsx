import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Powrót do strony głównej
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Polityka Prywatności
          </h1>
          <p className="mt-4 text-gray-600">
            Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
          </p>

          <div className="prose prose-gray mt-12 max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                1. Administrator Danych
              </h2>
              <p className="mt-4 text-gray-700">
                Administratorem Twoich danych osobowych jest:
              </p>
              <div className="mt-4 rounded-lg bg-gray-50 p-6">
                <p className="font-semibold text-gray-900">
                  Perfectinfo Sp. z o.o.
                </p>
                <p className="mt-2 text-gray-700">ul. Ząbkowska 31</p>
                <p className="text-gray-700">03-736 Warszawa</p>
                <p className="mt-2 text-gray-700">NIP: 522-37-98-042</p>
                <p className="mt-2 text-gray-700">
                  E-mail:{' '}
                  <a
                    href="mailto:info@spinka.studio"
                    className="text-blue-600 hover:underline"
                  >
                    info@spinka.studio
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                2. Zakres zbieranych danych
              </h2>
              <p className="mt-4 text-gray-700">
                W ramach korzystania z serwisu Spinka możemy zbierać następujące
                dane:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Adres e-mail (przy rejestracji i logowaniu)</li>
                <li>Dane firmowe (nazwa firmy, NIP)</li>
                <li>
                  Dane z importowanych faktur i wyciągów bankowych (przetwarzane
                  wyłącznie w celu świadczenia usługi)
                </li>
                <li>Dane techniczne (adres IP, typ przeglądarki)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                3. Cel przetwarzania danych
              </h2>
              <p className="mt-4 text-gray-700">Twoje dane przetwarzamy w celu:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  Świadczenia usługi automatycznego dopasowywania faktur do
                  płatności
                </li>
                <li>Obsługi konta użytkownika</li>
                <li>Komunikacji z użytkownikami (wsparcie techniczne)</li>
                <li>Rozliczeń i fakturowania</li>
                <li>
                  Poprawy jakości usług i analizy statystycznej (w formie
                  zanonimizowanej)
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                4. Pliki cookies
              </h2>
              <p className="mt-4 text-gray-700">
                Serwis Spinka wykorzystuje pliki cookies w następujących celach:
              </p>

              <div className="mt-6 space-y-6">
                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900">
                    Cookies niezbędne (wymagane)
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Są konieczne do prawidłowego działania serwisu. Umożliwiają
                    logowanie, przechowywanie sesji użytkownika i zapewniają
                    bezpieczeństwo.
                  </p>
                  <ul className="mt-3 list-disc pl-6 text-sm text-gray-600">
                    <li>
                      <strong>sb-*-auth-token</strong> - token autoryzacji
                      Supabase
                    </li>
                    <li>
                      <strong>sb-*-auth-token-code-verifier</strong> - weryfikacja
                      sesji
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900">
                    Cookies funkcjonalne
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Pozwalają zapamiętać preferencje użytkownika, takie jak
                    wybrany motyw (jasny/ciemny) czy ustawienia wyświetlania.
                  </p>
                  <ul className="mt-3 list-disc pl-6 text-sm text-gray-600">
                    <li>
                      <strong>theme</strong> - preferencja motywu kolorystycznego
                    </li>
                    <li>
                      <strong>sidebar-state</strong> - stan panelu bocznego
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900">
                    Cookies analityczne (opcjonalne)
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają z
                    serwisu. Dane są anonimizowane i służą wyłącznie do poprawy
                    jakości usług.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Obecnie nie używamy zewnętrznych narzędzi analitycznych. W
                    przypadku ich wprowadzenia, poinformujemy o tym użytkowników.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-700">
                Możesz zarządzać plikami cookies w ustawieniach swojej
                przeglądarki. Wyłączenie cookies niezbędnych może uniemożliwić
                korzystanie z niektórych funkcji serwisu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                5. Bezpieczeństwo danych
              </h2>
              <p className="mt-4 text-gray-700">
                Stosujemy odpowiednie środki techniczne i organizacyjne w celu
                ochrony Twoich danych:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Szyfrowanie połączenia (SSL/TLS)</li>
                <li>Szyfrowanie danych w bazie danych</li>
                <li>
                  Kontrola dostępu (Row Level Security) - każdy użytkownik ma
                  dostęp tylko do swoich danych
                </li>
                <li>Regularne kopie zapasowe</li>
                <li>Hosting na serwerach spełniających normy RODO (Supabase)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                6. Twoje prawa
              </h2>
              <p className="mt-4 text-gray-700">
                Zgodnie z RODO, przysługują Ci następujące prawa:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Prawo dostępu do swoich danych</li>
                <li>Prawo do sprostowania danych</li>
                <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
                <li>Prawo do ograniczenia przetwarzania</li>
                <li>Prawo do przenoszenia danych</li>
                <li>Prawo do sprzeciwu wobec przetwarzania</li>
              </ul>
              <p className="mt-4 text-gray-700">
                Aby skorzystać z tych praw, skontaktuj się z nami pod adresem:{' '}
                <a
                  href="mailto:info@spinka.studio"
                  className="text-blue-600 hover:underline"
                >
                  info@spinka.studio
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                7. Okres przechowywania danych
              </h2>
              <p className="mt-4 text-gray-700">
                Twoje dane przechowujemy przez okres:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>
                  Dane konta - do momentu usunięcia konta przez użytkownika
                </li>
                <li>
                  Dane faktur i płatności - przez okres wymagany przepisami
                  podatkowymi (min. 5 lat)
                </li>
                <li>
                  Logi techniczne - maksymalnie 90 dni (w celach bezpieczeństwa)
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                8. Zmiany w polityce prywatności
              </h2>
              <p className="mt-4 text-gray-700">
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej
                Polityce Prywatności. O istotnych zmianach poinformujemy
                użytkowników drogą mailową lub poprzez komunikat w serwisie.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900">
                9. Kontakt
              </h2>
              <p className="mt-4 text-gray-700">
                W przypadku pytań dotyczących przetwarzania danych osobowych,
                prosimy o kontakt:
              </p>
              <div className="mt-4 rounded-lg bg-gray-50 p-6">
                <p className="text-gray-700">
                  <strong>E-mail:</strong>{' '}
                  <a
                    href="mailto:info@spinka.studio"
                    className="text-blue-600 hover:underline"
                  >
                    info@spinka.studio
                  </a>
                </p>
                <p className="mt-2 text-gray-700">
                  <strong>Adres:</strong> Perfectinfo Sp. z o.o., ul. Ząbkowska
                  31, 03-736 Warszawa
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
