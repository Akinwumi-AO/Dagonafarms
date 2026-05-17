import { Wheat, Fish, Beef, Apple, Factory, TrendingUp, Droplet, Sun, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Products() {
  const farmingSectors = [
    {
      title: "Crop Production",
      subtitle: "Sustainable & High-Yield Farming",
      description: "Modern cultivation of staple crops including rice, maize, vegetables, and legumes using advanced agricultural techniques and sustainable practices.",
      image: "https://images.unsplash.com/photo-1651981350249-6173caeeb660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZmFybWluZyUyMHBhZGR5JTIwZmllbGR8ZW58MXx8fHwxNzc1MzIzMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Wheat,
      color: "from-green-600 to-green-700",
      products: [
        { name: "Rice", description: "Premium quality paddy rice", icon: "🌾" },
        { name: "Maize", description: "Yellow & white corn varieties", icon: "🌽" },
        { name: "Vegetables", description: "Fresh organic vegetables", icon: "🥬" },
        { name: "Legumes", description: "Beans, soybeans & groundnuts", icon: "🫘" },
      ],
    },
    {
      title: "Livestock Farming",
      subtitle: "Quality Animal Products",
      description: "Professional livestock management including cattle, poultry, and small ruminants with modern herd management practices and quality feed programs.",
      image: "https://images.unsplash.com/photo-1645749402055-8e9d6b70e952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjBjYXR0bGUlMjBmYXJtaW5nfGVufDF8fHx8MTc3NTIyMzUzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Beef,
      color: "from-amber-600 to-amber-700",
      products: [
        { name: "Cattle", description: "Beef & dairy cattle", icon: "🐄" },
        { name: "Poultry", description: "Chickens & eggs production", icon: "🐔" },
        { name: "Small Ruminants", description: "Goats & sheep", icon: "🐐" },
        { name: "Animal Products", description: "Meat, milk & eggs", icon: "🥩" },
      ],
    },
    {
      title: "Aquaculture",
      subtitle: "Sustainable Fish Farming",
      description: "Modern fish farming operations with controlled pond environments, quality feed management, and sustainable aquaculture practices.",
      image: "https://images.unsplash.com/photo-1645692396914-4ca9df38cce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZmFybWluZyUyMGFxdWFjdWx0dXJlJTIwcG9uZHxlbnwxfHx8fDE3NzUzMjMwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Fish,
      color: "from-blue-600 to-blue-700",
      products: [
        { name: "Catfish", description: "Fresh catfish production", icon: "🐟" },
        { name: "Tilapia", description: "Quality tilapia farming", icon: "🐠" },
        { name: "Aquatic Feed", description: "Specialized fish feed", icon: "🌊" },
        { name: "Fingerlings", description: "Quality fish seeds", icon: "🐡" },
      ],
    },
  ];

  const processingServices = [
    {
      icon: Factory,
      title: "Processing & Value Addition",
      description: "State-of-the-art processing facilities for grains, vegetables, and animal products",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Rigorous quality assurance and food safety standards",
    },
    {
      icon: TrendingUp,
      title: "Market Distribution",
      description: "Efficient supply chain and distribution networks",
    },
  ];

  const qualityFeatures = [
    {
      icon: Sun,
      title: "Sustainable Practices",
      description: "Environmentally responsible farming methods that preserve natural resources",
    },
    {
      icon: Droplet,
      title: "Water Management",
      description: "Efficient irrigation systems and water conservation techniques",
    },
    {
      icon: ShieldCheck,
      title: "GAP Certified",
      description: "All production follows Good Agricultural Practices standards",
    },
    {
      icon: TrendingUp,
      title: "High Productivity",
      description: "Modern techniques ensuring maximum yield and quality",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-green-800 text-white py-32">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1665315302321-46989ca7829a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwZnJlc2glMjB2ZWdldGFibGVzJTIwcHJvZHVjZXxlbnwxfHx8fDE3NzUzMjMwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fresh produce"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-green-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-green-100">🌱 Our Products</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Quality Products From Our Farms
          </h1>
          <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            Fresh, sustainable, and high-quality agricultural products across crops, livestock, and aquaculture
          </p>
        </div>
      </section>

      {/* Farming Sectors - Detailed Sections */}
      {farmingSectors.map((sector, index) => {
        const Icon = sector.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={index} className={`py-20 ${isEven ? 'bg-white' : 'bg-green-50'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${sector.color} text-white px-4 py-2 rounded-full mb-6`}>
                    <Icon size={20} />
                    <span>{sector.title}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl text-green-900 mb-4">
                    {sector.subtitle}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {sector.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sector.products.map((product, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl shadow-md border border-green-100">
                        <div className="text-3xl mb-2">{product.icon}</div>
                        <h4 className="text-lg text-green-900 mb-1">{product.name}</h4>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                      <Icon className={`text-green-700`} size={48} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Processing & Value Addition */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Processing & Distribution</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              From farm to market with quality assurance every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-green-800/50 backdrop-blur-sm p-8 rounded-2xl text-center">
                  <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-green-100 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              Why Choose Our Products
            </div>
            <h2 className="text-4xl md:text-5xl text-green-900 mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Commitment to excellence, sustainability, and food safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-green-700" size={36} />
                  </div>
                  <h3 className="text-xl text-green-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-12 text-white text-center">
            <Apple className="mx-auto mb-6 text-green-100" size={64} />
            <h2 className="text-4xl md:text-5xl mb-6">Interested in Our Products?</h2>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Partner with us for reliable, high-quality agricultural products
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-full hover:bg-green-50 transition-colors text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}