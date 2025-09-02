import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nossa Missão</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Democratizar o acesso ao conhecimento em tecnologias blockchain e formar a próxima geração de profissionais
            e pesquisadores em Web3.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Missão */}
          <Card className="border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
              <p className="text-muted-foreground text-pretty">
                Promover educação de qualidade em blockchain, conectando teoria acadêmica com aplicações práticas,
                preparando estudantes para o futuro descentralizado da tecnologia.
              </p>
            </CardContent>
          </Card>

          {/* Visão */}
          <Card className="border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
              <p className="text-muted-foreground text-pretty">
                Ser referência nacional em educação blockchain no ambiente acadêmico, formando líderes capazes de
                impulsionar a inovação tecnológica no Brasil.
              </p>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card className="border-border hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
              <p className="text-muted-foreground text-pretty">
                Transparência, inovação, colaboração e excelência acadêmica. Acreditamos no poder da educação
                descentralizada e no compartilhamento aberto de conhecimento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
