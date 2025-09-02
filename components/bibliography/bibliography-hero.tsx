import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, GraduationCap, Award } from "lucide-react"

export function BibliographyHero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-indigo-100 dark:from-orange-950/20 dark:to-indigo-950/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="bibliografia">Bibliografia Básica</h1>
          <p className="desc1">
            Recursos essenciais cuidadosamente selecionados para sua jornada de aprendizado em blockchain. De conceitos
            básicos a implementações avançadas.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar recursos..." className="Pl_holder" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[#DE5110] hover:bg-orange-700 text-white">
                Buscar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <div className="dados1">200+</div>
              <div className="desc2">Recursos Curados</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <GraduationCap className="h-8 w-8 text-orange-600" />
              </div>
              <div className="dados1">15</div>
              <div className="desc2">Tópicos Cobertos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="dados1">3</div>
              <div className="desc2">Níveis de Dificuldade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
