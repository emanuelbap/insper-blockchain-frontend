import { MessageSquare, Users, Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            Tem dúvidas, sugestões ou quer fazer parte da nossa comunidade? Estamos aqui para ajudar e conectar você ao
            universo blockchain.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Chat Direto</h3>
              <p className="text-muted-foreground">Discord e WhatsApp para conversas rápidas</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">Respostas detalhadas em até 24h</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Presencial</h3>
              <p className="text-muted-foreground">Encontros regulares no campus Insper</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
