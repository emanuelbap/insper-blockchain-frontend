import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Lightbulb, Globe, BookOpen, Zap } from "lucide-react"

export function ObjectivesSection() {
  const objectives = [
    {
      icon: GraduationCap,
      title: "Educação de Qualidade",
      description: "Oferecer cursos, workshops e palestras sobre tecnologias blockchain com foco acadêmico e prático.",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Construir uma rede sólida de estudantes, pesquisadores e profissionais interessados em blockchain.",
    },
    {
      icon: Lightbulb,
      title: "Pesquisa e Inovação",
      description: "Fomentar pesquisas acadêmicas e projetos inovadores em tecnologias descentralizadas.",
    },
    {
      icon: Globe,
      title: "Impacto Social",
      description: "Explorar aplicações de blockchain para resolver problemas sociais e econômicos reais.",
    },
    {
      icon: BookOpen,
      title: "Recursos Educacionais",
      description: "Desenvolver e curar conteúdos educacionais de alta qualidade sobre o ecossistema Web3.",
    },
    {
      icon: Zap,
      title: "Capacitação Prática",
      description: "Proporcionar experiências hands-on através de hackathons, projetos e parcerias com a indústria.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nossos Objetivos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Trabalhamos com foco em seis pilares fundamentais para construir um ecossistema educacional robusto em
            blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                    <objective.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{objective.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{objective.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
