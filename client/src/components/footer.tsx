import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#properties", label: "Properties" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-flora-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold mb-4">
              <span className="flora-gold">FLORA</span> PRIME
            </div>
            <p className="text-gray-300 mb-6">
              Turning your land and home dreams into reality with professional expertise and personalized service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a 
                  key={label}
                  href={href} 
                  className="text-flora-gold hover:text-flora-orange transition-colors duration-300"
                  data-testid={`social-${label.toLowerCase()}`}
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <a 
                    href={href} 
                    className="text-gray-300 hover:text-flora-gold transition-colors duration-300"
                    data-testid={`footer-link-${label.toLowerCase().replace(' ', '-')}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-start">
                <MapPin className="h-5 w-5 text-flora-gold mr-2 mt-0.5 flex-shrink-0" />
                P.O BOX 29309-00625, Nairobi
              </p>
              <p className="text-gray-300 flex items-center">
                <Phone className="h-5 w-5 text-flora-gold mr-2 flex-shrink-0" />
                +254 786 887 196
              </p>
              <p className="text-gray-300 flex items-center">
                <Mail className="h-5 w-5 text-flora-gold mr-2 flex-shrink-0" />
                floraprime@gmail.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Flora Prime Properties. All rights reserved. | Director: Paul K Ngugi</p>
        </div>
      </div>
    </footer>
  );
}
