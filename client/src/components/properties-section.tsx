import { motion } from "framer-motion";
import PropertyCard from "./property-card";
import { featuredProperties } from "@/data/properties";

export default function PropertiesSection() {
  const properties = featuredProperties;

  return (
    <section id="properties" className="py-20 bg-flora-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-flora-charcoal mb-4">Featured Lands & Plots</h2>
          <div className="w-16 sm:w-24 h-1 bg-flora-gold mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-flora-gray-600 max-w-3xl mx-auto px-4">
            Discover premium properties in prime locations across Kenya
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button 
            className="bg-flora-gold hover:bg-flora-orange text-flora-charcoal font-semibold py-3 px-8 rounded-full glow-button transition-all duration-300"
            data-testid="button-view-all-properties"
          >
            View All Properties
          </button>
        </motion.div>
      </div>
    </section>
  );
}
