import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function EventCategories() {
  const categories = [
    { name: "Todos", count: 24, active: true },
    { name: "Workshops", count: 8, active: false },
    { name: "Palestras", count: 12, active: false },
    { name: "Hackathons", count: 3, active: false },
    { name: "Meetups", count: 6, active: false },
    { name: "Cursos", count: 4, active: false },
  ]

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`${category.active ? "bg-blue-600 hover:bg-blue-700 text-white" : ""} flex items-center gap-2`}
            >
              {category.name}
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
