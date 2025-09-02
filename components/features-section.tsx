import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, Users, MessageSquare, Github, Lightbulb } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com estudantes, pesquisadores e profissionais apaixonados por blockchain.",
    },
    {
      icon: Calendar,
      title: "Eventos Regulares",
      description: "Workshops, palestras e hackathons para aprender e praticar tecnologias blockchain.",
    },
    {
      icon: BookOpen,
      title: "Recursos Educacionais",
      description: "Bibliografia curada com os melhores conteúdos sobre Bitcoin, Ethereum, DeFi e mais.",
    },
    {
      icon: MessageSquare,
      title: "Blog Especializado",
      description: "Artigos e análises sobre as últimas tendências em blockchain e criptomoedas.",
    },
    {
      icon: Github,
      title: "Projetos Open Source",
      description: "Contribua para projetos reais e construa seu portfólio em tecnologias Web3.",
    },
    {
      icon: Lightbulb,
      title: "Pesquisa e Inovação",
      description: "Participe de pesquisas acadêmicas e projetos inovadores em blockchain.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Por que escolher o Blockchain Insper?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma plataforma completa para aprender, pesquisar e inovar no universo das tecnologias blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="desc">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
