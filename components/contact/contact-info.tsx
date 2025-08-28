import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-2xl">Informações de Contato</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground">Localização</h3>
              <p className="text-muted-foreground">
                Instituto Insper
                <br />
                Rua Quatá, 300 - Vila Olímpia
                <br />
                São Paulo, SP - 04546-042
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
              <p className="text-muted-foreground">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 14h
                <br />
                Domingo: Fechado
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground">contato@blockchaininsper.org</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground">Telefone</h3>
              <p className="text-muted-foreground">(11) 4504-2400</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Visite Nosso Campus</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Venha conhecer nosso espaço e participar dos nossos encontros presenciais. Toda quinta-feira às 19h temos
            meetups abertos à comunidade.
          </p>
          <Button variant="outline" className="w-full bg-transparent">
            Ver no Google Maps
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
