import { motion } from "framer-motion";
import { MapPin, Home, Ruler } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const formatPrice = (price: string) => {
    const numPrice = parseFloat(price);
    if (numPrice >= 1000000) {
      return `KES ${(numPrice / 1000000).toFixed(1)}M`;
    }
    return `KES ${numPrice.toLocaleString()}`;
  };

  return (
    <motion.div
      className="property-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      data-testid={`property-card-${property.id}`}
    >
      <div className="overflow-hidden">
        <img 
          src={property.imageUrl}
          alt={property.title}
          className="property-image w-full h-48 object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-flora-charcoal mb-2 line-clamp-2" data-testid={`property-title-${property.id}`}>
          {property.title}
        </h3>
        <p className="text-sm sm:text-base text-flora-gray-600 mb-3 flex items-center">
          <MapPin className="h-4 w-4 text-flora-gold mr-2 flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </p>
        <p className="text-sm sm:text-base text-flora-gray-600 mb-4 flex items-center">
          {property.type === 'house' ? (
            <Home className="h-4 w-4 text-flora-green mr-2 flex-shrink-0" />
          ) : (
            <Ruler className="h-4 w-4 text-flora-green mr-2 flex-shrink-0" />
          )}
          <span className="truncate">{property.size}</span>
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <span className="text-xl sm:text-2xl font-bold flora-gold" data-testid={`property-price-${property.id}`}>
            {formatPrice(property.price)}
          </span>
          <button 
            className="bg-flora-green hover:bg-flora-charcoal text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
            onClick={() => {
              // TODO: Implement property detail view
              alert(`View details for ${property.title}`);
            }}
            data-testid={`button-view-details-${property.id}`}
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
