import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedPosts } from "@/components/blog/featured-posts"
import { BlogCategories } from "@/components/blog/blog-categories"
import { RecentPosts } from "@/components/blog/recent-posts"
import { Newsletter } from "@/components/blog/newsletter"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogHero />
        <BlogCategories />
        <FeaturedPosts />
        <RecentPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
