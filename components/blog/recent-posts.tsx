import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Eye } from "lucide-react"

export function RecentPosts() {
  const recentPosts = [
    {
      id: 3,
      title: "Tutorial: Como Criar seu Primeiro Smart Contract",
      excerpt:
        "Guia passo a passo para desenvolver e deployar um smart contract simples na rede Ethereum usando Solidity.",
      category: "Tutoriais",
      author: "Maria Oliveira",
      date: "2024-02-05",
      readTime: "15 min",
      views: 1250,
      image: "/smart-contract-tutorial.png",
    },
    {
      id: 4,
      title: "NFTs além da Arte: Casos de Uso Inovadores",
      excerpt:
        "Explorando aplicações práticas dos NFTs em setores como educação, saúde, imobiliário e certificação digital.",
      category: "NFTs",
      author: "João Costa",
      date: "2024-02-03",
      readTime: "10 min",
      views: 890,
      image: "/nft-use-cases.png",
    },
    {
      id: 5,
      title: "DeFi vs Finanças Tradicionais: Uma Comparação",
      excerpt:
        "Análise detalhada das vantagens e desvantagens das finanças descentralizadas em relação ao sistema financeiro tradicional.",
      category: "DeFi",
      author: "Beatriz Lima",
      date: "2024-02-01",
      readTime: "12 min",
      views: 1450,
      image: "/defi-vs-traditional.png",
    },
    {
      id: 6,
      title: "Layer 2: Soluções de Escalabilidade para Ethereum",
      excerpt: "Entenda como Polygon, Arbitrum e Optimism estão resolvendo os problemas de escalabilidade da Ethereum.",
      category: "Ethereum",
      author: "Pedro Almeida",
      date: "2024-01-30",
      readTime: "14 min",
      views: 1120,
      image: "/layer2-solutions.png",
    },
    {
      id: 7,
      title: "Web3 e o Futuro da Internet Descentralizada",
      excerpt:
        "Como a Web3 está transformando a internet que conhecemos e criando novas oportunidades para desenvolvedores.",
      category: "Web3",
      author: "Ana Silva",
      date: "2024-01-28",
      readTime: "11 min",
      views: 980,
      image: "/web3-future.png",
    },
    {
      id: 8,
      title: "Mineração vs Staking: Qual é Mais Sustentável?",
      excerpt: "Comparação entre os mecanismos de consenso Proof of Work e Proof of Stake do ponto de vista ambiental.",
      category: "Bitcoin",
      author: "Carlos Santos",
      date: "2024-01-25",
      readTime: "9 min",
      views: 1340,
      image: "/mining-vs-staking.png",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Artigos Recentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Mantenha-se atualizado com as últimas publicações da nossa comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Card
              key={post.id}
              className="border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="text-[#DE5110] text-white">{post.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Ler Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-[#DE5110] hover:bg-orange-700 text-white">
            Ver Todos os Artigos
          </Button>
        </div>
      </div>
    </section>
  )
}
