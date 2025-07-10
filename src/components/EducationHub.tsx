
import React from 'react';
import { BookOpen, Play, Award, ChevronRight, Brain, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationHub = () => {
  const educationResources = [
    {
      title: "Crypto Basics for Beginners",
      description: "Start your crypto journey with our comprehensive beginner's guide",
      icon: BookOpen,
      type: "Course",
      duration: "2 hours",
      level: "Beginner"
    },
    {
      title: "Understanding Blockchain Technology",
      description: "Learn how blockchain works with interactive animations",
      icon: Brain,
      type: "Interactive",
      duration: "1.5 hours",
      level: "Intermediate"
    },
    {
      title: "Trading Strategies & Risk Management",
      description: "Master the art of crypto trading with proven strategies",
      icon: Target,
      type: "Video Series",
      duration: "3 hours",
      level: "Advanced"
    },
    {
      title: "Kenya Crypto Tax Guide",
      description: "Complete guide to KRA compliance and crypto taxation",
      icon: Award,
      type: "Guide",
      duration: "45 mins",
      level: "All Levels"
    }
  ];

  const achievements = [
    { count: "10,000+", label: "Students Educated" },
    { count: "95%", label: "Completion Rate" },
    { count: "4.8/5", label: "Average Rating" },
    { count: "200+", label: "Hours of Content" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-kenyan-green mb-6">
            Education Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master cryptocurrency with our comprehensive learning platform. 
            From basics to advanced trading strategies, we've got you covered.
          </p>
          <Button className="bg-kenyan-blue hover:bg-kenyan-blue/90 text-white px-8 py-3 text-lg">
            Learn Crypto, Earn Rewards
            <Award className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((stat, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-kenyan-green mb-2">{stat.count}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Education Resources */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {educationResources.map((resource, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-kenyan-green/10 rounded-lg">
                    <resource.icon className="h-6 w-6 text-kenyan-green" />
                  </div>
                  <span className="text-xs bg-kenyan-blue/10 text-kenyan-blue px-2 py-1 rounded-full font-medium">
                    {resource.type}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-kenyan-green transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>⏱️ {resource.duration}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{resource.level}</span>
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-kenyan-green group-hover:text-white transition-colors">
                  Start Learning
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path */}
        <Card className="bg-gradient-to-r from-kenyan-green to-kenyan-blue text-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Complete Learning Path</h3>
                <p className="text-lg mb-6 text-white/90">
                  Follow our structured curriculum designed specifically for Kenyan crypto enthusiasts. 
                  From zero to hero in just 30 days.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Play className="h-5 w-5" />
                    <span>Video Tutorials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Written Guides</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Community Support</span>
                  </div>
                </div>
                <Button className="bg-white text-kenyan-green hover:bg-gray-100 font-semibold">
                  Start Your Journey
                </Button>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <Brain className="h-16 w-16 mx-auto mb-4 text-kenyan-gold" />
                  <p className="text-lg font-semibold">Earn Certificates</p>
                  <p className="text-sm opacity-80">Get recognized for your achievements</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationHub;
