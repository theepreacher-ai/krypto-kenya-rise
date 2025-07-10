
import React from 'react';
import { Shield, FileCheck, Award, CheckCircle, AlertTriangle, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Compliance = () => {
  const complianceFeatures = [
    {
      icon: Shield,
      title: "VASP Bill Compliant",
      description: "Fully compliant with Kenya's Virtual Asset Service Provider regulations",
      status: "Certified"
    },
    {
      icon: FileCheck,
      title: "KRA Tax Compliance",
      description: "Automated tax reporting and guidance for all crypto transactions",
      status: "Integrated"
    },
    {
      icon: Award,
      title: "Licensed & Regulated",
      description: "Operating under full regulatory oversight and supervision",
      status: "Active"
    },
    {
      icon: Users,
      title: "Consumer Protection",
      description: "Your funds are protected by Kenya's financial consumer protection laws",
      status: "Guaranteed"
    }
  ];

  const certifications = [
    { name: "CBK Licensed", authority: "Central Bank of Kenya" },
    { name: "VASP Registered", authority: "Financial Regulatory Authority" },
    { name: "ISO 27001", authority: "Information Security" },
    { name: "KRA Compliant", authority: "Kenya Revenue Authority" }
  ];

  return (
    <section id="compliance" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-kenyan-green/10 rounded-full">
              <Shield className="h-12 w-12 text-kenyan-green" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-kenyan-green mb-6">
            Regulatory Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade with confidence knowing that KryptoKenya operates under full regulatory 
            compliance with Kenya's cryptocurrency laws and international standards.
          </p>
        </div>

        {/* Compliance Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {complianceFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="p-4 bg-kenyan-green/10 rounded-full w-fit mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-kenyan-green" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">{feature.status}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Our Certifications & Licenses
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-kenyan-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-kenyan-green" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.authority}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Tax Compliance Section */}
        <Card className="bg-white border-l-4 border-l-kenyan-blue">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <FileCheck className="h-8 w-8 text-kenyan-blue" />
                  <h3 className="text-2xl font-bold text-gray-800">Tax Compliance Made Easy</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We automatically generate tax reports compliant with KRA requirements. 
                  Never worry about crypto tax calculations again - we handle it all for you.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Automated transaction reporting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Capital gains calculations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Annual tax summaries</span>
                  </div>
                </div>
                <Button className="bg-kenyan-blue hover:bg-kenyan-blue/90 text-white">
                  Learn About Tax Compliance
                </Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-center">
                  <AlertTriangle className="h-12 w-12 text-kenyan-gold mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Important Notice</h4>
                  <p className="text-sm text-gray-600">
                    All crypto transactions in Kenya are subject to tax obligations. 
                    KryptoKenya helps you stay compliant automatically.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Trusted by thousands of Kenyans and backed by leading institutions
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">CBK</div>
            <div className="text-2xl font-bold text-gray-400">KRA</div>
            <div className="text-2xl font-bold text-gray-400">CMA</div>
            <div className="text-2xl font-bold text-gray-400">ISO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
