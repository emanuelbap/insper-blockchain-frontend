import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calendar, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 to-indigo-960 dark:from-blue-950/20 dark:to-indigo-950/20 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Desbravando o Futuro da
            <span> Tecnologia Blockchain</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Somos uma entidade acadêmica dedicada ao ensino, pesquisa e desenvolvimento de tecnologias blockchain,
            conectando estudantes e profissionais ao ecossistema Web3.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className=" text-white">
              Junte-se à Comunidade
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Conheça Nossos Eventos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-muted-foreground">Membros Ativos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-muted-foreground">Eventos Realizados</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground">100+</div>
              <div className="text-muted-foreground">Recursos Educacionais</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
