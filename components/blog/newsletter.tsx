import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Bell, TrendingUp } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-border bg-gradient-to-br from-orange-50 to-indigo-100 dark:from-orange-950/20 dark:to-indigo-950/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 text-[#DE5110] rounded-full">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-4">Newsletter Blockchain Insper</CardTitle>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Receba semanalmente os melhores artigos sobre blockchain, análises de mercado e novidades do ecossistema
              Web3 diretamente no seu email.
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Bell className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Conteúdo Exclusivo</h3>
                <p className="text-sm text-muted-foreground">Artigos e análises exclusivas para assinantes</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Análises de Mercado</h3>
                <p className="text-sm text-muted-foreground">
                  Insights sobre tendências e movimentos do mercado crypto
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Resumo Semanal</h3>
                <p className="text-sm text-muted-foreground">Os principais acontecimentos da semana em blockchain</p>
              </div>
            </div>

            {/* Subscription Form */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Seu melhor email" className="flex-1" />
                <Button className="text-[#DE5110] hover:bg-orange-700 text-white whitespace-nowrap">Inscrever-se</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Enviamos apenas conteúdo relevante. Sem spam. Cancele a qualquer momento.
              </p>
            </div>

            {/* Stats */}
            <div className="text-center pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Junte-se a <span className="font-semibold text-foreground">2.500+</span> pessoas que já recebem nossa
                newsletter
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
