import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ResourceCategories() {
  const categories = [
    { name: "Todos", count: 200, active: true },
    { name: "Bitcoin", count: 45, active: false },
    { name: "Ethereum", count: 52, active: false },
    { name: "Smart Contracts", count: 38, active: false },
    { name: "DAOs", count: 25, active: false },
    { name: "DeFi", count: 30, active: false },
    { name: "NFTs", count: 20, active: false },
    { name: "Web3", count: 35, active: false },
  ]

  const levels = [
    { name: "Iniciante", active: false },
    { name: "Intermediário", active: false },
    { name: "Avançado", active: false },
  ]

  const types = [
    { name: "Livros", active: false },
    { name: "Artigos", active: false },
    { name: "Vídeos", active: false },
    { name: "Cursos", active: false },
    { name: "Documentação", active: false },
  ]

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Topics */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Tópicos</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${
                  category.active ? "bg-blue-600 hover:bg-blue-700 text-white" : ""
                } flex items-center gap-2`}
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Difficulty Levels */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Nível</h3>
          <div className="flex flex-wrap gap-3">
            {levels.map((level, index) => (
              <Button key={index} variant="outline" className="flex items-center gap-2 bg-transparent">
                {level.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Content Types */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Tipo</h3>
          <div className="flex flex-wrap gap-3">
            {types.map((type, index) => (
              <Button key={index} variant="outline" className="flex items-center gap-2 bg-transparent">
                {type.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
