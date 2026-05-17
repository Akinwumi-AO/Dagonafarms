import { Link } from "react-router";
import { ArrowRight, Sprout, Users, TrendingUp, Award, CheckCircle, PhoneCall, Leaf, Wheat, Fish, Beef } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const farmingTypes = [
    {
      title: "Crop Production",
      description: "Rice, Maize, Vegetables & Legumes",
      image: "https://images.unsplash.com/photo-1651981350249-6173caeeb660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZmFybWluZyUyMHBhZGR5JTIwZmllbGR8ZW58MXx8fHwxNzc1MzIzMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Wheat,
    },
    {
      title: "Livestock Farming",
      description: "Cattle, Poultry & Animal Products",
      image: "https://images.unsplash.com/photo-1645749402055-8e9d6b70e952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjBjYXR0bGUlMjBmYXJtaW5nfGVufDF8fHx8MTc3NTIyMzUzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Beef,
    },
    {
      title: "Aquaculture",
      description: "Fish Farming & Aquatic Products",
      image: "https://images.unsplash.com/photo-1645692396914-4ca9df38cce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZmFybWluZyUyMGFxdWFjdWx0dXJlJTIwcG9uZHxlbnwxfHx8fDE3NzUzMjMwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Fish,
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "We use sustainable and organic farming methods",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in modern agriculture",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced agronomists and farm managers",
    },
    {
      icon: TrendingUp,
      title: "Market Access",
      description: "Direct links to reliable buyers and processors",
    },
  ];

  const stats = [
    { value: "500+", label: "Hectares Farmland", color: "from-green-600 to-green-700" },
    { value: "1000+", label: "Farmers Trained", color: "from-amber-600 to-amber-700" },
    { value: "50+", label: "Products", color: "from-green-700 to-green-800" },
    { value: "10+", label: "Communities", color: "from-yellow-600 to-yellow-700" },
  ];

  const services = [
    {
      title: "GAP Training",
      description: "Professional training in Good Agricultural Practices for improved productivity",
      icon: "🎓",
    },
    {
      title: "Farm Management",
      description: "End-to-end farm management services for commercial operations",
      icon: "🚜",
    },
    {
      title: "Market Linkages",
      description: "Connecting farmers to buyers, processors and export markets",
      icon: "📈",
    },
    {
      title: "Extension Services",
      description: "Continuous technical support throughout the farming season",
      icon: "🌱",
    },
  ];

  const testimonials = [
    {
      name: "Abubakar Mohammed",
      role: "Rice Farmer",
      text: "Dagona Farms transformed my farming practices. With their training and support, my yield has doubled!",
      image: "https://images.unsplash.com/photo-1741940365182-bc0ffdc1262d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFybWVyJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc3NTMyMzA5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Fatima Usman",
      role: "Vegetable Farmer",
      text: "The market linkages provided by Dagona Farms have been a game changer for my business. I now have steady buyers.",
      image: "https://images.unsplash.com/photo-1622123651884-e3d30eebfbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB3b3JrZXJzJTIwdGVhbSUyMGZpZWxkfGVufDF8fHx8MTc3NTMyMzA5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Ibrahim Suleiman",
      role: "Livestock Farmer",
      text: "Their expertise in livestock management helped me reduce losses and increase profitability significantly.",
      image: "https://images.unsplash.com/photo-1651838677683-f642527059c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBoYW5kcyUyMHNvaWwlMjBwbGFudHN8ZW58MXx8fHwxNzc1MzIzMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const whyChooseUs = [
    { text: "Modern Technology-Driven Farming", icon: CheckCircle },
    { text: "Sustainable Agricultural Practices", icon: CheckCircle },
    { text: "Comprehensive Farmer Training Programs", icon: CheckCircle },
    { text: "Direct Market Access & Linkages", icon: CheckCircle },
    { text: "Expert Agricultural Extension Services", icon: CheckCircle },
    { text: "Year-Round Production Systems", icon: CheckCircle },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - More Engaging */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-green-950 via-green-900 to-green-800">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTMyMjMwOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern agriculture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-green-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-green-100">🌾 Home of Agriculture</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Organic Farming & Agriculture
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
                Modern, Technology-Driven, and Sustainable Farming Solutions across Crop Production, Livestock, Aquaculture, and Processing
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white border-0">
                    Explore Services
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 border-2 border-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Feature Cards Overlay */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-green-700" size={24} />
                    </div>
                    <h3 className="text-xl text-green-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl md:text-5xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Farming Types - Visual Showcase */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl text-green-900 mb-4">
              Our Agricultural Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive farming solutions across multiple agricultural sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {farmingTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Link key={index} to="/products" className="group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[400px]">
                    <ImageWithFallback
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/95 via-green-900/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl mb-2">{type.title}</h3>
                      <p className="text-green-100 mb-4">{type.description}</p>
                      <div className="flex items-center text-amber-400 group-hover:translate-x-2 transition-transform">
                        Learn More <ArrowRight className="ml-2" size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1708975477074-71e2907b699f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBtYWNoaW5lcnklMjB0cmFjdG9yfGVufDF8fHx8MTc3NTMyMzA5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern farming equipment"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-amber-500 text-white p-8 rounded-2xl shadow-2xl max-w-[250px]">
                <div className="text-5xl mb-2">2025</div>
                <div className="text-lg">Established to Transform Agriculture</div>
              </div>
            </div>

            <div>
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                About Dagona Farms
              </div>
              <h2 className="text-4xl md:text-5xl text-green-900 mb-6">
                We're Best Agriculture & Organic Farm
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dagona Homes of Agriculture is an integrated agribusiness enterprise delivering modern, technology-driven, and sustainable farming solutions. Founded in February 2025, we bring together years of agricultural experience and innovation.
              </p>
              
              <div className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="text-green-600 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <Link to="/about">
                <Button size="lg" className="bg-green-700 hover:bg-green-800">
                  Discover More
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-800 px-4 py-2 rounded-full mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">What We Provide</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive support for farmers and agricultural enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-green-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-green-800 transition-colors"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-green-100 mb-4">{service.description}</p>
                <Link to="/services" className="text-amber-400 flex items-center hover:translate-x-2 transition-transform">
                  Read More <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl text-green-900 mb-4">
              What Our Farmers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real farmers who have transformed their farming practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg text-green-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-4xl text-amber-500 mb-4">"</div>
                <p className="text-gray-700 italic leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              Our Products
            </div>
            <h2 className="text-4xl md:text-5xl text-green-900 mb-4">
              Fresh From Our Farms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality agricultural products from sustainable farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rice", image: "https://images.unsplash.com/photo-1651981350249-6173caeeb660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZmFybWluZyUyMHBhZGR5JTIwZmllbGR8ZW58MXx8fHwxNzc1MzIzMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
              { name: "Maize", image: "https://images.unsplash.com/photo-1674653495530-11c685a09416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWl6ZSUyMGNvcm4lMjBmYXJtaW5nJTIwaGFydmVzdHxlbnwxfHx8fDE3NzUzMjMwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
              { name: "Vegetables", image: "https://images.unsplash.com/photo-1696595999196-15a33d311355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBmYXJtaW5nJTIwZ2FyZGVufGVufDF8fHx8MTc3NTMyMzA5N3ww&ixlib=rb-4.1.0&q=80&w=1080" },
              { name: "Poultry", image: "https://images.unsplash.com/photo-1772337196364-9d84fd2794f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwcG91bHRyeSUyMGZhcm1pbmd8ZW58MXx8fHwxNzc1MzIzMDk3fDA&ixlib=rb-4.1.0&q=80&w=1080" },
            ].map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-2xl mb-2">{product.name}</h3>
                    <Link to="/products" className="text-amber-400 flex items-center">
                      View Details <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Partner with us for modern, sustainable agricultural solutions that deliver results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <PhoneCall className="mr-2" size={20} />
                Contact Us Today
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-700">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
