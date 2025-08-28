import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, Clock, ChevronRight } from "lucide-react"

export function ResourcesByTopic() {
  const topics = [
    {
      name: "Bitcoin",
      description: "Fundamentos da primeira criptomoeda e tecnologia blockchain",
      resources: [
        {
          title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
          author: "Satoshi Nakamoto",
          type: "Paper",
          level: "Intermediário",
          rating: 4.9,
          readTime: "30 min",
          link: "https://bitcoin.org/bitcoin.pdf",
        },
        {
          title: "The Bitcoin Standard",
          author: "Saifedean Ammous",
          type: "Livro",
          level: "Iniciante",
          rating: 4.6,
          readTime: "6-8 horas",
          link: "#",
        },
        {
          title: "Programming Bitcoin",
          author: "Jimmy Song",
          type: "Livro",
          level: "Avançado",
          rating: 4.7,
          readTime: "10-15 horas",
          link: "#",
        },
      ],
    },
    {
      name: "Ethereum",
      description: "Plataforma para smart contracts e aplicações descentralizadas",
      resources: [
        {
          title: "Mastering Ethereum",
          author: "Andreas M. Antonopoulos & Gavin Wood",
          type: "Livro",
          level: "Intermediário",
          rating: 4.8,
          readTime: "12-16 horas",
          link: "#",
        },
        {
          title: "Ethereum Development Documentation",
          author: "Ethereum Foundation",
          type: "Documentação",
          level: "Iniciante",
          rating: 4.7,
          readTime: "Referência",
          link: "https://ethereum.org/en/developers/docs/",
        },
        {
          title: "Ethereum Virtual Machine (EVM) Deep Dive",
          author: "Ethereum Foundation",
          type: "Artigo",
          level: "Avançado",
          rating: 4.5,
          readTime: "2 horas",
          link: "#",
        },
      ],
    },
    {
      name: "Smart Contracts",
      description: "Contratos auto-executáveis na blockchain",
      resources: [
        {
          title: "Smart Contracts: Building Blocks for Digital Markets",
          author: "Nick Szabo",
          type: "Artigo",
          level: "Intermediário",
          rating: 4.6,
          readTime: "45 min",
          link: "#",
        },
        {
          title: "OpenZeppelin Contracts",
          author: "OpenZeppelin",
          type: "Documentação",
          level: "Intermediário",
          rating: 4.9,
          readTime: "Referência",
          link: "https://docs.openzeppelin.com/contracts/",
        },
        {
          title: "Solidity by Example",
          author: "Comunidade",
          type: "Tutorial",
          level: "Iniciante",
          rating: 4.8,
          readTime: "4-6 horas",
          link: "https://solidity-by-example.org/",
        },
      ],
    },
    {
      name: "DAOs",
      description: "Organizações Autônomas Descentralizadas",
      resources: [
        {
          title: "The DAO Handbook",
          author: "Linda Xie",
          type: "Guia",
          level: "Iniciante",
          rating: 4.5,
          readTime: "2 horas",
          link: "#",
        },
        {
          title: "Aragon Documentation",
          author: "Aragon",
          type: "Documentação",
          level: "Intermediário",
          rating: 4.4,
          readTime: "Referência",
          link: "https://aragon.org/",
        },
        {
          title: "DAO Governance Best Practices",
          author: "a16z crypto",
          type: "Artigo",
          level: "Intermediário",
          rating: 4.7,
          readTime: "1 hora",
          link: "#",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Recursos por Tópico</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore nossa coleção organizada de recursos educacionais por área de conhecimento.
          </p>
        </div>

        <div className="space-y-12">
          {topics.map((topic, topicIndex) => (
            <div key={topicIndex}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{topic.name}</h3>
                <p className="text-muted-foreground">{topic.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topic.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{resource.author}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {resource.level}
                          </Badge>
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

                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          Acessar
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" className="bg-transparent">
                  Ver todos os recursos de {topic.name}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
