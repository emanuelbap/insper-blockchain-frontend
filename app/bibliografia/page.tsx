import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BibliographyHero } from "@/components/bibliography/bibliography-hero"
import { ResourceCategories } from "@/components/bibliography/resource-categories"
import { FeaturedResources } from "@/components/bibliography/featured-resources"
import { ResourcesByTopic } from "@/components/bibliography/resources-by-topic"

export default function BibliographyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BibliographyHero />
        <ResourceCategories />
        <FeaturedResources />
        <ResourcesByTopic />
      </main>
      <Footer />
    </div>
  )
}
