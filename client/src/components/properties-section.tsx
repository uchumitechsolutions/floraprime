import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Property } from "@shared/schema";
import PropertyCard from "./property-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PropertiesSection() {
  const { data: properties, isLoading, error } = useQuery<Property[]>({
    queryKey: ['/api/properties/featured'],
  });

  if (error) {
    return (
      <section id="properties" className="py-20 bg-flora-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-flora-charcoal mb-4">Featured Lands & Plots</h2>
            <div className="w-24 h-1 bg-flora-gold mx-auto mb-8"></div>
            <p className="text-red-600">Failed to load properties. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="properties" className="py-20 bg-flora-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-flora-charcoal mb-4">Featured Lands & Plots</h2>
          <div className="w-24 h-1 bg-flora-gold mx-auto mb-8"></div>
          <p className="text-xl text-flora-gray-600 max-w-3xl mx-auto">
            Discover premium properties in prime locations across Kenya
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Skeleton className="w-full h-48" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-8 w-1/3" />
                    <Skeleton className="h-10 w-24" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            properties?.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))
          )}
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
