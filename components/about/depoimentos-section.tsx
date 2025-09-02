import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"

export function DepoimentosSection() {
  const teamMembers = [
    {
      name: "Felipe Santos",
      role: "Co-fundador e Ex-membro",
      description: "Hoje acredito que a entidade se tornou algo muito mais próximo do que imaginávamos quando foi fundada, um organismo que funciona de maneira independente de qualquer membro específico. Além da possibilidade de aprender e debater com pessoas inteligentes sobre caminhos futuros para a sociedade por meio da tecnologia, os membros tem a oportunidade de aplicar essas ideias na prática nas áreas internas e também em projetos com as principais empresas do país como Ambev e BTG Pactual.",
      image: "/professional-man-portrait.png",
      linkedin: "#",
      github: "#",
      email: "pedro@blockchaininsper.org",
    },
    {
      name: "Bruno Arthur",
      role: "Co-fundador e Ex-membro",
      description: "Quando me chamaram e disseram que estavam fazendo uma entidade relacionada a isso eu vi uma oportunidade de disseminar o conhecimento nem que fosse dentro do próprio insper Foi então que me juntei ao time de fundadores da entidade. Com uma missão de difundir o conhecimento e fazer com que as pessoas gostem de aprender e tenham as melhores ferramentas a sua disposição. Por isso decido fazer vários projetos para que eu possa levar o conhecimento que fui adquirindo para os outros seja na forma de aulas, ou até mesmo mentira do um projeto proposto.",
      image: "/professional-man-portrait.png",
      linkedin: "#",
      github: "#",
      email: "pedro@blockchaininsper.org",
    },
    {
      name: "João P. J. M. Perpetuo",
      role: "Co-fundador e Ex-membro",
      description: "Fundar a B.I. foi um desafio ímpar. Estudar uma tecnologia tão latente e nova trouxe desafios extras, mas ao mesmo tempo diferenciais competitivos em nossos currículos, logo no início de nossas carreiras. Habilidades de aprendizado, gestão de equipe, resolução de conflitos, entendimento de viabilidade de projetos e tomada de decisão, eram desenvolvidas a cada dia. Hoje posso falar que a entidade teve papel fundamental em meu desenvolvimento profissional e na posição que ocupo hoje.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Depoimentos de nossos membros</h2>
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
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-orange-100 dark:border-orange-900/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
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
