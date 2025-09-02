import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export function UpcomingEvents() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Workshop: Desenvolvimento de Smart Contracts",
      description: "Aprenda a desenvolver e deployar smart contracts na blockchain Ethereum usando Solidity.",
      date: "2024-02-15",
      time: "19:00 - 22:00",
      location: "Auditório Principal - Insper",
      category: "Workshop",
      spots: 30,
      spotsLeft: 8,
      price: "Gratuito",
      image: "/blockchain-workshop.png",
      instructor: "Prof. Carlos Santos",
    },
    {
      id: 2,
      title: "Palestra: O Futuro das Finanças Descentralizadas",
      description: "Discussão sobre DeFi, yield farming, liquidity pools e o impacto nas finanças tradicionais.",
      date: "2024-02-22",
      time: "18:30 - 20:00",
      location: "Online via Zoom",
      category: "Palestra",
      spots: 100,
      spotsLeft: 45,
      price: "Gratuito",
      image: "/defi-presentation.png",
      instructor: "Ana Silva",
    },
    {
      id: 3,
      title: "Hackathon: Blockchain for Social Good",
      description: "48 horas para desenvolver soluções blockchain que impactem positivamente a sociedade.",
      date: "2024-03-01",
      time: "09:00 - 18:00",
      location: "Campus Insper",
      category: "Hackathon",
      spots: 60,
      spotsLeft: 12,
      price: "R$ 50",
      image: "/hackathon-social.png",
      instructor: "Equipe Blockchain Insper",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Próximos Eventos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Não perca as oportunidades de aprender e se conectar com a comunidade blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="text-[#DE5110] text-white">{event.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {event.price}
                  </Badge>
                </div>
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
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.spotsLeft} vagas restantes de {event.spots}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Instrutor: {event.instructor}</p>
                  <Button className="w-full text-[#DE5110] hover:bg-orange-700 text-white">Inscrever-se</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Eventos
          </Button>
        </div>
      </div>
    </section>
  )
}
