import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Jak działa automatyczne dopasowywanie płatności?',
    answer:
      'Spinka analizuje kilka czynników: kwotę przelewu, numer faktury w tytule, nazwę kontrahenta, NIP oraz datę płatności. Algorytm przypisuje wagi każdemu z tych czynników i oblicza prawdopodobieństwo dopasowania. Płatności z pewnością powyżej 85% są dopasowywane automatycznie, pozostałe trafiają do sugestii do ręcznej weryfikacji.',
  },
  {
    question: 'Klienci płacą mi zbiorczo za kilka faktur — czy Spinka to obsłuży?',
    answer:
      'Tak! Spinka posiada funkcję dopasowania jednej płatności do wielu faktur. Gdy kwota przelewu odpowiada sumie kilku faktur od tego samego kontrahenta, system automatycznie zaproponuje dopasowanie grupowe. Możesz je zatwierdzić jednym kliknięciem.',
  },
  {
    question: 'Czy Spinka obsługuje mój bank?',
    answer:
      'Najprawdopodobniej tak! Obsługujemy wyciągi z: mBank (korporacyjny i MŚP), ING Bank, Pekao SA, Santander oraz uniwersalny format MT940 i CSV. Jeśli Twojego banku nie ma na liście, możemy go dodać w ciągu 1-2 dni. Wyślij nam przykładowy wyciąg z minimum 10 pozycjami (kwoty możesz zanonimizować), a w zamian otrzymasz 3 miesiące bezpłatnego dostępu do systemu.',
  },
  {
    question: 'Kto może korzystać ze Spinki w mojej firmie?',
    answer:
      'Dostęp do Spinki może mieć każdy Twój pracownik. Wystarczy utworzyć konto i dodać go do firmy. System zarządzania rolami i uprawnieniami (np. tylko podgląd, pełna edycja) jest obecnie w przygotowaniu.',
  },
  {
    question: 'Czy Spinka może aktualizować statusy w moim systemie fakturowym?',
    answer:
      'Tak! Spinka integruje się z Fakturownią i może zmieniać status faktury na "opłacona" po potwierdzeniu dopasowania. W przyszłości planujemy integracje z kolejnymi systemami. Ważne: każda zmiana wymaga Twojego zatwierdzenia — Spinka nic nie zrobi automatycznie bez Twojej zgody.',
  },
  {
    question: 'Czy Spinka może coś zmienić w moim systemie fakturowym bez mojej wiedzy?',
    answer:
      'Nie. Spinka nigdy nie wprowadza zmian w systemie fakturowym bez Twojej wyraźnej zgody. Każdą aktualizację statusu musisz ręcznie zatwierdzić. Masz pełną kontrolę nad tym, co się dzieje z Twoimi danymi.',
  },
  {
    question: 'Czy moje dane są bezpieczne?',
    answer:
      'Tak. Wszystkie dane są szyfrowane w tranzycie (TLS 1.3) i w spoczynku. Stosujemy izolację danych między firmami (Row Level Security). Nie mamy dostępu do Twoich danych księgowych — przetwarzanie odbywa się automatycznie w bezpiecznym środowisku.',
  },
  {
    question: 'Czy mogę wypróbować Spinkę za darmo?',
    answer:
      'Tak! Plan darmowy pozwala na przetworzenie do 50 faktur miesięcznie bez żadnych opłat i bez podawania karty kredytowej. To wystarczy, żeby przekonać się o skuteczności algorytmu na Twoich rzeczywistych danych.',
  },
  {
    question: 'Jak szybko zobaczę efekty?',
    answer:
      'Od razu. Import faktur z Fakturowni trwa kilka sekund, podobnie jak wgranie wyciągu bankowego. Pierwsze automatyczne dopasowania zobaczysz w ciągu minuty od importu danych. Nasi klienci raportują, że czas rozliczeń skraca się z dni do godzin już w pierwszym miesiącu.',
  },
  {
    question: 'Co jeśli algorytm źle dopasuje fakturę?',
    answer:
      'Możesz łatwo cofnąć błędne dopasowanie jednym kliknięciem. Dodatkowo Spinka uczy się na Twoich korektach — z czasem algorytm staje się coraz bardziej precyzyjny dla Twoich kontrahentów i wzorców płatności.',
  },
  {
    question: 'Jak działa asystent AI?',
    answer:
      'Asystent AI pomaga w zarządzaniu fakturami — możesz go zapytać o status płatności, poprosić o podsumowanie zaległości, czy wyjaśnienie dlaczego dane dopasowanie zostało zaproponowane. Jest dostępny w planach Standard i Premium.',
  },
  {
    question: 'Czy mogę używać Spinki dla wielu firm?',
    answer:
      'Tak! Plan Premium Multi-Firma pozwala na zarządzanie rozliczeniami do 10 firm z jednego konta. Każda firma ma oddzielne faktury i wyciągi, ale możesz łatwo przełączać się między nimi. To idealne rozwiązanie dla biur rachunkowych i grup kapitałowych.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Często zadawane pytania
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Odpowiedzi na najczęstsze pytania o Spinkę
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
