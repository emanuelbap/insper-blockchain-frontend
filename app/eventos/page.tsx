import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventsHero } from "@/components/events/events-hero"
import { UpcomingEvents } from "@/components/events/upcoming-events"
import { PastEvents } from "@/components/events/past-events"
import { EventCategories } from "@/components/events/event-categories"

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <EventsHero />
        <EventCategories />
        <UpcomingEvents />
        <PastEvents />
      </main>
      <Footer />
    </div>
  )
}
