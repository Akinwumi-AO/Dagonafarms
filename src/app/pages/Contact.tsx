import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroImage from "../../imports/image-5.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["NO.33 Karaya plaza, Zoo Road", "Kano, Nigeria"],
    },
    {
      icon: MapPin,
      title: "Branch Office",
      details: ["Suite 305, Pal mall plaza", "4th avenue Abuja", "Nigeria"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 806 121 9995", "+234 702 552 9499"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-green-800 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src={heroImage}
            alt="Contact Dagona Farms"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Get in touch with us to learn more about our services, products, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-green-100"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-green-700" size={28} />
                  </div>
                  <h3 className="text-xl text-green-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
              <h2 className="text-3xl text-green-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button type="submit" className="w-full bg-green-700 hover:bg-green-800" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Contact Us */}
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl text-green-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-lg text-green-900 mb-1">Partnership Opportunities</h4>
                      <p className="text-gray-600">Explore collaboration in agricultural development</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-lg text-green-900 mb-1">Service Inquiries</h4>
                      <p className="text-gray-600">Learn about our training and extension services</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-lg text-green-900 mb-1">Product Orders</h4>
                      <p className="text-gray-600">Purchase quality agricultural products</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-lg text-green-900 mb-1">General Questions</h4>
                      <p className="text-gray-600">Any inquiries about our operations</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-green-900 text-white p-8 rounded-2xl">
                <h3 className="text-2xl mb-4">Connect With Us</h3>
                <p className="text-green-100 mb-6">
                  Follow us on social media to stay updated on our latest activities, events, and agricultural insights.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>

              {/* Brand Promise */}
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl text-green-900 mb-4">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We promise to be committed in building trust and cooperation with relevant stakeholders and clients in order to achieve self-sufficiency, economic prosperity and food security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-green-900 mb-12 text-center">Find Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl text-green-900 mb-4">Kano Office</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <MapPin className="text-green-700 flex-shrink-0 mt-1" size={20} />
                  <span>NO.33 Karaya plaza, Zoo Road, Kano, Nigeria</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="text-green-700 flex-shrink-0" size={20} />
                  <span>+234 806 121 9995</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="text-green-700 flex-shrink-0" size={20} />
                  <span>+234 702 552 9499</span>
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl text-green-900 mb-4">Abuja Branch</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <MapPin className="text-green-700 flex-shrink-0 mt-1" size={20} />
                  <span>Suite 305, Pal mall plaza, 4th avenue Abuja, Nigeria</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
