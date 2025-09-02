import { MessageSquare, Users, Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-indigo-100 dark:from-orange-950/20 dark:to-indigo-950/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="contato">Entre em Contato</h1>
          <p className="desc1">
            Tem dúvidas, sugestões ou quer fazer parte da nossa comunidade? Estamos aqui para ajudar e conectar você ao
            universo blockchain.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                  <MessageSquare className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h3 className="dados1">Chat Direto</h3>
              <p className="desc2">Discord e WhatsApp para conversas rápidas</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="dados1">Email</h3>
              <p className="desc2">Respostas detalhadas em até 24h</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="dados1">Presencial</h3>
              <p className="desc2">Encontros regulares no campus Insper</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
