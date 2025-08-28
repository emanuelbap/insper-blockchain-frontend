import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, GraduationCap, Award } from "lucide-react"

export function BibliographyHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Bibliografia Básica</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Recursos essenciais cuidadosamente selecionados para sua jornada de aprendizado em blockchain. De conceitos
            básicos a implementações avançadas.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar recursos..." className="pl-10 pr-4 py-3 text-base" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white">
                Buscar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground">200+</div>
              <div className="text-muted-foreground">Recursos Curados</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground">15</div>
              <div className="text-muted-foreground">Tópicos Cobertos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground">3</div>
              <div className="text-muted-foreground">Níveis de Dificuldade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
