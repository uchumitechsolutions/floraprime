import { motion } from "framer-motion";
import { Award, Handshake, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Years of successful property transactions",
      color: "bg-flora-green"
    },
    {
      icon: Handshake,
      title: "Trust & Integrity",
      description: "Transparent dealings and honest advice",
      color: "bg-flora-gold"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Personalized service for every client",
      color: "bg-flora-orange"
    }
  ];

  return (
    <section id="about" className="py-20 bg-flora-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-flora-charcoal mb-4">About Flora Prime Properties</h2>
          <div className="w-24 h-1 bg-flora-gold mx-auto mb-8"></div>
          <p className="text-xl text-flora-gray-600 max-w-3xl mx-auto">
            Led by Director Paul K Ngugi, we are Kenya's trusted partner in real estate, 
            specializing in premium land and property transactions across the country.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional real estate consultation" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-flora-charcoal mb-6">
              Your Trusted Real Estate Partner
            </h3>
            <p className="text-flora-gray-600 mb-6 leading-relaxed">
              With years of experience in the Kenyan real estate market, Flora Prime Properties 
              has established itself as a leader in property transactions. We understand the 
              local market dynamics and provide personalized service to each client.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-flora-charcoal">{feature.title}</h4>
                      <p className="text-flora-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
