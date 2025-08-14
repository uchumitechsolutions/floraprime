import { motion } from "framer-motion";
import { Home, DollarSign, Percent } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Property Buying",
      description: "Find your dream property with our extensive portfolio of premium plots and houses across Kenya. We guide you through every step.",
      gradient: "from-flora-green to-flora-gold"
    },
    {
      icon: DollarSign,
      title: "Property Selling",
      description: "Get the best value for your property with our expert marketing strategies and extensive network of qualified buyers.",
      gradient: "from-flora-gold to-flora-orange"
    },
    {
      icon: Percent,
      title: "Commission Agency",
      description: "Professional representation for all your real estate transactions with competitive rates and exceptional service quality.",
      gradient: "from-flora-orange to-flora-brown"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-flora-charcoal mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-flora-gold mx-auto mb-8"></div>
          <p className="text-xl text-flora-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="text-center p-8 rounded-xl shadow-lg hover:shadow-flora transition-all duration-300 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                data-testid={`service-${service.title.toLowerCase().replace(' ', '-')}`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-flora-charcoal mb-4">{service.title}</h3>
                <p className="text-flora-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
