import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Presidente",
      description: "Estudante de Engenharia da Computação, especialista em Smart Contracts e DeFi.",
      image: "/professional-woman-portrait.png",
      linkedin: "#",
      github: "#",
      email: "ana@blockchaininsper.org",
    },
    {
      name: "Carlos Santos",
      role: "Vice-Presidente",
      description: "Pesquisador em Criptografia e Segurança Blockchain, focado em protocolos de consenso.",
      image: "/professional-man-portrait.png",
      linkedin: "#",
      github: "#",
      email: "carlos@blockchaininsper.org",
    },
    {
      name: "Maria Oliveira",
      role: "Diretora de Educação",
      description: "Especialista em Web3 e NFTs, responsável pelos programas educacionais da entidade.",
      image: "/professional-woman-portrait-tech.png",
      linkedin: "#",
      github: "#",
      email: "maria@blockchaininsper.org",
    },
    {
      name: "João Costa",
      role: "Diretor de Tecnologia",
      description: "Desenvolvedor Full-Stack especializado em dApps e integração de sistemas blockchain.",
      image: "/professional-man-portrait-developer.png",
      linkedin: "#",
      github: "#",
      email: "joao@blockchaininsper.org",
    },
    {
      name: "Beatriz Lima",
      role: "Diretora de Eventos",
      description: "Organizadora de eventos tech, especialista em community building e networking.",
      image: "/professional-woman-portrait-events.png",
      linkedin: "#",
      github: "#",
      email: "beatriz@blockchaininsper.org",
    },
    {
      name: "Pedro Almeida",
      role: "Diretor de Pesquisa",
      description: "Mestrando em Ciência da Computação, focado em escalabilidade e interoperabilidade blockchain.",
      image: "/professional-man-portrait-researcher.png",
      linkedin: "#",
      github: "#",
      email: "pedro@blockchaininsper.org",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nossa Equipe</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Conheça os líderes dedicados que tornam possível nossa missão de democratizar o conhecimento em blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-amber-100 dark:border-amber-100/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-amber-100 font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-6 text-sm">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Quer fazer parte da nossa equipe?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estamos sempre em busca de pessoas apaixonadas por blockchain e educação. Entre em contato conosco!
          </p>
          <Button size="lg" className="text-[#DE5110] hover:bg-orange-700 text-white">
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  )
}
