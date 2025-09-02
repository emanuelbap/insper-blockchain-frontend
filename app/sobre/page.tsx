import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MissionSection } from "@/components/about/mission-section"
import { ObjectivesSection } from "@/components/about/objectives-section"
import { TeamSection } from "@/components/about/team-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-indigo-100 dark:from-orange-950/20 dark:to-indigo-950/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="title-blockchain">
              Sobre o Blockchain Insper
            </h1>
            <p className="desc1">
              Conheça nossa história, missão e a equipe dedicada a democratizar o conhecimento em tecnologias blockchain
              no ambiente acadêmico.
            </p>
          </div>
        </section>

        <MissionSection />
        <ObjectivesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
