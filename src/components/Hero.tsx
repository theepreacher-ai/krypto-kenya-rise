
import React from 'react';
import { ArrowRight, Shield, Smartphone, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-kenyan-gold/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-kenyan-red/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold leading-tight mb-6">
              Empower Your <span className="text-kenyan-gold">Financial Future</span> with KryptoKenya
            </h1>
            
            <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
              Join Kenya's Crypto Revolution – Safe, Simple, and Local
            </p>
            
            <p className="text-lg mb-8 text-white/80 leading-relaxed">
              Trade Bitcoin, Ethereum, and USDT with seamless M-Pesa integration. 
              Learn crypto from basics to advanced strategies with our comprehensive education hub.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-kenyan-gold text-kenyan-black hover:bg-kenyan-gold/90 font-semibold px-8 py-4 text-lg"
              >
                Start Trading Today – No Experience Needed
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-kenyan-green font-semibold px-8 py-4 text-lg"
              >
                Learn Crypto, Earn Rewards
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-kenyan-gold" />
                <span>Fully Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-kenyan-gold" />
                <span>M-Pesa Integrated</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-kenyan-gold" />
                <span>Low Fees</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Placeholder */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-white/5 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <Smartphone className="h-16 w-16 mx-auto mb-4 text-kenyan-gold" />
                  <p className="text-lg font-semibold">Mobile-First Trading</p>
                  <p className="text-sm opacity-80">Designed for Kenyan Users</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-white text-center">
                <div>
                  <div className="text-2xl font-bold text-kenyan-gold">50K+</div>
                  <div className="text-sm opacity-80">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-kenyan-gold">99.9%</div>
                  <div className="text-sm opacity-80">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-kenyan-gold">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
