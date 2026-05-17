import { Users, Target, HeartHandshake, Lightbulb, Sprout, HandshakeIcon } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroImage from "../../imports/image-5.png";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Customer Focus",
      description: "We prioritize customer satisfaction, delivering quality products and exceptional service at affordable prices.",
    },
    {
      icon: HeartHandshake,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethics in all our interactions and businesses.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creativity, embracing new ideas and solutions to drive growth in the agricultural sector.",
    },
    {
      icon: Sprout,
      title: "Sustainability",
      description: "We promote environmentally responsible practices, ensuring a better future.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "We collaborate, support, and empower our workers as well as stakeholders to achieve shared goals.",
    },
    {
      icon: HandshakeIcon,
      title: "Social Responsibility",
      description: "We believe in being beneficial to the community around us. We promote fair labor practices.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-green-800 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={heroImage}
            alt="About Dagona Farms"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-6">About Dagona Farms</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              A new chapter in Nigeria's agricultural history, committed to transforming farming through modern technology, sustainable practices, and farmer empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-green-900 mb-6">Our Story & Evolution</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  In February 2025, a new chapter was written in Nigeria's agricultural history when <strong className="text-green-800">Dagona Homes of Agriculture</strong> was founded as a Registered Agribusiness Enterprise in Nigeria, with Operational Regions in Northern Nigeria and Regional West Africa.
                </p>
                <p>
                  The company was established during a time of immense transformation in the agricultural sector, as an Integrated Agricultural Company to deliver Modern, Technology-Driven, and Sustainable Farming Solutions across Crop Production, Livestock, Aquaculture, Processing, and Commodity Marketing.
                </p>
                <p>
                  Although formally established in 2025, the origins of Dagona Farms are grounded in years of agricultural experience, practical field engagement, and a deep understanding of Nigeria's evolving agribusiness environment.
                </p>
                <p>
                  The founders — comprising experienced agronomists, livestock managers, and commercially driven farm operators — were united by a clear objective: to develop a modern, efficient, and sustainable agricultural enterprise built on both crop and livestock production.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708796705570-33fd29ef67d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxncmVlbmhvdXNlJTIwYWdyaWN1bHR1cmUlMjBtb2Rlcm4lMjBmYXJtaW5nJTIwdGVjaG5vbG9neSUyMGh5ZHJvcG9uaWNzfGVufDF8fHx8MTc3OTAyMjMzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern greenhouse agriculture facility"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-green-700" size={32} />
              </div>
              <h2 className="text-3xl text-green-900 mb-4">Vision Statement</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To become a leading model of modern and sustainable agriculture in Africa, recognized for high productivity, responsible practices, and strong market integration.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Sprout className="text-green-700" size={32} />
              </div>
              <h2 className="text-3xl text-green-900 mb-4">Mission Statement</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To produce, process and distribute high-quality agricultural and livestock products using efficient systems, innovation, and sustainable resource management, while creating economic opportunities for communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">Our Brand Promise</h2>
          <p className="text-2xl md:text-3xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            We promise to be committed in building trust and cooperation with relevant stakeholders and clients in order to achieve self-sufficiency, economic prosperity and food security.
          </p>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-green-900 mb-4">Company Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every action we take
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-green-700" size={28} />
                  </div>
                  <h3 className="text-xl text-green-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Identity Section */}
      <section className="bg-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-8">Corporate Identity & Registration</h2>
            <div className="space-y-6 text-lg text-green-100 leading-relaxed">
              <p>
                Dagona Homes of Agriculture is a duly registered enterprise in Nigeria. Its registration reflects its legitimacy and compliance with the regulatory frameworks governing corporate operations in Nigeria.
              </p>
              <p>
                The company operates from its headquarters in <strong className="text-white">Kano, Nigeria</strong>, with regional field operations spread across strategic agricultural clusters in the country. The company also maintains a branch office in <strong className="text-white">Abuja</strong>.
              </p>
              <p>
                The corporate identity of Dagona Homes of Agriculture blends modernity with tradition. While its governance and operational structures reflect international best practices, its core mission is deeply rooted in African realities — empowering farmers, preserving food cultures, and sustaining rural livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-green-900 mb-12 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl text-green-900 mb-4">Head Office</h3>
              <div className="space-y-2 text-gray-700">
                <p>NO.33 Karaya plaza, Zoo Road</p>
                <p>Kano, Nigeria</p>
                <div className="mt-4 space-y-1">
                  <p>Tel: +234 806 121 9995</p>
                  <p>Tel: +234 702 552 9499</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl text-green-900 mb-4">Branch Office</h3>
              <div className="space-y-2 text-gray-700">
                <p>Suite 305, Pal mall plaza</p>
                <p>4th avenue Abuja</p>
                <p>Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
