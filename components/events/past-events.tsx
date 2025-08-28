import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Play, Download } from "lucide-react"

export function PastEvents() {
  const pastEvents = [
    {
      id: 1,
      title: "Introdução ao Bitcoin e Blockchain",
      description: "Palestra introdutória sobre os fundamentos do Bitcoin e tecnologia blockchain.",
      date: "2024-01-20",
      category: "Palestra",
      participants: 85,
      image: "/bitcoin-intro.png",
      hasRecording: true,
      hasMaterials: true,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Workshop: Criando NFTs na Polygon",
      description: "Hands-on workshop para criar e fazer mint de NFTs na rede Polygon.",
      date: "2024-01-15",
      category: "Workshop",
      participants: 42,
      image: "/nft-workshop.png",
      hasRecording: true,
      hasMaterials: true,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Meetup: Tendências em DeFi 2024",
      description: "Discussão sobre as principais tendências e inovações em finanças descentralizadas.",
      date: "2024-01-10",
      category: "Meetup",
      participants: 67,
      image: "/defi-trends.png",
      hasRecording: false,
      hasMaterials: true,
      rating: 4.7,
    },
    {
      id: 4,
      title: "Hackathon: Web3 Gaming",
      description: "Competição de 48 horas para desenvolver jogos baseados em blockchain.",
      date: "2023-12-15",
      category: "Hackathon",
      participants: 54,
      image: "/web3-gaming.png",
      hasRecording: false,
      hasMaterials: true,
      rating: 4.9,
    },
    {
      id: 5,
      title: "Curso: Solidity Avançado",
      description: "Curso intensivo de 4 semanas sobre desenvolvimento avançado em Solidity.",
      date: "2023-12-01",
      category: "Curso",
      participants: 28,
      image: "/solidity-advanced.png",
      hasRecording: true,
      hasMaterials: true,
      rating: 4.8,
    },
    {
      id: 6,
      title: "Palestra: Regulamentação Crypto no Brasil",
      description: "Análise do cenário regulatório brasileiro para criptomoedas e blockchain.",
      date: "2023-11-25",
      category: "Palestra",
      participants: 92,
      image: "/crypto-regulation.png",
      hasRecording: true,
      hasMaterials: false,
      rating: 4.6,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Eventos Passados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Reviva nossos eventos anteriores através de gravações, materiais e fotos da comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <Card
              key={event.id}
              className="border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gray-600 text-white">{event.category}</Badge>
                </div>
                {event.hasRecording && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString("pt-BR")}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.participants} participantes
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-muted-foreground">{event.rating}/5.0</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  {event.hasRecording && (
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Play className="h-4 w-4 mr-2" />
                      Assistir Gravação
                    </Button>
                  )}
                  {event.hasMaterials && (
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar Materiais
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Histórico Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
