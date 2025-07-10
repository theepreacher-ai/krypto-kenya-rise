
import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp, BookOpen, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const featuredPost = {
    title: "Understanding Kenya's New VASP Bill: What It Means for Crypto Traders",
    excerpt: "A comprehensive breakdown of the Virtual Asset Service Provider Bill and how it affects your crypto trading activities in Kenya.",
    author: "KryptoKenya Legal Team",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    category: "Regulation",
    image: "regulatory"
  };

  const blogPosts = [
    {
      title: "Bitcoin Hits New Highs: Should Kenyan Investors Buy Now?",
      excerpt: "Market analysis and expert insights on Bitcoin's recent performance and what it means for Kenyan crypto investors.",
      author: "Sarah Mwangi",
      date: "Dec 8, 2024",
      readTime: "5 min read",
      category: "Market Analysis",
      trending: true
    },
    {
      title: "How to Calculate Crypto Taxes in Kenya: A Complete Guide",
      excerpt: "Step-by-step guide to understanding and calculating your crypto tax obligations under KRA requirements.",
      author: "John Kamau",
      date: "Dec 5, 2024",
      readTime: "12 min read",
      category: "Tax Guide"
    },
    {
      title: "DeFi for Beginners: Decentralized Finance Explained",
      excerpt: "Learn about decentralized finance (DeFi) and how Kenyan users can safely participate in this growing ecosystem.",
      author: "Grace Njeri",
      date: "Dec 3, 2024",
      readTime: "7 min read",
      category: "Education"
    },
    {
      title: "M-Pesa + Crypto: The Perfect Financial Combo for Kenyans",
      excerpt: "Exploring how the integration of M-Pesa with cryptocurrency trading is revolutionizing financial inclusion in Kenya.",
      author: "David Ochieng",
      date: "Nov 28, 2024",
      readTime: "6 min read",
      category: "FinTech"
    }
  ];

  const categories = [
    { name: "Market Analysis", count: 24, color: "bg-kenyan-green" },
    { name: "Education", count: 18, color: "bg-kenyan-blue" },
    { name: "Regulation", count: 12, color: "bg-kenyan-red" },
    { name: "Tax Guide", count: 8, color: "bg-kenyan-gold" },
    { name: "FinTech", count: 15, color: "bg-gray-600" }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-kenyan-blue/10 rounded-full">
              <BookOpen className="h-12 w-12 text-kenyan-blue" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-kenyan-green mb-6">
            Blog & News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest crypto news, market insights, and educational content 
            tailored specifically for Kenyan crypto enthusiasts.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-16 overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-[4/3] bg-gradient-to-br from-kenyan-red/20 to-kenyan-red/10 flex items-center justify-center">
              <AlertCircle className="h-24 w-24 text-kenyan-red/50" />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-kenyan-red text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                <span className="bg-kenyan-gold text-kenyan-black px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                {featuredPost.title}
              </CardTitle>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <Button className="bg-kenyan-green hover:bg-kenyan-green/90 text-white">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Latest Articles</h3>
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-kenyan-blue/10 text-kenyan-blue px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      {post.trending && (
                        <div className="flex items-center space-x-1 text-kenyan-red text-sm">
                          <TrendingUp className="h-4 w-4" />
                          <span>Trending</span>
                        </div>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-800 mb-3 group-hover:text-kenyan-green transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group-hover:bg-kenyan-green group-hover:text-white transition-colors">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-kenyan-green text-kenyan-green hover:bg-kenyan-green hover:text-white px-8">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span className="font-medium text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{category.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-kenyan-green to-kenyan-blue text-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-3">Stay Updated</h4>
                <p className="text-sm text-white/90 mb-4">
                  Get the latest crypto news and market insights delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500"
                  />
                  <Button className="w-full bg-white text-kenyan-green hover:bg-gray-100 font-semibold">
                    Subscribe Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Bitcoin', 'Ethereum', 'M-Pesa', 'KRA Tax', 'DeFi', 'Trading Tips', 'Regulation', 'Blockchain'].map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-kenyan-green hover:text-white transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
