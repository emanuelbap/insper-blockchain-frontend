import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, MessageCircle, Users } from "lucide-react"

export function SocialLinks() {
  const socialPlatforms = [
    {
      name: "Discord",
      description: "Participe das discussões diárias da nossa comunidade",
      icon: MessageCircle,
      link: "https://discord.gg/blockchaininsper",
      members: "500+ membros",
      color: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      name: "GitHub",
      description: "Contribua para nossos projetos open source",
      icon: Github,
      link: "https://github.com/blockchain-insper",
      members: "50+ repositórios",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "LinkedIn",
      description: "Conecte-se profissionalmente com nossa rede",
      icon: Linkedin,
      link: "https://linkedin.com/company/blockchain-insper",
      members: "1000+ seguidores",
      color: "bg-orange-700 hover:bg-orange-800",
    },
    {
      name: "Instagram",
      description: "Acompanhe nossos eventos e bastidores",
      icon: Instagram,
      link: "https://instagram.com/blockchaininsper",
      members: "800+ seguidores",
      color: "bg-pink-600 hover:bg-pink-700",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Conecte-se Conosco nas Redes Sociais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Faça parte da nossa comunidade online e mantenha-se atualizado com todas as novidades do Blockchain Insper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 ${platform.color} rounded-full`}>
                    <platform.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">{platform.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{platform.members}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm">{platform.description}</p>
                <Button className={`w-full ${platform.color} text-white`} asChild>
                  <a href={platform.link} target="_blank" rel="noopener noreferrer">
                    Seguir
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-border">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Comunidade Ativa</h3>
              <p className="text-muted-foreground mb-6">
                Mais de 2.000 pessoas já fazem parte da nossa comunidade online. Junte-se a nós e participe das
                discussões sobre o futuro da tecnologia blockchain.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-muted-foreground">Discord</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">1000+</div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">800+</div>
                  <div className="text-sm text-muted-foreground">Instagram</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
