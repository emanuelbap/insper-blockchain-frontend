import { Button } from "@/components/ui/button"
import { Calendar, Users, Clock } from "lucide-react"

export function EventsHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="eventos">
            Eventos Blockchain Insper
          </h1>
          <p className="desc1">
            Participe de workshops, palestras, hackathons e meetups sobre tecnologias blockchain. Conecte-se com a
            comunidade e expanda seus conhecimentos em Web3.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Ver Próximos Eventos
            </Button>
            <Button size="lg" variant="outline">
              Histórico de Eventos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <div className="dados1">50+</div>
              <div className="desc2">Eventos Realizados</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="dados1">2000+</div>
              <div className="desc2">Participantes</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div className="dados1">500+</div>
              <div className="desc2">Horas de Conteúdo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
