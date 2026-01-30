import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InteractiveGridBackground } from '@/components/interactive-grid-background'
import TextLoop from '@/components/text-loop'
import { appUrl } from '@/lib/config'

export function Hero() {
  return (
    <InteractiveGridBackground
      className="min-h-[90vh] bg-white"
      gridGap={40}
      dotSize={1.5}
      color="#d4d4d8"
      highlightColor="#3b82f6"
      radius={200}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center pointer-events-auto">
        <div className="mx-auto max-w-4xl text-center py-20">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              90% skuteczności dopasowań
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Automatyczne dopasowanie
            <br />
            <span className="text-blue-600">
              faktur do płatności
            </span>
          </h1>

          {/* Text Loop Tagline */}
          <div className="mt-8 flex justify-center">
            <TextLoop
              staticText="I wszystko się"
              rotatingTexts={["spina", "łączy", "zgadza", "klika"]}
              className="text-2xl lg:text-3xl"
              staticTextClassName="text-gray-700 font-medium"
              rotatingTextClassName="bg-gradient-to-r from-blue-500 to-blue-700 font-bold"
              backgroundClassName="bg-gradient-to-r from-transparent via-blue-100/50 to-blue-100"
              cursorClassName="bg-blue-500"
              interval={2500}
            />
          </div>

          <p className="mt-6 text-lg text-gray-500">
            Zaimportuj faktury i wyciągi bankowe, a Spinka automatycznie
            <br className="hidden sm:block" />
            znajdzie które płatności pasują do których faktur.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8" asChild>
              <a href={appUrl('/register')}>
                Wypróbuj za darmo
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="#how-it-works">
                <Play className="h-4 w-4" />
                Zobacz jak to działa
              </a>
            </Button>
          </div>

        </div>
      </div>
    </InteractiveGridBackground>
  )
}
