import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

export function FeaturedPosts() {
  const featuredPosts = [
    {
      id: 1,
      title: "O Impacto da Ethereum 2.0 no Ecossistema DeFi",
      excerpt:
        "Análise completa sobre como a transição para Proof of Stake está transformando as finanças descentralizadas e reduzindo custos de transação.",
      category: "Ethereum",
      author: "Ana Silva",
      date: "2024-02-10",
      readTime: "8 min",
      image: "/ethereum-2-impact.png",
      featured: true,
    },
    {
      id: 2,
      title: "Regulamentação Crypto no Brasil: Marco Legal 2024",
      excerpt:
        "Entenda as novas regulamentações brasileiras para criptomoedas e como elas afetam investidores e empresas do setor.",
      category: "Regulamentação",
      author: "Carlos Santos",
      date: "2024-02-08",
      readTime: "12 min",
      image: "/crypto-regulation-brazil.png",
      featured: true,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Artigos em Destaque</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Os artigos mais relevantes e impactantes da nossa comunidade acadêmica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Card
              key={post.id}
              className="border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="def">Destaque</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <Button className="w-full text-[#DE5110] hover:bg-orange-700 text-white">
                  Ler Artigo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
