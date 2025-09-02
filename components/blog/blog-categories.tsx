import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function BlogCategories() {
  const categories = [
    { name: "Todos", count: 150, active: true },
    { name: "Bitcoin", count: 25, active: false },
    { name: "Ethereum", count: 32, active: false },
    { name: "DeFi", count: 28, active: false },
    { name: "NFTs", count: 18, active: false },
    { name: "Web3", count: 22, active: false },
    { name: "Regulamentação", count: 15, active: false },
    { name: "Tutoriais", count: 35, active: false },
  ]

  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`${category.active ? "text-[#DE5110] hover:bg-orange-700 text-white" : ""} flex items-center gap-2`}
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
