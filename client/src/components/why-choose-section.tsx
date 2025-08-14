import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Legal Compliance",
      description: "All properties verified for legal documentation and compliance",
      color: "bg-flora-green"
    },
    {
      title: "Market Expertise",
      description: "Deep knowledge of Kenyan real estate market trends and values",
      color: "bg-flora-gold"
    },
    {
      title: "Personalized Service",
      description: "Tailored solutions to meet your unique property needs and budget",
      color: "bg-flora-orange"
    },
    {
      title: "After-Sale Support",
      description: "Continued assistance even after successful property transactions",
      color: "bg-flora-brown"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-flora-charcoal mb-4">Why Choose Flora Prime Properties?</h2>
          <div className="w-24 h-1 bg-flora-gold mx-auto mb-8"></div>
          <p className="text-xl text-flora-gray-600 max-w-3xl mx-auto">
            Experience excellence in every real estate transaction with our proven expertise and commitment
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`feature-${feature.title.toLowerCase().replace(' ', '-')}`}
            >
              <motion.div 
                className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Check className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-flora-charcoal mb-2">{feature.title}</h3>
              <p className="text-flora-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
