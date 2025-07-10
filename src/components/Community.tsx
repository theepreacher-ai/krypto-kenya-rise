
import React from 'react';
import { Users, MessageCircle, Star, Quote, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Community = () => {
  const testimonials = [
    {
      name: "Grace Wanjiku",
      location: "Nairobi",
      role: "Small Business Owner",
      content: "KryptoKenya transformed how I think about money. The education hub taught me everything I needed to know, and now I'm earning extra income through crypto trading!",
      rating: 5,
      avatar: "GW"
    },
    {
      name: "David Kipchoge",
      location: "Eldoret",
      role: "University Student", 
      content: "The M-Pesa integration is brilliant! I can easily buy crypto with my pocket money and learn at the same time. The community is so supportive.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Mary Akinyi",
      location: "Kisumu",
      role: "Teacher",
      content: "As a teacher, I appreciate how well-structured the learning materials are. KryptoKenya made crypto accessible for someone like me who was completely new to it.",
      rating: 5,
      avatar: "MA"
    }
  ];

  const communityStats = [
    { count: "50,000+", label: "Active Members" },
    { count: "1,200+", label: "Daily Discussions" },
    { count: "47", label: "Counties Represented" },
    { count: "24/7", label: "Support Available" }
  ];

  const upcomingEvents = [
    {
      title: "Crypto Trading Workshop",
      date: "Dec 15, 2024",
      location: "Nairobi iHub",
      type: "In-Person"
    },
    {
      title: "Blockchain Technology Seminar", 
      date: "Dec 20, 2024",
      location: "Virtual Event",
      type: "Online"
    },
    {
      title: "Meet & Greet Kisumu",
      date: "Dec 28, 2024", 
      location: "Kisumu Innovation Hub",
      type: "In-Person"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-kenyan-blue/10 rounded-full">
              <Users className="h-12 w-12 text-kenyan-blue" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-kenyan-green mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with thousands of Kenyan crypto enthusiasts, share experiences, 
            and grow together in your financial journey.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-kenyan-blue mb-2">{stat.count}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Community Says
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-kenyan-green text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-kenyan-gold fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="h-6 w-6 text-kenyan-blue/30 mb-2" />
                  <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                  <p className="text-sm text-kenyan-blue font-medium">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <Card className="bg-gradient-to-br from-kenyan-green to-kenyan-blue text-white">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 mb-4 text-kenyan-gold" />
              <h3 className="text-2xl font-bold mb-4">24/7 Support in Your Language</h3>
              <p className="text-lg mb-6 text-white/90">
                Get help anytime in English or Swahili from our dedicated support team. 
                We're here to guide you every step of the way.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-kenyan-gold rounded-full"></div>
                  <span>Live chat support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-kenyan-gold rounded-full"></div>
                  <span>WhatsApp assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-kenyan-gold rounded-full"></div>
                  <span>Video call support</span>
                </div>
              </div>
              <Button className="bg-white text-kenyan-green hover:bg-gray-100 font-semibold">
                Chat with Support
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{event.title}</h4>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.type === 'Online' ? 'bg-kenyan-blue/10 text-kenyan-blue' : 'bg-kenyan-green/10 text-kenyan-green'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 border-kenyan-green text-kenyan-green hover:bg-kenyan-green hover:text-white">
              View All Events
            </Button>
          </div>
        </div>

        {/* Community CTA */}
        <Card className="bg-gray-900 text-white text-center">
          <CardContent className="p-8">
            <Users className="h-16 w-16 mx-auto mb-6 text-kenyan-gold" />
            <h3 className="text-3xl font-bold mb-4">Ready to Join Kenya's Crypto Revolution?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Become part of a supportive community that's shaping the future of finance in Kenya. 
              Learn, trade, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-kenyan-green hover:bg-kenyan-green/90 text-white px-8 py-3 text-lg">
                Join Community
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                Download App
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Community;
