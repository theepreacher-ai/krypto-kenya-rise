
import React from 'react';
import { Smartphone, Shield, Zap, Lock, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TradingPlatform = () => {
  const features = [
    {
      icon: Smartphone,
      title: "M-Pesa Integration",
      description: "Seamlessly deposit and withdraw using M-Pesa. Trade crypto as easily as sending money to friends."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our optimized platform built for Kenyan internet speeds."
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your funds are protected with military-grade encryption and cold storage technology."
    },
    {
      icon: DollarSign,
      title: "Lowest Fees",
      description: "Trade with confidence knowing you're getting the best rates in Kenya. No hidden charges."
    }
  ];

  const cryptos = [
    { name: "Bitcoin", symbol: "BTC", price: "KSh 6,750,000", change: "+5.2%", positive: true },
    { name: "Ethereum", symbol: "ETH", price: "KSh 345,000", change: "+3.8%", positive: true },
    { name: "USDT", symbol: "USDT", price: "KSh 135", change: "+0.1%", positive: true },
    { name: "Binance Coin", symbol: "BNB", price: "KSh 89,500", change: "-1.2%", positive: false }
  ];

  return (
    <section id="trading" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-kenyan-green mb-6">
            Trading Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of crypto trading with our mobile-first platform 
            designed specifically for Kenyan users.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Platform Features */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Trade Crypto Like a Pro
            </h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-kenyan-green/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-kenyan-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-8 bg-kenyan-green hover:bg-kenyan-green/90 text-white px-8 py-3 text-lg">
              Download App
            </Button>
          </div>

          {/* Mock Trading Interface */}
          <div className="animate-slide-up">
            <Card className="bg-gray-900 text-white overflow-hidden">
              <CardHeader className="bg-kenyan-green">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Lock className="h-5 w-5" />
                    <span>KryptoKenya Pro</span>
                  </span>
                  <span className="text-sm bg-kenyan-gold text-kenyan-black px-2 py-1 rounded">Live</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Portfolio Balance</span>
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white">KSh 247,850</div>
                  <div className="text-green-400 text-sm">+12.5% today</div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-gray-400 mb-2">Popular Cryptocurrencies</div>
                  {cryptos.map((crypto, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-kenyan-gold rounded-full flex items-center justify-center text-kenyan-black font-bold text-sm">
                          {crypto.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{crypto.name}</div>
                          <div className="text-xs text-gray-400">{crypto.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{crypto.price}</div>
                        <div className={`text-xs ${crypto.positive ? 'text-green-400' : 'text-red-400'}`}>
                          {crypto.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6 bg-kenyan-gold text-kenyan-black hover:bg-kenyan-gold/90 font-semibold">
                  Start Trading Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security Features */}
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Shield className="h-16 w-16 mx-auto mb-4 text-kenyan-gold" />
              <h3 className="text-2xl font-bold mb-4">Your Security is Our Priority</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We use the same security standards as international banks to protect your investments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Lock className="h-8 w-8 mx-auto mb-3 text-kenyan-gold" />
                <h4 className="font-semibold mb-2">Cold Storage</h4>
                <p className="text-sm text-gray-300">95% of funds stored offline</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-3 text-kenyan-gold" />
                <h4 className="font-semibold mb-2">2FA Protection</h4>
                <p className="text-sm text-gray-300">Multi-factor authentication</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-3 text-kenyan-gold" />
                <h4 className="font-semibold mb-2">Real-time Monitoring</h4>
                <p className="text-sm text-gray-300">24/7 fraud detection</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TradingPlatform;
