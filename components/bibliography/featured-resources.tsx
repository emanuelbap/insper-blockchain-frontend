import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Clock, User } from "lucide-react"

export function FeaturedResources() {
  const featuredResources = [
    {
      id: 1,
      title: "Mastering Bitcoin",
      author: "Andreas M. Antonopoulos",
      description:
        "O guia definitivo para entender Bitcoin do ponto de vista técnico. Cobre desde conceitos básicos até implementações avançadas.",
      category: "Bitcoin",
      type: "Livro",
      level: "Intermediário",
      rating: 4.9,
      readTime: "8-12 horas",
      link: "https://github.com/bitcoinbook/bitcoinbook",
      image: "/mastering-bitcoin.png",
      featured: true,
    },
    {
      id: 2,
      title: "Ethereum Whitepaper",
      author: "Vitalik Buterin",
      description:
        "O documento original que introduziu o conceito de Ethereum e smart contracts. Leitura essencial para entender os fundamentos.",
      category: "Ethereum",
      type: "Artigo",
      level: "Intermediário",
      rating: 4.8,
      readTime: "45 min",
      link: "https://ethereum.org/en/whitepaper/",
      image: "/ethereum-whitepaper.png",
      featured: true,
    },
    {
      id: 3,
      title: "Solidity Documentation",
      author: "Ethereum Foundation",
      description:
        "Documentação oficial completa da linguagem Solidity para desenvolvimento de smart contracts na Ethereum.",
      category: "Smart Contracts",
      type: "Documentação",
      level: "Iniciante",
      rating: 4.7,
      readTime: "Referência",
      link: "https://docs.soliditylang.org/",
      image: "/solidity-docs.png",
      featured: true,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Recursos em Destaque</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Os recursos mais importantes e bem avaliados pela nossa comunidade acadêmica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredResources.map((resource) => (
            <Card
              key={resource.id}
              className="border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 text-black font-semibold">Destaque</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {resource.type}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2 mb-2">{resource.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <User className="h-4 w-4 mr-1" />
                      {resource.author}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">{resource.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">{resource.category}</Badge>
                    <Badge variant="outline">{resource.level}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {resource.rating}
                  </div>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {resource.readTime}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    Acessar Recurso
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
