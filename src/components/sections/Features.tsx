import FeatureSteps from '@/components/feature-steps'
import {
  Layers,
  Sparkles,
  Building2,
  Bot,
  FileSearch,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Automatyczne dopasowanie',
    content:
      'System analizuje kwoty, numery faktur w tytułach przelewów, nazwy kontrahentów i NIP-y. 90% płatności dopasowuje automatycznie.',
  },
  {
    icon: Layers,
    title: 'Płatności zbiorcze',
    content:
      'Klient płaci jednym przelewem za kilka faktur? Spinka to rozpozna i prawidłowo rozdzieli płatność.',
  },
  {
    icon: FileSearch,
    title: 'Dopasowanie bez wskazań',
    content:
      'Nawet gdy tytuł przelewu nie zawiera numeru faktury, algorytm dopasuje płatność po kwocie, dacie i kontrahenta.',
  },
  {
    icon: Building2,
    title: 'Multi-firma',
    content:
      'Zarządzaj rozliczeniami wielu firm z jednego konta. Każda firma ma oddzielne faktury i wyciągi.',
  },
  {
    icon: Bot,
    title: 'Asystent AI',
    content:
      'Wbudowany asystent AI pomaga w zarządzaniu fakturami, odpowiada na pytania i podpowiada rozwiązania.',
  },
  {
    icon: Sparkles,
    title: 'Integracja z Fakturownią',
    content:
      'Automatyczny import faktur z Fakturownia.pl i aktualizacja statusów płatności jednym kliknięciem.',
  },
]

export function Features() {
  return (
    <FeatureSteps
      features={features}
      title="Funkcjonalności, które robią różnicę"
      subtitle="Spinka oferuje zaawansowane algorytmy dopasowywania, które sprawdzają się tam, gdzie inne systemy zawodzą."
      autoPlayInterval={5000}
    />
  )
}
