import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, BookOpen, Zap } from "lucide-react"

export function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-indigo-100 dark:from-orange-950/20 dark:to-indigo-950/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="blog">Blog Blockchain Insper</h1>
          <p className="desc1">
            Fique por dentro das últimas tendências em blockchain, criptomoedas, DeFi, NFTs e Web3. Análises, tutoriais
            e insights da nossa comunidade acadêmica.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar artigos..." className="Pl_holder" />
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
              <div className="dados1">150+</div>
              <div className="desc2">Artigos Publicados</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <div className="dados1">50K+</div>
              <div className="desc2">Visualizações</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <div className="dados1">3x</div>
              <div className="desc2">Posts por Semana</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
