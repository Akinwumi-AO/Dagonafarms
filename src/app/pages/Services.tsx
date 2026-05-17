import { GraduationCap, Users, DollarSign, Tractor, TrendingUp, FileText, Sprout, HandshakeIcon, CheckCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { Button } from "../components/ui/button";

export default function Services() {
  const mainServices = [
    {
      icon: GraduationCap,
      title: "Good Agricultural Practices Training",
      shortTitle: "GAP Training",
      description: "Comprehensive training programs that empower farmers with modern agricultural knowledge and practical skills.",
      image: "https://images.unsplash.com/photo-1600150806193-cf869bcfee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0cmFpbmluZyUyMGZhcm1lcnN8ZW58MXx8fHwxNzc1MzIyMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Soil fertility management",
        "Seed selection & planting",
        "Integrated pest management",
        "Water-use efficiency",
        "Post-harvest practices",
        "Farmer field schools",
      ],
      color: "from-green-600 to-green-700",
    },
    {
      icon: Users,
      title: "Extension Services",
      shortTitle: "Technical Support",
      description: "Continuous technical backstopping and advisory services throughout the farming season.",
      image: "https://images.unsplash.com/photo-1758390285798-59b0d7d46371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBjb21tdW5pdHklMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzUzMjIzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Seasonal crop planning",
        "On-farm visits & support",
        "Emergency response",
        "Digital extension services",
        "Technical troubleshooting",
        "Best practice guidance",
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Tractor,
      title: "Farm Management Services",
      shortTitle: "Farm Management",
      description: "End-to-end professional farm management for commercial operations and investors.",
      image: "https://images.unsplash.com/photo-1708975477074-71e2907b699f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBtYWNoaW5lcnklMjB0cmFjdG9yfGVufDF8fHx8MTc3NTMyMzA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Feasibility assessment",
        "Farm design & layout",
        "Input procurement",
        "Operations management",
        "Labor supervision",
        "Performance monitoring",
      ],
      color: "from-amber-600 to-amber-700",
    },
    {
      icon: TrendingUp,
      title: "Market Linkages",
      shortTitle: "Market Access",
      description: "Direct connections to reliable buyers, processors, and export markets.",
      image: "https://images.unsplash.com/photo-1765260905999-06612390fb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFybSUyMGZpZWxkJTIwY3JvcHN8ZW58MXx8fHwxNzc1MzIyMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Market intelligence",
        "Contract farming schemes",
        "Export facilitation",
        "Price negotiation support",
        "Aggregation services",
        "Buyer networks",
      ],
      color: "from-green-700 to-green-800",
    },
  ];

  const additionalServices = [
    {
      icon: DollarSign,
      title: "Financial Literacy",
      description: "Training in budgeting, record keeping, and access to credit and insurance",
      color: "bg-yellow-500",
    },
    {
      icon: FileText,
      title: "Business Development",
      description: "Business plans, feasibility studies, and investment proposals",
      color: "bg-green-600",
    },
  ];

  const benefits = [
    {
      stat: "200%",
      label: "Average Yield Increase",
      description: "Farmers see dramatic improvements in productivity",
    },
    {
      stat: "500+",
      label: "Farmers Trained",
      description: "Building agricultural capacity across communities",
    },
    {
      stat: "24/7",
      label: "Support Available",
      description: "Digital extension services always accessible",
    },
    {
      stat: "100+",
      label: "Market Connections",
      description: "Reliable buyers and processors linked",
    },
  ];

  const processSteps = [
    { number: "01", title: "Assessment", description: "Evaluate your farming needs and goals" },
    { number: "02", title: "Planning", description: "Develop customized service plan" },
    { number: "03", title: "Implementation", description: "Deploy services with expert support" },
    { number: "04", title: "Monitoring", description: "Track progress and optimize results" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-green-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-green-100">🌱 What We Offer</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Comprehensive Agricultural Services
          </h1>
          <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            Empowering farmers with training, technology, and market access for sustainable growth
          </p>
        </div>
      </section>

      {/* Main Services - Alternating Layout */}
      {mainServices.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={index} className={`py-20 ${isEven ? 'bg-white' : 'bg-green-50'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-full mb-6`}>
                    <Icon size={20} />
                    <span>{service.shortTitle}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl text-green-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button className="bg-green-700 hover:bg-green-800">
                      Get Started
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>

                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end p-8">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                        <Icon className="text-green-700" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Services */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Additional Support Services</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive support beyond traditional farming services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-green-800/50 backdrop-blur-sm p-8 rounded-2xl">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-green-100 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl text-green-900 mb-4">
              Results That Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real outcomes from our services delivering transformative change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-5xl text-green-700 mb-4">{benefit.stat}</div>
                <h3 className="text-xl text-green-900 mb-2">{benefit.label}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-green-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to delivering exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:border-green-300 transition-colors">
                  <div className="text-6xl bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl text-green-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-green-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">"</div>
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed">
              The training and extension services from Dagona Farms completely transformed how I manage my farm. My yields have more than doubled, and I now have reliable buyers for my produce.
            </p>
            <div className="flex items-center justify-center gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741940365182-bc0ffdc1262d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFybWVyJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc3NTMyMzA5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Farmer testimonial"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-xl">Musa Ibrahim</div>
                <div className="text-green-300">Commercial Rice Farmer, Kano</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-12 md:p-16 text-white text-center">
            <HandshakeIcon className="mx-auto mb-6 text-green-100" size={64} />
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let's work together to transform your agricultural operations and achieve sustainable growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                  Contact Us Today
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-700">
                  View Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
